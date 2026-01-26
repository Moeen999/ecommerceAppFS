import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";

// configured App
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// API endpoints

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(port, () => {
  `Server is running at port ${port}`;
});
