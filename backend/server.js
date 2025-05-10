import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to parse json bodies in the request

// Use the product routes
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
