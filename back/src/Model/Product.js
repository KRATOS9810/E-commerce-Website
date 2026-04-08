import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String },
  amount: { type: Number },
  description: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
