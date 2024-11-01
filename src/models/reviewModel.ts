import mongoose, { Document, Schema, Types, Model } from "mongoose";

export interface IReview extends Document {
  rating: number;
  title: string;
  comment: string;
  user: Types.ObjectId;
  product: Types.ObjectId;
}

const ReviewSchema = new mongoose.Schema<IReview>(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "Please provide rating"],
    },
    title: {
      type: String,
      trim: true,
      required: [true, "Please provide review title"],
      maxlength: 100,
    },
    comment: {
      type: String,
      required: [true, "Please provide review text"],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);

ReviewSchema.index({ product: 1, user: 1 }, { unique: true });

// Define the interface for the aggregation result
interface IAverageRatingResult {
  averageRating: number;
  numOfReviews: number;
}

ReviewSchema.statics.calculateAverageRating = async function (
  this: Model<IReview>,
  productId: Types.ObjectId
) {
  try {
    const result: IAverageRatingResult[] = await this.aggregate([
      {
        $match: {
          product: productId,
        },
      },
      {
        $group: {
          _id: null,
          averageRating: {
            $avg: "$rating",
          },
          numOfReviews: {
            $sum: 1,
          },
        },
      },
    ]);

    if (result.length === 0) {
      await mongoose
        .model("Product")
        .findOneAndUpdate(
          { _id: productId },
          { averageRating: 0, numOfReviews: 0 },
          { new: true }
        );
      return;
    }

    const { averageRating, numOfReviews } = result[0];

    await mongoose.model("Product").findOneAndUpdate(
      { _id: productId },
      {
        averageRating: Math.ceil(averageRating || 0),
        numOfReviews: Math.ceil(numOfReviews || 0),
      },
      { new: true }
    );
  } catch (error) {
    console.error(`Error calculating average rating: ${error}`);
  }
};

ReviewSchema.post<IReview>("save", async function () {
  const model = this.constructor as typeof mongoose.Model<IReview> & {
    calculateAverageRating: (productId: Types.ObjectId) => Promise<void>;
  };

  await model.calculateAverageRating(this.product);
});

ReviewSchema.post<IReview>("deleteOne", async function () {
  const model = this.constructor as typeof mongoose.Model<IReview> & {
    calculateAverageRating: (productId: Types.ObjectId) => Promise<void>;
  };

  await model.calculateAverageRating(this.product);
});

export default mongoose.model<IReview>("Review", ReviewSchema);
