import User from "../modules/auth.module";
import asyncHandler from "../util/asyncHandler";
import AppError from "../util/AppError";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { JwtService } from "../util/jwt";

const cookieOptions = {
  httpOnly: true, // not accessible by JS like xss
  secure: process.env.NODE_ENV === "production", // HTTPS only in production
  sameSite: "strict" as const, // CSRF protection
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

class AuthController {
  //login
  handleUserLogin = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select(
      "+password +refreshToken",
    );

    if (!user) throw new AppError("Invalid credentials", 401);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new AppError("Invalid credentials", 401);

    const accessToken = JwtService.generateAccessToken(user.id, user.role);

    const refreshToken = JwtService.generateRefreshToken(user.id, user.role);

    user.refreshToken = await bcrypt.hash(refreshToken, 10);

    await user.save({
      validateBeforeSave: false,
    });

    res.cookie("refreshToken", refreshToken, cookieOptions);

    res.status(200).json({
      success: true,
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  });
}

export default new AuthController();
