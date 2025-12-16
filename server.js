/*
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();



app.use(cors());
app.use(express.json());

//routes
const userRoutes = require("./Routers/signupRouters");
app.use("/api/user",userRoutes)
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((err) => {
        console.error("MongoDB Connection Error:", err);
    });

    app.listen(5000,() => {
         console.log("Server running on port 5000");
    });

    */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import queryRoutes from "./routes/queryRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173"
}));

// routes (MATCHES FRONTEND)
app.use("/api/user", userRoutes);
app.use("/api", queryRoutes);

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas Connected");
    console.log("📌 Database:", mongoose.connection.name);
  })
  .catch(err => console.log("❌ Mongo Error:", err));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
