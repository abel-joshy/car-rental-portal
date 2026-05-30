import "../styles/bookingform.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import carImg from "../assets/bmw.jpg";
import bikeImg from "../assets/Panigale.png";

const BookingForm = () => {
  const navigate = useNavigate();

  // ================= STATE =================
  const [vehicleType, setVehicleType] = useState("car");

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const [pickupTime, setPickupTime] = useState("");
  const [dropTime, setDropTime] = useState("");

  const [sameLocation, setSameLocation] = useState(true);

  const [showLocation, setShowLocation] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const [activeField, setActiveField] = useState("pickup");

  const [locationStep, setLocationStep] = useState("city");
  const [selectedCity, setSelectedCity] = useState("");

  const today = new Date().toISOString().split("T")[0];

  // ================= DATA =================
  const locations = {
    Kochi: ["Edapally", "Vyttila", "Kakkanad", "Fort Kochi", "Aluva"],
    Calicut: ["Mavoor Road", "Beach"],
    Bangalore: ["Indiranagar", "Whitefield"],
    Chennai: ["T Nagar", "Velachery"],
  };

  const timeSlots = [
    "06:00 AM","07:00 AM","08:00 AM","09:00 AM",
    "10:00 AM","11:00 AM","12:00 PM","01:00 PM",
    "02:00 PM","03:00 PM","04:00 PM","05:00 PM",
    "06:00 PM","07:00 PM","08:00 PM"
  ];

  // ================= EFFECT =================
  useEffect(() => {
    if (sameLocation) setDrop(pickup);
  }, [pickup, sameLocation]);

  // ================= HANDLERS =================

  const openLocation = (field) => {
    setActiveField(field);
    setLocationStep("city");
    setShowLocation(true);
  };

  const selectCity = (city) => {
    setSelectedCity(city);
    setLocationStep("area");
  };

  const selectArea = (area) => {
    const fullLocation = `${selectedCity} - ${area}`;

    if (activeField === "pickup") {
      setPickup(fullLocation);
    } else {
      setDrop(fullLocation);
    }

    setShowLocation(false);
  };

  const selectTime = (time) => {
    if (activeField === "pickup") {
      setPickupTime(time);
    } else {
      setDropTime(time);
    }

    setShowTime(false);
  };

  const handleSubmit = () => {
    if (!pickup || !pickupDate || !pickupTime) {
      alert("Please fill pickup details");
      return;
    }

    const bookingData = {
      pickup,
      drop: sameLocation ? pickup : drop,
      pickupDate,
      pickupTime,
      dropDate,
      dropTime,
    };

    localStorage.setItem("bookingForm", JSON.stringify(bookingData));

    navigate(vehicleType === "car" ? "/cars" : "/bikes");
  };

  // ================= UI =================
  return (
    <div className="booking-container">

      {/* ================= TOP ================= */}
      <div className="top-section">

        <p>Which Type Of Vehicle?</p>

        <div className="vehicle-toggle">

          <div
            className={`toggle-option ${vehicleType === "car" ? "active" : ""}`}
            onClick={() => setVehicleType("car")}
          >
            <img src={carImg} alt="car" />
            Cars
          </div>

          <div
            className={`toggle-option ${vehicleType === "bike" ? "active" : ""}`}
            onClick={() => setVehicleType("bike")}
          >
            <img src={bikeImg} alt="bike" />
            Bikes
          </div>

        </div>
      </div>

      <div className="divider" />

      {/* ================= MAIN ================= */}
      <div className="main-grid">

        {/* PICKUP */}
        <div className="col">
          <p>Pick – Up Location</p>

          <div
            className="input"
            onClick={() => openLocation("pickup")}
          >
            {pickup || "Choose Location"}
          </div>

          <div className="date-row">
            <input
              type="date"
              min={today}
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />

            <div
              className="time-box"
              onClick={() => {
                setActiveField("pickup");
                setShowTime(true);
              }}
            >
              {pickupTime || "Select Time"}
            </div>
          </div>
        </div>

        {/* SWAP ICON */}
        <div className="swap">⇄</div>

        {/* DROP */}
        <div className="col">
          <p>Drop – Off Location</p>

          <div
            className={`input ${sameLocation ? "disabled" : ""}`}
            onClick={() => !sameLocation && openLocation("drop")}
          >
            {sameLocation ? pickup : drop || "Choose Drop"}
          </div>

          <div className="date-row">
            <input
              type="date"
              min={pickupDate || today}
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
            />

            <div
              className="time-box"
              onClick={() => {
                setActiveField("drop");
                setShowTime(true);
              }}
            >
              {dropTime || "Select Time"}
            </div>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="bottom">

        <label>
          <input
            type="checkbox"
            checked={sameLocation}
            onChange={() => setSameLocation(!sameLocation)}
          />
          Return to same location
        </label>

        <button className="drive-btn" onClick={handleSubmit}>
          Let's Drive
        </button>

      </div>

      {/* ================= LOCATION POPUP ================= */}
      {showLocation && (
        <div className="overlay" onClick={() => setShowLocation(false)}>

          <div className="popup big" onClick={(e) => e.stopPropagation()}>

            <div className="popup-header">
              {locationStep === "city" ? "Select City" : selectedCity}
              <span onClick={() => setShowLocation(false)}>✕</span>
            </div>

            {/* CITY */}
            {locationStep === "city" && (
              <div className="city-grid">
                {Object.keys(locations).map((city, i) => (
                  <div
                    key={i}
                    className="city-card"
                    onClick={() => selectCity(city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}

            {/* AREA */}
            {locationStep === "area" && (
              <div className="branch-grid">
                {locations[selectedCity].map((area, i) => (
                  <div
                    key={i}
                    className="branch-card"
                    onClick={() => selectArea(area)}
                  >
                    📍 {area}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* ================= TIME POPUP ================= */}
      {showTime && (
        <div className="overlay" onClick={() => setShowTime(false)}>

          <div className="popup small" onClick={(e) => e.stopPropagation()}>

            <div className="popup-header">
              Select Time
              <span onClick={() => setShowTime(false)}>✕</span>
            </div>

            <div className="time-grid">
              {timeSlots.map((time, i) => (
                <div
                  key={i}
                  className="time-card"
                  onClick={() => selectTime(time)}
                >
                  {time}
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default BookingForm;