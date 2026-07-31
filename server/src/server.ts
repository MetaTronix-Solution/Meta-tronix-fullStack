import express from "express";
import { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import { connectDb } from "./config/connectdb";
import authRouter from "./routes/auth.router";
import { seedAdmin } from "./seed/admin.seed";


const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }),
);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);

const port = process.env.PORT || 4000;

app.use("/health", (req: Request, res: Response) => {
  res.json({ success: true, message: "working properly" });
});

async function startServer() {
  try {
    await connectDb(process.env.MONGO_DB_URL!);

    await seedAdmin();

    app.listen(port, () => {
      console.log(`Server is running in the port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

startServer();
