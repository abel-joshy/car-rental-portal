import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../styles/profile.css";

const ProfileLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Better active match (supports nested routes)
  const isActive = (path) => location.pathname.startsWith(path);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="logo">
          LD <span>LUXDRIVE</span>
        </div>

        <ul>
          <li
            className={isActive("/profile/overview") ? "active" : ""}
            onClick={() => navigate("/profile/overview")}
          >
            Overview
          </li>

          <li
            className={isActive("/profile/bookings") ? "active" : ""}
            onClick={() => navigate("/profile/bookings")}
          >
            Bookings
          </li>

          <li
            className={isActive("/profile/profile-details") ? "active" : ""}
            onClick={() => navigate("/profile/profile-details")}
          >
            Profile Details
          </li>

          <li
            className={isActive("/profile/payments") ? "active" : ""}
            onClick={() => navigate("/profile/payments")}
          >
            Payments
          </li>

          <li
            className={isActive("/profile/support") ? "active" : ""}
            onClick={() => navigate("/profile/support")}
          >
            Support
          </li>

          {/* 🔥 LOGOUT */}
          <li className="logout" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="main">
        <Outlet />
      </div>

    </div>
  );
};

export default ProfileLayout;