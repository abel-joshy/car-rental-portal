import { useEffect, useState } from "react";
import "../../styles/admin.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    // TEMP STATIC DATA (replace with API later)
    setStats({
      totalBookings: 35,
      totalUsers: 50,
      totalRevenue: 250000,
    });
  }, []);

  return (
    <div className="dashboard-container">

      <h1>Admin Dashboard</h1>

      {/* STATS */}
      <div className="stats-grid">

        <div className="card blue">
          <h4>Revenue</h4>
          <h2>₹{stats.totalRevenue}</h2>
          <p>Total earnings</p>
        </div>

        <div className="card green">
          <h4>Bookings</h4>
          <h2>{stats.totalBookings}</h2>
          <p>Total bookings</p>
        </div>

        <div className="card red">
          <h4>Users</h4>
          <h2>{stats.totalUsers}</h2>
          <p>Registered users</p>
        </div>

        <div className="card gray">
          <h4>Status</h4>
          <h2>Active</h2>
          <p>System running</p>
        </div>

      </div>

      {/* TABLE */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Recent Bookings</h3>

        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Car</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Abel</td>
              <td>BMW</td>
              <td>Completed</td>
              <td>₹5000</td>
            </tr>
            <tr>
              <td>John</td>
              <td>Audi</td>
              <td>Pending</td>
              <td>₹7000</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AdminDashboard;