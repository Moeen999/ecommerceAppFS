import express from "express";
import cors from "cors";
import "dotenv/config";

// configured App
const app = express();
const port = process.env.PORT || 4000;

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
