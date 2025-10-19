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
  tax?: number;
  orderItems: ICartItem[];
  status: OrderStatus;
  user: Types.ObjectId;
  clientSecret?: string;
  reference?: string;
  paymentUrl?: string;
  paymentIntentId?: string;
}

const OrderSchema = new mongoose.Schema<IOrderSchema>(
  {
    shippingFee: { type: Number, required: true },
    subTotal: { type: Number, required: true },
    total: { type: Number, required: true },
    tax: { type: Number },
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
    clientSecret: { type: String },
    reference: { type: String },
    paymentUrl: { type: String },
    paymentIntentId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IOrderSchema>("Order", OrderSchema);
