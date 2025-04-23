import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config(); // Load environment variables from .env

const app = express();

app.get("/products", (req, res) => {
    res.send("Server is ready");
});

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
