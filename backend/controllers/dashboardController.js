import Booking from "../models/Booking.js";
import User from "../models/User.js";

export const getDashboardStats = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json("Admin only");
    }

    // ✅ COUNTS
    const totalBookings = await Booking.countDocuments();
    const totalUsers = await User.countDocuments();

    // ✅ REVENUE
    const revenue = await Booking.aggregate([
      { $group: { _id: null, total: { $sum: "$price" } } },
    ]);

    // ✅ GRAPH DATA
    const bookingsByDate = await Booking.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%d-%m", date: "$pickupDate" },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // ✅ RECENT BOOKINGS
    const recentBookings = await Booking.find()
      .populate("user", "name")
      .populate("car", "name")
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalBookings,
      totalUsers,
      totalRevenue: revenue[0]?.total || 0,
      bookingsByDate,
      recentBookings,
    });

  } catch (err) {
    res.status(500).json(err.message);
  }
};