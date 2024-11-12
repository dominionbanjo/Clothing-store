import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { getSingleProductReviews } from "../controllers/reviewController.js";
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authMiddleware.js";
import { validateCreateProductInput } from "../middleware/validationMiddleware.js";

const router = Router();

router
  .route("/")
  .post(
    [
      authenticateUser,
      authorizePermissions("admin"),
      validateCreateProductInput,
    ],
    createProduct
  )
  .get(getAllProducts);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizePermissions("admin")], updateProduct)
  .delete([authenticateUser, authorizePermissions("admin")], deleteProduct);

router.get("/:id/review", getSingleProductReviews);

export default router;
