const Vehicle = require("../models/Vehicle");

// GET ALL VEHICLES
exports.getVehicles = async (req, res) => {
  try {
    console.log("🔥 API HIT"); // DEBUG

    const vehicles = await Vehicle.find();

    console.log("Vehicles:", vehicles.length);

    res.json(vehicles);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ message: "Server Error" });
  }
};