import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

let isDbConnected = false;

const connect = async () => {
  if (isDbConnected) {
    console.log("Already connected to the database");
    return Promise.resolve("Database already connected");
  }

  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "wpucourse",
      serverSelectionTimeoutMS: 59000,
    });

    isDbConnected = true; 
    console.log("Database connected successfully");
    return Promise.resolve("Database connected");
  } catch (error : any) {
    console.error("Database connection error:", error.message);
    return Promise.reject(error);
  }
};

export default connect;
