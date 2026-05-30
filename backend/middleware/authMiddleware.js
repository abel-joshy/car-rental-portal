import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    // ✅ CHECK SECRET
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET missing");
      return res.status(500).json({ message: "Server config error" });
    }

    let token;

    // ✅ EXTRACT TOKEN
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // ❌ NO TOKEN
    if (!token) {
      return res.status(401).json({ message: "No token, not authorized" });
    }

    // 🔓 VERIFY TOKEN
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 👤 FETCH USER
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // ✅ ATTACH USER
    req.user = user;

    return next();

  } catch (err) {
    console.error("AUTH ERROR:", err.message);

    // 🔍 HANDLE TOKEN ERRORS
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(401).json({ message: "Authorization failed" });
  }
};