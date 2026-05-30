import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

/* GET ALL VEHICLES */
router.get("/", async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ADD VEHICLE (for testing) */
router.post("/", async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    const saved = await vehicle.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;