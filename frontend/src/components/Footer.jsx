import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2>LuxDrive</h2>
          <p>
            Experience premium car rentals with comfort, reliability, and
            seamless journeys across your city.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Vehicles</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Car Rental</li>
            <li>Bike Rental</li>
            <li>Driver Service</li>
            <li>Long Term Rental</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> support@luxdrive.com</p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 LuxDrive. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;