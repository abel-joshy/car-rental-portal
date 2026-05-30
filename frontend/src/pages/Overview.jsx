import { useEffect, useState } from "react";
import "../styles/profile.css";

const BASE_URL = "http://localhost:5000";

const Overview = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/bookings`);
      const data = await res.json();

      console.log("API DATA:", data);
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
      setBookings([]);
    }
  };

  const safeBookings = Array.isArray(bookings) ? bookings : [];
  const current = safeBookings[0];

  const total = safeBookings.reduce((a, b) => a + (b.price || 0), 0);

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString();
  };

  // ✅ FINAL IMAGE FIX (SIMPLE + RELIABLE)
  const getImageUrl = (image) => {
    if (!image) return "https://via.placeholder.com/250";

    // already full URL
    if (image.startsWith("http")) return image;

    // remove leading slash
    const cleanPath = image.replace(/^\/+/, "");

    return `${BASE_URL}/${cleanPath}`;
  };

  return (
    <div className="overview-page">

      {/* HEADER */}
      <div className="header">
        <h1>Welcome back 👋</h1>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="card">
          <p>Total Bookings</p>
          <h3>{safeBookings.length}</h3>
        </div>

        <div className="card">
          <p>Total Spend</p>
          <h3>₹{total}</h3>
        </div>
      </div>

      {/* GRID */}
      <div className="overview-grid">

        {/* CURRENT BOOKING */}
        <div className="current-booking">
          <h2>Current Booking</h2>

          {current ? (
            <>
              <div className="cb-top">
                <div>
                  <p><b>{current.carName}</b></p>
                  <p>{current.pickupLocation}</p>
                  <p>ID: {current.bookingId}</p>
                </div>

                {/* ✅ IMAGE */}
                <img
                  src={getImageUrl(current.carImage)}
                  alt="car"
                  style={{ width: "220px", borderRadius: "10px" }}
                  onError={(e) => {
                    console.log("❌ Image failed:", getImageUrl(current.carImage));
                    e.target.src = "https://via.placeholder.com/250";
                  }}
                />
              </div>

              <div className="cb-grid">
                <div className="cb-box">
                  <h4>Pickup</h4>
                  <p>{current.pickupLocation}</p>
                  <p>{formatDate(current.pickupDate)}</p>
                </div>

                <div className="cb-box">
                  <h4>Drop</h4>
                  <p>{current.dropLocation || "Same location"}</p>
                  <p>{formatDate(current.dropDate)}</p>
                </div>
              </div>
            </>
          ) : (
            <p>No active booking</p>
          )}
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section">

          {/* HISTORY */}
          <div className="box">
            <h3>Booking History</h3>

            {safeBookings.map((b) => (
              <div key={b._id} className="history-row">
                <span>{b.bookingId}</span>
                <span>{b.pickupLocation}</span>
                <span>{b.carName}</span>
              </div>
            ))}
          </div>

          {/* PROFILE */}
          <div className="box">
            <h3>Profile</h3>
            <p>Email: user@gmail.com</p>
            <p>Phone: 9876543210</p>
            <button className="btn">Update</button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Overview;