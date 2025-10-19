import express from "express";
import multer from "multer";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { uploadProductImage } from "../controllers/productController.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// ✅ FormData key must match "image"
router.post(
  "/product",
  authenticateUser,
  upload.single("image"),
  uploadProductImage
);

export default router;
