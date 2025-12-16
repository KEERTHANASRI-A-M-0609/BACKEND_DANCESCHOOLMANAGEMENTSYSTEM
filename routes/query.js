/*

// routes/query.js
import express from "express";
import Query from "../models/Query.js";

const router = express.Router();

// POST /api/query
router.post("/query", async (req, res) => {
    const { name, email, query } = req.body;

    if (!name || !email || !query) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newQuery = new Query({ name, email, query });
        await newQuery.save();
        return res.status(200).json({ message: "Query submitted successfully!" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
    }
});

export default router;


*/