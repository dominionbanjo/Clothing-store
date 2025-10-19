import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  verifyPaystackPayment,
  updateOrder,
} from "../controllers/OrderController.js";
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authMiddleware.js";

const router = Router();

/* ---------------------------- Standard User Routes ---------------------------- */
router
  .route("/")
  .post(createOrder) // create a new order
  .get(getCurrentUserOrders); // get orders for the logged-in user

router.get("/verify/payment", verifyPaystackPayment); // verify Paystack transaction

/* ---------------------------- Admin Routes ---------------------------- */
router.get(
  "/admin/all",
  authorizePermissions("admin"),
  getAllOrders // get all orders (admin only)
);

router
  .route("/:id")
  .get(getSingleOrder) // get a single order by ID
  .patch(updateOrder); // update order (payment intent, status, etc.)

export default router;
