import Booking from "../models/Booking.js";


// ================= CREATE BOOKING =================
export const createBooking = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const {
      carName,
      price,
      pickupLocation,
      dropLocation,
      pickupDate,
      dropDate,
    } = req.body;

    // ✅ VALIDATION
    if (!carName || !price || !pickupLocation || !pickupDate) {
      return res.status(400).json({
        message: "All required fields must be filled",
      });
    }

    if (price <= 0) {
      return res.status(400).json({
        message: "Invalid price",
      });
    }

    // ✅ CREATE BOOKING
    const booking = new Booking({
      carName,
      price,
      pickupLocation,
      dropLocation: dropLocation || pickupLocation,
      pickupDate,
      dropDate: dropDate || pickupDate,
      // user: req.user?._id
    });

    await booking.save();

    res.status(201).json({
      message: "Booking successful",
      booking,
    });

  } catch (error) {
    console.error("CREATE BOOKING ERROR:", error);
    res.status(500).json({
      message: "Server error while creating booking",
    });
  }
};


// ================= GET ALL BOOKINGS =================
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    console.log("FETCHED BOOKINGS:", bookings);

    res.status(200).json(bookings);

  } catch (error) {
    console.error("GET BOOKINGS ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch bookings",
    });
  }
};


// ================= ADMIN: GET ALL BOOKINGS =================
export const getAllBookingsAdmin = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    console.log("ADMIN BOOKINGS:", bookings);

    res.status(200).json(bookings);

  } catch (error) {
    console.error("ADMIN FETCH ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch admin bookings",
    });
  }
};


// ================= GET SINGLE BOOKING =================
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json(booking);

  } catch (error) {
    console.error("GET BOOKING ERROR:", error);
    res.status(500).json({
      message: "Failed to fetch booking",
    });
  }
};


// ================= DELETE BOOKING =================
export const deleteBooking = async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    res.status(200).json({
      message: "Booking deleted successfully",
    });

  } catch (error) {
    console.error("DELETE BOOKING ERROR:", error);
    res.status(500).json({
      message: "Failed to delete booking",
    });
  }
};