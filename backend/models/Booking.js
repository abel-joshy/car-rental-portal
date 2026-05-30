import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      unique: true,
    },

    // 👤 Optional user info
    name: String,
    email: String,
    phone: String,

    // 🚗 CAR DETAILS
    carName: {
      type: String,
      required: true,
      trim: true,
    },

    // ✅ ADD THIS (VERY IMPORTANT)
    carImage: {
      type: String, // stores image filename (e.g. "carens.png")
      default: "",
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    pickupLocation: {
      type: String,
      required: true,
      trim: true,
    },

    dropLocation: {
      type: String,
      default: "",
      trim: true,
    },

    pickupDate: {
      type: Date,
      required: true,
    },

    dropDate: {
      type: Date,
      default: null,
    },

    // 📊 STATUS
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// ✅ AUTO BOOKING ID (FIXED - NO next() ERROR)
bookingSchema.pre("save", function () {
  if (!this.bookingId) {
    this.bookingId = "BK" + Date.now();
  }
});

export default mongoose.model("Booking", bookingSchema);