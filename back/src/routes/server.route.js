import { Router } from "express";
import {
  getProducts,
  addProduct,
  delproduct,
} from "../controllers/server.Controller.js";
import { upload } from "../middleware/uploader.js";
const route = Router();

route.get("/products", getProducts);

route.post("/addproduct", upload.single("img"), addProduct);
route.delete("/delproduct/:id", delproduct);

export default route;
