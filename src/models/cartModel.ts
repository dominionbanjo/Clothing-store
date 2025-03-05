import mongoose, { Document, Schema, Types } from "mongoose";

export interface ICartItem extends Document {
  productId: Types.ObjectId;
  description: string;
  price: number;
  image: string;
  amount: number;
  size: string;
}

export interface ICart extends Document {
  user: Types.ObjectId;
  cartItems: ICartItem[];
}
export const CartItemSchema = new mongoose.Schema<ICartItem>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

const CartSchema = new mongoose.Schema<ICart>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    cartItems: [CartItemSchema],
  },
  { timestamps: true }
);

CartSchema.index({ product: 1, user: 1 }, { unique: true });

export default mongoose.model<ICart>("Cart", CartSchema);
