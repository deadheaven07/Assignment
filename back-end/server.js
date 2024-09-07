import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

// Load environment variables from the .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

// Create Express application
const app = express();

// Apply middlewares
app.use(express.json());
app.use(morgan("dev"));

// Define routes
app.use("/api/v1/auth", authRoutes);

// Define a simple route for testing
app.get("/", (req, res) => {
  res.send("<h2>Assignment Backend is Running</h2>");
});

app.use(cors({ origin: "http://localhost:3000" })); // Allow requests from React app

// Get the port from the environment or use default 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server running in ${
      process.env.NODE_ENV || "development"
    } mode on port ${PORT}`.bgCyan.white
  );
});
