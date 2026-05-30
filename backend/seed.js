const mongoose = require("mongoose");
const Vehicle = require("./models/Vehicle");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const cars = [

  { name: "3XO", brand: "Mahindra", city: "Kochi", type: "car", image: "3xo.png", fuel: "Petrol", transmission: "Automatic", seats: 5, priceDaily: 2200, priceWeekly: 14000, priceMonthly: 40000, available: true },

  { name: "Alcazar", brand: "Hyundai", city: "Kochi", type: "car", image: "alcazar.png", fuel: "Diesel", transmission: "Automatic", seats: 7, priceDaily: 3000, priceWeekly: 18000, priceMonthly: 50000, available: true },

  { name: "Altroz", brand: "Tata", city: "Kochi", type: "car", image: "altes.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1400, priceWeekly: 9000, priceMonthly: 25000, available: true },

  { name: "Alto K10", brand: "Suzuki", city: "Kochi", type: "car", image: "alto.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1000, priceWeekly: 7000, priceMonthly: 20000, available: true },

  { name: "Carens", brand: "Kia", city: "Kochi", type: "car", image: "careens.png", fuel: "Diesel", transmission: "Manual", seats: 7, priceDaily: 2400, priceWeekly: 15000, priceMonthly: 42000, available: true },

  { name: "Citron C3", brand: "Citroen", city: "Kochi", type: "car", image: "citon.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1300, priceWeekly: 8500, priceMonthly: 23000, available: true },

  { name: "Comet EV", brand: "MG", city: "Kochi", type: "car", image: "comet.png", fuel: "Electric", transmission: "Automatic", seats: 4, priceDaily: 1800, priceWeekly: 11000, priceMonthly: 30000, available: true },

  { name: "Fortuner", brand: "Toyota", city: "Kochi", type: "car", image: "fortuner.png", fuel: "Diesel", transmission: "Automatic", seats: 7, priceDaily: 5000, priceWeekly: 30000, priceMonthly: 85000, available: false, nextAvailable: new Date() },

  { name: "Glanza", brand: "Toyota", city: "Kochi", type: "car", image: "glansa.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1400, priceWeekly: 9000, priceMonthly: 25000, available: true },

  { name: "GO", brand: "Datsun", city: "Kochi", type: "car", image: "go.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1100, priceWeekly: 7500, priceMonthly: 21000, available: true },

  { name: "Hycross", brand: "Toyota", city: "Kochi", type: "car", image: "hycross.png", fuel: "Hybrid", transmission: "Automatic", seats: 7, priceDaily: 4200, priceWeekly: 25000, priceMonthly: 70000, available: true },

  { name: "Innova", brand: "Toyota", city: "Kochi", type: "car", image: "innova.png", fuel: "Diesel", transmission: "Manual", seats: 7, priceDaily: 3200, priceWeekly: 20000, priceMonthly: 55000, available: true },

  { name: "Isuzu D-Max", brand: "Isuzu", city: "Kochi", type: "car", image: "isuzu.png", fuel: "Diesel", transmission: "Manual", seats: 5, priceDaily: 3500, priceWeekly: 22000, priceMonthly: 60000, available: true },

  { name: "Jimny", brand: "Suzuki", city: "Kochi", type: "car", image: "jimmy.png", fuel: "Petrol", transmission: "Manual", seats: 4, priceDaily: 2600, priceWeekly: 16000, priceMonthly: 45000, available: true },

  { name: "Kushaq", brand: "Skoda", city: "Kochi", type: "car", image: "kushaq.png", fuel: "Petrol", transmission: "Automatic", seats: 5, priceDaily: 2400, priceWeekly: 15000, priceMonthly: 42000, available: true },

  { name: "Polo", brand: "Volkswagen", city: "Kochi", type: "car", image: "polo ml.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1600, priceWeekly: 10000, priceMonthly: 28000, available: true },

  { name: "Punch", brand: "Tata", city: "Kochi", type: "car", image: "punch.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1300, priceWeekly: 8500, priceMonthly: 23000, available: true },

  { name: "Rapid", brand: "Skoda", city: "Kochi", type: "car", image: "rapid (2).png", fuel: "Petrol", transmission: "Automatic", seats: 5, priceDaily: 2000, priceWeekly: 12000, priceMonthly: 35000, available: true },

  { name: "Safari", brand: "Tata", city: "Kochi", type: "car", image: "safari.png", fuel: "Diesel", transmission: "Manual", seats: 7, priceDaily: 3500, priceWeekly: 22000, priceMonthly: 60000, available: true },

  { name: "Scorpio", brand: "Mahindra", city: "Kochi", type: "car", image: "scropio.png", fuel: "Diesel", transmission: "Manual", seats: 7, priceDaily: 3300, priceWeekly: 21000, priceMonthly: 58000, available: true },

  { name: "Slavia", brand: "Skoda", city: "Kochi", type: "car", image: "slavia.png", fuel: "Petrol", transmission: "Automatic", seats: 5, priceDaily: 2300, priceWeekly: 14000, priceMonthly: 40000, available: true },

  { name: "Sonet", brand: "Kia", city: "Kochi", type: "car", image: "sonet.png", fuel: "Diesel", transmission: "Automatic", seats: 5, priceDaily: 2100, priceWeekly: 13000, priceMonthly: 37000, available: true },

  { name: "Swift", brand: "Suzuki", city: "Kochi", type: "car", image: "swift.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1500, priceWeekly: 9500, priceMonthly: 26000, available: true },

  { name: "Thar", brand: "Mahindra", city: "Kochi", type: "car", image: "thar 3.png", fuel: "Diesel", transmission: "Manual", seats: 4, priceDaily: 3000, priceWeekly: 18000, priceMonthly: 50000, available: true },

  { name: "Tiagun", brand: "Volkswagen", city: "Kochi", type: "car", image: "tiagun.png", fuel: "Petrol", transmission: "Automatic", seats: 5, priceDaily: 2200, priceWeekly: 14000, priceMonthly: 40000, available: true },

  { name: "Vento", brand: "Volkswagen", city: "Kochi", type: "car", image: "vento.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1800, priceWeekly: 11000, priceMonthly: 30000, available: true },

  { name: "Venue", brand: "Hyundai", city: "Kochi", type: "car", image: "venu.png", fuel: "Petrol", transmission: "Automatic", seats: 5, priceDaily: 2000, priceWeekly: 12000, priceMonthly: 35000, available: true },

  { name: "Virtus", brand: "Volkswagen", city: "Kochi", type: "car", image: "virtus.png", fuel: "Petrol", transmission: "Automatic", seats: 5, priceDaily: 2500, priceWeekly: 15000, priceMonthly: 42000, available: true },

  { name: "WagonR", brand: "Suzuki", city: "Kochi", type: "car", image: "wagonar.png", fuel: "Petrol", transmission: "Manual", seats: 5, priceDaily: 1200, priceWeekly: 8000, priceMonthly: 22000, available: true },

  { name: "XUV700", brand: "Mahindra", city: "Kochi", type: "car", image: "xuv700.png", fuel: "Diesel", transmission: "Automatic", seats: 7, priceDaily: 4200, priceWeekly: 25000, priceMonthly: 70000, available: true }

];

const seed = async () => {
  await Vehicle.deleteMany();
  await Vehicle.insertMany(cars);
  console.log("🔥 30 Cars Inserted Successfully");
  process.exit();
};

seed();