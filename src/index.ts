import express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import db from "./utils/database";
import dotenv from "dotenv";
import docs from "./docs/route";
import cors from "cors";

const app = express();
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(cors())

app.use(bodyParser.json());
app.use("/api", router);
docs(app)

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running", data: null });
});



export default app;
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
