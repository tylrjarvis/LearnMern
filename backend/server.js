import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config(); // Load environment variables from .env

const app = express();

app.use(express.json()); // allows us to parse json bodies in the request

// Use the product routes
app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});
