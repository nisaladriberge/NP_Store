import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONODB_URI) {
  throw new Error("Please provide MONGODB_URI in the .env file");
}

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONODB_URI);
    conole.log("connect DB");
  } catch (error) {
    console.log("Mongodb connect error", error);
    process.exit(1);
  }
}

export default connectDB;
