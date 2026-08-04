import multer from "multer";
import path from "node:path";
import crypto from "crypto";
import { Request } from "express";
import AppError from "../util/AppError";

const UPLOAD_DIR = path.join(process.cwd(), "uploads", "team-photos");

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const safeName = `${crypto.randomUUID()}${ext}`;
    cb(null, safeName);
  },
});

function fileFilter(
  _req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) {
  const ext = path.extname(file.originalname).toLowerCase();

  if (
    !ALLOWED_MIME_TYPES.includes(file.mimetype) ||
    !ALLOWED_EXTENSIONS.includes(ext)
  ) {
    return cb(new AppError("Only JPEG, PNG, or WEBP images are allowed", 400));
  }
  cb(null, true);
}

export const uploadTeamPhoto = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB — prevents disk-fill DoS via huge uploads
    files: 1,
  },
});
