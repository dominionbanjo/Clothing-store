import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import errorHandlerMiddleWare from "./middleware/errorHandlerMiddleWare.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

const app = express();

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME as string,
  api_key: process.env.CLOUD_API_KEY as string,
  api_secret: process.env.CLOUD_API_SECRET as string,
});

app.use(cookieParser(process.env.COOKIE_SECRET as string));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https://res.cloudinary.com", "data:"],
    },
  })
);
app.use(ExpressMongoSanitize());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

app.get("/test", (req: Request, res: Response) => {
  res.json({ msg: "test route" });
});

// app.use("*", (req: Request, res: Response) => {
//   res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
// });

app.use(errorHandlerMiddleWare);

const port: number = parseInt(process.env.PORT as string, 10) || 5100;

try {
  if (process.env.MONGO_URL) {
    await mongoose.connect(process.env.MONGO_URL);
  }
  app.listen(port, () => console.log(`server running on port ${port}...`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
