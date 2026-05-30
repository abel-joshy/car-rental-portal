// backend/config/db.js

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

  } catch (err) {
    console.error("❌ MongoDB Connection Failed:");
    console.error(err.message);

    // retry after 5 seconds (important for production)
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;