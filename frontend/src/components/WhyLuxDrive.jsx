import React from "react";
import "../styles/WhyLuxDrive.css";
import {
  FaCar,
  FaHome,
  FaClock,
  FaWrench,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

const WhyLuxDrive = () => {
  const features = [
    {
      icon: <FaCar />,
      title: "Premium Vehicle Collection",
    },
    {
      icon: <FaHome />,
      title: "Doorstep Convenience",
    },
    {
      icon: <FaClock />,
      title: "Flexible Rental Plans",
    },
    {
      icon: <FaWrench />,
      title: "24/7 Roadside Support",
    },
    {
      icon: <FaShieldAlt />,
      title: "Transparent Pricing",
    },
    {
      icon: <FaUserTie />,
      title: "Driver Available",
    },
  ];

  return (
    <section className="why">
      <div className="why-container">

        {/* LEFT */}
        <div className="why-left">
          <h2>Why Choose LuxDrive?</h2>
          <p>
            Experience premium comfort, reliability, and seamless journeys with
            LuxDrive. We combine top-quality vehicles with exceptional service
            to deliver a smooth and stress-free driving experience.
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyLuxDrive;