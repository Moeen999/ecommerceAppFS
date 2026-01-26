import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("mongoDB connected successfully!");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/forever`);
};

export default connectDB;
