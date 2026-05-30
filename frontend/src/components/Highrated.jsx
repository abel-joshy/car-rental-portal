import React, { useEffect, useState } from "react";
import "../styles/Highrated.css";

const vehicles = [
  { brand: "Skoda", name: "Octavia VRS", img: "/src/assets/vrs.png" },
  { brand: "BMW", name: "5 Series", img: "src/assets/bmw 5 series.png" },
  { brand: "Volkswagen", name: "Virtus", img: "src/assets/virtus.png" },
  { brand: "Jeep", name: "Wrangler", img: "src/assets/jeep.png" },

  { brand: "Volvo", name: "XC90", img: "SRC/assets/volvo.png" },
  { brand: "Benz", name: "AMG S-Class", img: "/src/assets/sclass.png" },
  { brand: "Rolls Royce", name: "Phantom", img: "/src/assets/rolls phantom.png" },
  { brand: "Triumph", name: "Scrambler 400X", img: "src/assets/xc.png" },

  { brand: "Royal Enfield", name: "Hunter 350", img: "/src/assets/hunter.png" },
  { brand: "Royal Enfield", name: "Interceptor 650", img: "src/assets/int 650.png" },
  { brand: "Honda", name: "Africa Twin", img: "src/assets/honda.png" },
];

const HighRated = () => {
  const [index, setIndex] = useState(0);

  const cardsPerView = 4;
  const totalSlides = Math.ceil(vehicles.length / cardsPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="featured">
      <h2>Featured Vehicles</h2>

      <div className="slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div className="slide" key={slideIndex}>
              {vehicles
                .slice(
                  slideIndex * cardsPerView,
                  slideIndex * cardsPerView + cardsPerView
                )
                .map((item, i) => (
                  <div className="card" key={i}>
                    <div className="img-box">
                      <img src={item.img} alt={item.name} />
                    </div>

                    <p className="brand">{item.brand}</p>
                    <h3>{item.name}</h3>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighRated;