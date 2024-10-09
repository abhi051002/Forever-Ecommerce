import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mangodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middleware configuration
app.use(express.json());
app.use(cors());

// Api Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.get("/", (request, response) => {
  response.send("API Working");
});

app.listen(port, () => console.log("Server Started on PORT :" + port));
