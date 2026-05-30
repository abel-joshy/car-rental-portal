import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import vehicleRoutes from "./routes/vehicleRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

/* ================= CHECK ENV ================= */
if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.log("❌ Missing environment variables");
  process.exit(1);
}

/* ================= MIDDLEWARE ================= */
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

/* ================= STATIC ================= */
app.use("/uploads", express.static("uploads"));

/* ================= ROUTES ================= */
app.use("/api/auth", authRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/dashboard", dashboardRoutes);

/* ================= ROOT ================= */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* ================= 404 ================= */
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

/* ================= ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Server error" });
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on ${PORT}`);
    });

  } catch (err) {
    console.log("❌ DB Error:", err.message);
    process.exit(1);
  }
};

startServer();