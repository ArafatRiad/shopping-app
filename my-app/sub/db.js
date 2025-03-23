import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MongoURL);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error(err);
  }
};

export default connectToDatabase;
