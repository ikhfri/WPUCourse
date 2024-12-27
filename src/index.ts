import express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import db from "./utils/database";

// Inisialisasi Express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running", data: null });
});

// Koneksi database
(async () => {
  try {
    const result = await db();
    console.log("Database status:", result);
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();

// Ekspor untuk Vercel
export default app;
