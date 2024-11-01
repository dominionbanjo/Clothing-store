import mongoose, { Document, Types, Schema } from "mongoose";
import { IReview } from "./reviewModel.js";
export interface IProduct extends Document {
  image: string;
  category: string;
  subCategory: string;
  description: string;
  fit: string;
  price: number;
  sizes: string[];
  features: string[];
  averageRating: number;
  numOfReviews: number;
  featured: boolean;
  user: Types.ObjectId;
  reviews: IReview[];
}

const ProductSchema = new mongoose.Schema<IProduct>(
  {
    image: { type: String, required: true },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
      default: 0,
    },
    category: {
      type: String,
      required: [true, "Please provide product category"],
      enum: ["Unisex", "Men", "Women", "Kids"],
    },
    subCategory: {
      type: String,
      required: [true, "Please provide product sub category"],
      enum: [
        "Glasses",
        "Skincare",
        "Fragrances",
        "Men's Shirts",
        "Men's Shoes",
        "Men's Watches",
        "Women's Wear",
        "Accessories",
        "Hand Bag",
      ],
    },
    fit: {
      type: String,
      required: [true, "Please provide product fit"],
    },
    description: {
      type: String,
      required: [true, "Please provide product description"],
    },
    sizes: {
      type: [String],
      required: [true, "Please provide product sizes"],
      default: [],
    },
    features: {
      type: [String],
      required: [true, "Please provide product features"],
      default: [],
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ProductSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});

ProductSchema.pre<IProduct>("deleteOne", async function (next) {
  await this.model("Review").deleteMany({ product: this._id });
  next();
});

export default mongoose.model<IProduct>("Product", ProductSchema);
