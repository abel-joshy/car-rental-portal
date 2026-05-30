import express from "express";
import { protect } from "../middleware/authMiddleware.js"; // ✅ FIXED
import { getDashboardStats } from "../controllers/dashboardController.js";

const router = express.Router();

// 🔥 ADMIN DASHBOARD ROUTE
router.get("/", protect, getDashboardStats);

export default router;