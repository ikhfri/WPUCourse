import express from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import db from "./utils/database";

async function init() {
  try {
    const result = await db()
    console.log("database status :", result);
    const PORT = 5000;
    const app = express();

    
    app.use(bodyParser.json());

    app.use("/", router);

    app.listen(PORT, () => {
      console.log(`Example app listening on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}


init();