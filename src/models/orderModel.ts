import mongoose, { Document, Schema, Types } from "mongoose";
import { ICartItem, CartItemSchema } from "./cartModel.js";

export enum OrderStatus {
  Pending = "pending",
  Failed = "failed",
  Paid = "paid",
  Delivered = "delivered",
  Canceled = "canceled",
}

export interface IOrderSchema extends Document {
  shippingFee: number;
  subTotal: number;
  total: number;
  orderItems: ICartItem[];
  status: OrderStatus;
  user: Types.ObjectId;
}

const OrderSchema = new mongoose.Schema<IOrderSchema>({
  shippingFee: {
    type: Number,
    required: true,
  },
  subTotal: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  orderItems: [CartItemSchema],
  status: {
    type: String,
    enum: Object.values(OrderStatus),
    default: OrderStatus.Pending,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model<IOrderSchema>("Order", OrderSchema);

// const SingleOrderItemSchema = new mongoose.Schema<ISingleOrderItem>({
//   name: { type: String, required: true },
//   image: { type: String, required: true },
//   size: { type: String, required: true },
//   price: { type: Number, required: true },
//   amount: { type: Number, required: true },
//   product: {
//     type: Schema.Types.ObjectId,
//     ref: "Product",
//     required: true,
//   },
// });

// export interface ISingleOrderItem extends Document {
//   name: string;
//   image: string;
//   price: number;
//   amount: number;
//   size: string;
//   product: Types.ObjectId;
// }
