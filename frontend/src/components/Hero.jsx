import React from "react";
import "../styles/hero.css";
import carImg from "../assets/urus.jpeg";
const Hero = () => {
  return (
    <section className="hero">

      {/* TEXT */}
      <div className="hero-content">
        <h1>
          PREMIUM CAR <br /> RENTAL
        </h1>
      </div>

      {/* STAR */}
      <div className="star">✦</div>

      {/* CAR IMAGE */}
      <img src={carImg} alt="car" className="hero-car" />

      {/* BOTTOM CURVE */}
      <div className="hero-bottom"></div>

    </section>
  );
};

export default Hero;