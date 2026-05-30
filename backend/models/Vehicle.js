import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  city: String,   // 🔥 IMPORTANT
  fuel: String,
  seats: Number,
  transmission: String,
  priceDaily: Number,
  priceWeekly: Number,
  priceMonthly: Number,
  image: String,
  nextAvailable: String,
  availableFor: String,
});

export default mongoose.model("Vehicle", vehicleSchema);