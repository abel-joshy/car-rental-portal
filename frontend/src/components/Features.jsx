import React, { useEffect } from "react";
import "../styles/Features.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaCar,
  FaTools,
  FaMapMarkerAlt,
  FaWrench,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const data = [
    { icon: <FaCar />, title: "Doorstep Delivery" },
    { icon: <FaTools />, title: "Zero Maintenance" },
    { icon: <FaMapMarkerAlt />, title: "Multiple Pickup" },
    { icon: <FaWrench />, title: "Roadside Assistance" },
    { icon: <FaShieldAlt />, title: "Affordable Insurance" },
    { icon: <FaUserTie />, title: "Driver Available" },
  ];

  return (
    <section className="features">
      {/* TOP SECTION */}
      <div className="features-top" data-aos="fade-up">
        <h1>Strong values that bring great people together.</h1>
        <p>
          Exceptional Service for Every Road, Mile, Memory, and Every Drive Ahead,
          No Matter the Distance.
        </p>
      </div>

      {/* CARDS */}
      <div className="features-cards">
        {data.map((item, index) => (
          <div
            className="feature-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;