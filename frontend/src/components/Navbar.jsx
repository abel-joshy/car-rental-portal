import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // ================= USER & ROLE =================
  let user = null;
  let role = null;

  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
    role = localStorage.getItem("role");
  } catch (err) {
    console.log("Invalid localStorage data");
    localStorage.clear();
  }

  // ================= NAVIGATION =================
  const goToDashboard = () => {
    if (!user) return navigate("/signin");
    navigate(role === "admin" ? "/admin" : "/profile");
  };

  // ================= LOGOUT =================
  const handleLogout = () => {
    localStorage.clear(); // remove user, token, role
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {/* MAIN CONTENT */}
      <div className={`main-content ${menuOpen ? "blur" : ""}`}>

        {/* NAVBAR */}
        <nav className="navbar">

          {/* LEFT */}
          <div className="nav-left">
            <div className="hamburger" onClick={() => setMenuOpen(true)}>
              ☰
            </div>

            <div className="logo" onClick={() => navigate("/")}>
              LuxDrive
            </div>
          </div>

          {/* CENTER */}
          <div className="nav-center">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/cars")}>Our Fleet</button>
            <button onClick={() => navigate("/faq")}>FAQ</button>
          </div>

          {/* RIGHT */}
          <div className="nav-right">
            {user ? (
              <FaUserCircle
                className="profile-icon"
                onClick={goToDashboard}
                style={{ fontSize: "26px", cursor: "pointer" }}
              />
            ) : (
              <button
                className="register-btn"
                onClick={() => navigate("/signin")}
              >
                Register
              </button>
            )}
          </div>

        </nav>
      </div>

      {/* SIDEBAR */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>

        {/* ACCOUNT BOX */}
        <div className="account-box">
          <FaUserCircle className="account-icon" />

          <div>
            <p className="user-name">
              {user ? user.name : "Guest User"}
            </p>

            {!user ? (
              <span onClick={() => navigate("/signin")}>
                Sign In
              </span>
            ) : (
              <span onClick={goToDashboard}>
                {role === "admin" ? "Admin Dashboard" : "View Profile"}
              </span>
            )}
          </div>

          {/* LOGOUT */}
          {user && (
            <FaSignOutAlt
              className="logout-icon"
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        {/* MENU */}
        <button onClick={() => { navigate("/"); setMenuOpen(false); }}>
          Home
        </button>

        <button onClick={() => { navigate("/cars"); setMenuOpen(false); }}>
          Our Fleet
        </button>

        <button onClick={() => { navigate("/faq"); setMenuOpen(false); }}>
          FAQ
        </button>

      </div>

      {/* CLICK OUTSIDE */}
      {menuOpen && (
        <div
          className="click-close"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;