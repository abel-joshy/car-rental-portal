import React, { useEffect, useState } from "react";
import { getVehicles } from "../services/api";
import "../styles/cars.css";

const BASE_URL = "http://localhost:5000";

const cities = [
  "Kochi",
  "Calicut",
  "Kannur",
  "Kollam",
  "Kottayam",
  "Thrissur",
  "Trivandrum",
];

const Cars = () => {
  const [vehicles, setVehicles] = useState([]);
  const [city, setCity] = useState("Kochi");
  const [selectedCar, setSelectedCar] = useState(null);

  const [bookingData, setBookingData] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const res = await getVehicles();
      setVehicles(res.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const distributeCars = () => {
    return {
      Kochi: vehicles.slice(0, 25),
      Calicut: vehicles.slice(5, 23),
      Thrissur: vehicles.slice(10, 18),
      Kannur: vehicles.slice(12, 20),
      Kollam: vehicles.slice(8, 16),
      Kottayam: vehicles.slice(15, 30),
      Trivandrum: vehicles.slice(0, 8),
    };
  };

  const groupedCars = distributeCars();
  const cityCars = groupedCars[city] || [];

  // ================= PRICE CLICK =================
  const handlePriceClick = (car, plan, price) => {
    setBookingData({
      car,
      plan,
      price,
      city,
      pickup: city,
      drop: city,
      date: new Date().toISOString().slice(0, 16),
      dropDate: "",
    });

    setShowBooking(true);
  };

  // ================= CONFIRM BOOKING =================
  const confirmBooking = async () => {
    if (!bookingData.pickup || !bookingData.date) {
      alert("Please fill all details");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carName: bookingData.car.name,
          price: bookingData.price,
          pickupLocation: bookingData.pickup,
          dropLocation: bookingData.drop,
          pickupDate: bookingData.date,
          dropDate: bookingData.dropDate || bookingData.date,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(`✅ Booking Confirmed!\nID: ${data.booking.bookingId}`);
        setShowBooking(false);
      } else {
        alert(data.message || "Booking failed");
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="cars-page">

      {/* HEADER */}
      <div className="fleet-header">
        <h1>Our Fleet</h1>
        <p>Find your perfect ride with transparent pricing</p>
      </div>

      {/* CITY FILTER */}
      <div className="filter-bar">
        <div className="city-list">
          {cities.map((c) => (
            <button
              key={c}
              className={city === c ? "active" : ""}
              onClick={() => setCity(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="section">
        <h2>{city} Cars ({cityCars.length})</h2>

        <div className="grid">
          {cityCars.map((car) => (
            <CarCard
              key={car._id}
              car={car}
              isSelected={selectedCar === car._id}
              onSelect={() => setSelectedCar(car._id)}
              onPriceClick={handlePriceClick}
            />
          ))}
        </div>
      </div>

      {/* ================= BOOKING POPUP ================= */}
      {showBooking && bookingData && (
        <div className="modal">
          <div className="modal-content">

            <h2>Confirm Booking</h2>

            <p><strong>Vehicle:</strong> {bookingData.car.name}</p>
            <p><strong>City:</strong> {bookingData.city}</p>

            <label>Pickup Location</label>
            <input
              type="text"
              value={bookingData.pickup}
              onChange={(e) =>
                setBookingData({ ...bookingData, pickup: e.target.value })
              }
            />

            <label>Drop Location</label>
            <input
              type="text"
              value={bookingData.drop}
              onChange={(e) =>
                setBookingData({ ...bookingData, drop: e.target.value })
              }
            />

            <p><strong>Plan:</strong> {bookingData.plan}</p>
            <p><strong>Price:</strong> ₹{bookingData.price}</p>

            <label>Pickup Date & Time</label>
            <input
              type="datetime-local"
              value={bookingData.date}
              onChange={(e) =>
                setBookingData({ ...bookingData, date: e.target.value })
              }
            />

            <label>Drop Date & Time</label>
            <input
              type="datetime-local"
              value={bookingData.dropDate}
              onChange={(e) =>
                setBookingData({ ...bookingData, dropDate: e.target.value })
              }
            />

            <div className="modal-buttons">
              <button onClick={() => setShowBooking(false)}>
                Cancel
              </button>

              <button onClick={confirmBooking}>
                Confirm Booking
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Cars;


// ================= CARD =================
const CarCard = ({ car, isSelected, onSelect, onPriceClick }) => {
  return (
    <div
      className={`car-card ${isSelected ? "active-card" : ""}`}
      onClick={onSelect}
    >
      <div className="img-wrap">
        <img src={`${BASE_URL}/uploads/${car.image}`} alt={car.name} />
      </div>

      <div className="card-body">
        <p className="brand">{car.brand}</p>
        <h3>{car.name}</h3>

        <div className="features-inline">
          👥 {car.seats} ⛽ {car.fuel} ⚙️ {car.transmission}
        </div>

        <div className="price-box">

          <button onClick={(e) => {
            e.stopPropagation();
            onPriceClick(car, "Daily", car.priceDaily);
          }}>
            ₹{car.priceDaily} <span>Daily</span>
          </button>

          <button onClick={(e) => {
            e.stopPropagation();
            onPriceClick(car, "Weekly", car.priceWeekly);
          }}>
            ₹{car.priceWeekly} <span>Weekly</span>
          </button>

          <button onClick={(e) => {
            e.stopPropagation();
            onPriceClick(car, "Monthly", car.priceMonthly);
          }}>
            ₹{car.priceMonthly} <span>Monthly</span>
          </button>

        </div>
      </div>
    </div>
  );
};