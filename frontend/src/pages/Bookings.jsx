import { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/bookings");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch bookings");
      }

      setBookings(Array.isArray(data) ? data : []);

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // 📅 Format Date
  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>My Bookings</h2>

      {/* LOADING */}
      {loading && <p>Loading bookings...</p>}

      {/* ERROR */}
      {!loading && error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={fetchBookings}>Retry</button>
        </div>
      )}

      {/* EMPTY */}
      {!loading && !error && bookings.length === 0 && (
        <p>No bookings found</p>
      )}

      {/* BOOKINGS LIST */}
      {!loading && !error && bookings.length > 0 && (
        <div style={{ display: "grid", gap: "20px" }}>
          {bookings.map((b) => (
            <div
              key={b._id}
              style={{
                border: "2px solid #f5b400",
                borderRadius: "12px",
                padding: "15px",
                background: "#fff",
                boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
              }}
            >
              {/* CAR */}
              <h3>{b.carName || "Car"}</h3>

              {/* ID */}
              <p><b>Booking ID:</b> {b.bookingId || "N/A"}</p>

              {/* LOCATION */}
              <p><b>Pickup:</b> {b.pickupLocation || "N/A"}</p>
              <p><b>Drop:</b> {b.dropLocation || "N/A"}</p>

              {/* DATE */}
              <p>
                <b>Dates:</b>{" "}
                {formatDate(b.pickupDate)} → {formatDate(b.dropDate)}
              </p>

              {/* PRICE */}
              <p><b>Price:</b> ₹{b.price || 0}</p>

              {/* STATUS (frontend fallback) */}
              <p>
                <b>Status:</b>{" "}
                <span style={{ color: "orange" }}>
                  {b.status || "Pending"}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;