import { Router } from "express";
import {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";
import rateLimit from "express-rate-limit";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

const router = Router();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes" },
});

router.post("/login", apiLimiter, validateLoginInput, login);
router.post("/register", apiLimiter, validateRegisterInput, register);
router.get("/logout", logout);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPassword);

export default router;
