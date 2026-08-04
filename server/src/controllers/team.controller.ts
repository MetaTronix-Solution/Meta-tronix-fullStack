import Team from "../modules/team.module";
import asyncHandler from "../util/asyncHandler";
import AppError from "../util/AppError";
import { Request, Response } from "express";
import mongoose from "mongoose";
import fs from "fs/promises";
import path from "path";
import "multer";

const UPLOAD_DIR = path.join(process.cwd(), "uploads", "team-photos");

async function deletePhotoFile(photoUrl: string) {
  try {
    const filename = path.basename(photoUrl);
    await fs.unlink(path.join(UPLOAD_DIR, filename));
  } catch (err) {
    console.error("Failed to delete photo file:", err);
  }
}

function buildTeamPayload(body: Record<string, unknown>) {
  const {
    socialsLinkedin,
    socialsGithub,
    socialsEmail,
    photo, // stray field multer can leave in body when no file was attached — discard it
    ...rest
  } = body as {
    socialsLinkedin?: string;
    socialsGithub?: string;
    socialsEmail?: string;
    photo?: unknown;
    [key: string]: unknown;
  };

  const socials: { linkedin?: string; github?: string; email?: string } = {};

  if (socialsLinkedin !== undefined) socials.linkedin = socialsLinkedin;
  if (socialsGithub !== undefined) socials.github = socialsGithub;
  if (socialsEmail !== undefined) socials.email = socialsEmail;

  const hasSocials = Object.keys(socials).length > 0;

  return {
    ...rest,
    ...(hasSocials && { socials }),
  };
}

class TeamController {
  handleGetTeams = asyncHandler(async (req: Request, res: Response) => {
    const teams = await Team.find();

    res.status(200).json({
      success: true,
      data: teams,
    });
  });

  handleGetTeamById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new AppError("Invalid team member ID", 400);
    }

    const team = await Team.findById(id);

    if (!team) {
      throw new AppError("Team member not found", 404);
    }

    res.status(200).json({
      success: true,
      data: team,
    });
  });

  handleCreateTeam = asyncHandler(async (req: Request, res: Response) => {
    if (!req.file) {
      throw new AppError("Photo is required", 400);
    }

    const photoUrl = `/uploads/team-photos/${req.file.filename}`;
    const payload = buildTeamPayload(req.body);

    const team = await Team.create({
      ...payload,
      photoUrl,
    });

    res.status(201).json({
      success: true,
      data: team,
    });
  });

  handleUpdateTeam = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    if (!mongoose.Types.ObjectId.isValid(id)) {
      if (req.file) await deletePhotoFile(req.file.filename);
      throw new AppError("Invalid team member ID", 400);
    }

    const existing = await Team.findById(id);

    if (!existing) {
      if (req.file) await deletePhotoFile(req.file.filename);
      throw new AppError("Team member not found", 404);
    }

    const payload = buildTeamPayload(req.body);
    const updateData: Record<string, unknown> = { ...payload };

    if (req.file) {
      updateData.photoUrl = `/uploads/team-photos/${req.file.filename}`;
    }

    const team = await Team.findByIdAndUpdate(
      id,
      { status: req.body.status },
      { new: true, runValidators: true },
    );

    if (req.file && existing.photoUrl) {
      await deletePhotoFile(existing.photoUrl);
    }

    res.status(200).json({
      success: true,
      data: team,
    });
  });

  handleDeleteTeam = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new AppError("Invalid team member ID", 400);
    }

    const team = await Team.findOneAndDelete({
      _id: id,
      createdBy: (req as any).user?.id,
    });

    if (!team) {
      throw new AppError("Team member not found", 404);
    }

    if (team.photoUrl) {
      await deletePhotoFile(team.photoUrl);
    }

    res.status(200).json({
      success: true,
      message: "Team member deleted successfully",
      data: team,
    });
  });
}

export default new TeamController();
