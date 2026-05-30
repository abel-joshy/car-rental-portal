const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const vehicleRoutes = require("./routes/vehicleRoutes");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// DB CONNECT
connectDB();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ STATIC FILES (MOVE HERE)
app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = app;