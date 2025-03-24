import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import helmet from "helmet";
import cors from "cors";
import ExpressMongoSanitize from "express-mongo-sanitize";
import errorHandlerMiddleWare from "./middleware/errorHandlerMiddleWare.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

const app = express();

import path, { dirname } from "path";
import { fileURLToPath } from "url";

import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import reviewRouter from "./routes/reviewRoutes.js";
import cartRouter from "./routes/cartRoutes.js";

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME as string,
  api_key: process.env.CLOUD_API_KEY as string,
  api_secret: process.env.CLOUD_API_SECRET as string,
});

app.use(cookieParser(process.env.COOKIE_SECRET as string));
app.use(express.json());

// app.use((req, res, next) => {
//   // Block requests without proper headers
//   if (!req.headers["content-type"] && !req.headers["authorization"]) {
//     return res.status(403).json({ error: "Missing required headers" });
//   }
//   next();
// });

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://style-loom.netlify.app",
      ];

      if (!origin) {
        return callback(new Error("No origin header - request blocked"), false);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"), false);
    },
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST"],
    optionsSuccessStatus: 200,
  })
);

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
app.use("/api/v1/products", productRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/cart", authenticateUser, cartRouter);

app.get("/test", (req: Request, res: Response) => {
  res.json({ msg: "test route" });
});

app.use("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

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
