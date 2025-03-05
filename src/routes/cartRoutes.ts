import { Router } from "express";
import {
  createCart,
  updateCart,
  deleteCart,
  getCartItems,
  getAllCartItems,
} from "../controllers/cartController.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/")
  .get(getCartItems)
  .post(createCart)
  .patch(updateCart)
  .delete(deleteCart);

router.get("/admin", authorizePermissions("admin"), getAllCartItems);
export default router;
