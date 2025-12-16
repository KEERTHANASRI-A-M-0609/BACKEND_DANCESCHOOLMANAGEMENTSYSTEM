import Query from "../models/Query.js";


export const addQuery = async (req, res) => {
await Query.create(req.body);
res.json({ message: "Query submitted successfully" });
};