import express from "express";
import {
  createBooking,
  getBookings,
  getBookingById,
  deleteBooking,
  getAllBookingsAdmin // ✅ ADD THIS
} from "../controllers/bookingController.js";

const router = express.Router();

/**
 * BASE: /api/bookings
 */

// ✅ CREATE
router.post("/", createBooking);

// ✅ GET ALL (user)
router.get("/", getBookings);

// ✅ ADMIN ROUTE (🔥 MUST BE ABOVE :id)
router.get("/admin", getAllBookingsAdmin);

// ✅ GET ONE
router.get("/:id", getBookingById);

// ✅ DELETE
router.delete("/:id", deleteBooking);

export default router;