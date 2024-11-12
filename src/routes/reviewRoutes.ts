import { Router } from "express";
import {
  createReview,
  updateReview,
  deleteReview,
  getAllReviews,
  getSingleReview,
  getSingleProductReviews,
} from "../controllers/reviewController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { validateCreateReviewInput } from "../middleware/validationMiddleware.js";

const router = Router();

router
  .route("/")
  .get(getAllReviews)
  .post(authenticateUser, validateCreateReviewInput, createReview);

router
  .route("/:id")
  .get(getSingleReview)
  .patch(authenticateUser, validateCreateReviewInput, updateReview)
  .delete(authenticateUser, deleteReview);

router.get("/:id/review", getSingleProductReviews);

export default router;
