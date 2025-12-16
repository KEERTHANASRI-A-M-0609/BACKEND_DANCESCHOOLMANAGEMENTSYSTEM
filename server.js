import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import queryRoutes from "./routes/queryRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/user", authRoutes);
app.use("/api", queryRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");
    console.log("📌 Database:", mongoose.connection.name);
  })
  .catch(err => console.log("❌ Mongo Error:", err));

app.listen(8000, () => {
  console.log("🚀 Server running on port 8000");
});

export default app;