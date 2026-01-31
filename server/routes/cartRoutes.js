import express from "express";
import {
  addToCart,
  getCartData,
  updateCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/userAuth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/cart-items", authUser, getCartData);
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
