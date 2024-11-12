import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Products from "./models/productModel.js";
import { products } from "./utils/products2.js";
import { MongoError } from "mongodb";

try {
  const mongoUri = process.env.MONGO_URL as string;

  if (!mongoUri) {
    throw new Error("MONGO_URL is not defined in environment variables.");
  }

  await mongoose.connect(mongoUri);

  const parsedProducts = products.map((product) => ({
    ...product,
    price: parseFloat(product.price.replace("$", "")), // Remove `$` and convert to Number
  }));
  await Products.deleteMany();
  await Products.create(parsedProducts);

  console.log("Database populated successfully.");
  process.exit(0); // Exit with success code
} catch (error) {
  const err = error as MongoError;
  console.error("Database error:", err);
  process.exit(1); // Exit with error code
}
