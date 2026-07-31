import express from "express";
import AuthController from "../controllers/auth.controller";
import { protect } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/login", AuthController.handleUserLogin);
router.post("/refresh", AuthController.handleRefreshAccessToken);
router.post("/logout", AuthController.handleUserLogout);
router.get("/me", protect, AuthController.handleGetMe);

export default router;
