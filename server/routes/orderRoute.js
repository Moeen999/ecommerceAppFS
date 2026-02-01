import express from "express";
import {
  placeOrder,
  placeOrderStrip,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/userAuth.js";

const orderRouter = express.Router();

// ! Admin Routes -> Features
orderRouter.post("list", adminAuth, allOrders);
orderRouter.post("status", adminAuth, updateStatus);

// ! Payment Routes -> Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStrip);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// ! User Orders
orderRouter.post("/orders", authUser, userOrders);

export default orderRouter;