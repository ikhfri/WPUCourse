import express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import db from "./utils/database";
import dotenv from "dotenv";


const app = express();
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(bodyParser.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running", data: null });
});

(async () => {
  try {
    const result = await db();
    console.log("Database status:", result);
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();

export default app;
