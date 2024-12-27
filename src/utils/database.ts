import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

// Variabel global untuk status koneksi
let isDbConnected = false;

const connect = async () => {
  if (isDbConnected) {
    console.log("Already connected to the database");
    return Promise.resolve("Database already connected");
  }

  try {
    await mongoose.connect(DATABASE_URL, {
      dbName: "wpucourse",
      serverSelectionTimeoutMS: 5000, // Timeout 5 detik jika tidak ada koneksi
    });

    isDbConnected = true; // Tandai bahwa sudah terkoneksi
    console.log("Database connected successfully");
    return Promise.resolve("Database connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    return Promise.reject(error);
  }
};

export default connect;
