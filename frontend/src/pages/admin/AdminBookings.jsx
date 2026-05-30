import { useEffect, useState } from "react";

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings/admin", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || data || "Error loading bookings");
        setBookings([]);
        return;
      }

      setBookings(Array.isArray(data) ? data : []);

    } catch (err) {
      console.log(err);
      setError("Failed to load bookings");
      setBookings([]);
    }
  };

  return (
    <div>
      <h2>All Bookings</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>User</th>
            <th>Car</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="4">No bookings found</td>
            </tr>
          ) : (
            bookings.map((b) => (
              <tr key={b._id}>
                <td>
                  {b.user?.name || "Unknown"} <br />
                  <small>{b.user?.email}</small>
                </td>

                <td>{b.car?.name || "Car"}</td>

                <td>
                  {b.pickupDate} → {b.dropDate}
                </td>

                <td>₹{b.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBookings;