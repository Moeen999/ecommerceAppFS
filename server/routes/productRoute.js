import express from "express";
import {
  addProduct,
  productsList,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/singleproduct", singleProduct);
productRouter.get("/list", productsList);

export default productRouter;
