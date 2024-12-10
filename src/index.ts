import express from "express";
import router from "./routes/api";

const app = express();

const PORT = 3000;

app.use("/", router)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});