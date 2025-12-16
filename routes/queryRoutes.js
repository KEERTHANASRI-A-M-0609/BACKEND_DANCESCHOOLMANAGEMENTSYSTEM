import express from "express";
import Query from "../models/Query.js";

const router = express.Router();

router.post("/query", async (req, res) => {
  try {
    const newQuery = new Query(req.body);
    await newQuery.save();
    res.json({ message: "Query submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
