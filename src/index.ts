// index.ts
import express, { Express } from "express";
import router from "./routes/api";
import bodyParser from "body-parser";
import db from "./utils/database";

const app: Express = express();

// Middleware
app.use(bodyParser.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running", data: null });
});

// Initialize database and start server
async function startServer(): Promise<void> {
  try {
    const result = await db();
    console.log("database status:", result);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

export const server = app;
export const initialize = startServer;

// Start the server if this is the main module
if (require.main === module) {
  startServer();
}
