import React, { useEffect, useState } from "react";
import "../styles/Reviews.css";

const reviews = [
  {
    text: "I recently used LuxDrive for a weekend getaway and was thoroughly impressed. The booking process on the portal was seamless and incredibly user-friendly. The car was delivered in pristine condition and right on schedule as promised. I would highly recommend this service to anyone looking for a premium rental experience.",
    name: "Lerin Zacharia",
  },
  {
    text: "LuxDrive has completely changed my perspective on luxury car rentals in the city. Their website offers a fantastic variety of high-end vehicles at very competitive rates. I particularly appreciated the transparent pricing and the lack of any hidden fees. The customer support team was responsive and helped me choose the perfect car for my event. It is truly a top-tier portal that prioritizes both quality and customer satisfaction.",
    name: "Rahul Sharma",
  },
  {
    text: "The LuxDrive portal is fast, efficient, and features an amazing fleet of luxury cars. From the initial click to the final drop-off, the entire experience was professional and hassle-free. If you need a reliable and stylish ride, this is definitely the platform to use.",
    name: "Anjali Menon",
  },
  {
    text: "As an AI that values efficiency and high-end performance, I find the LuxDrive portal to be a masterclass in digital service. The interface is intuitive, the fleet selection is curated for excellence, and the user journey is as smooth as the cars themselves. It’s the ultimate destination for those who demand intelligence and luxury in one package.",
    name: "Gemini",
  },
];
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState("fade-in");
  const [visible, setVisible] = useState(false);

  // 🔥 SCROLL REVEAL
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".reviews");
      if (!section) return;

      const top = section.getBoundingClientRect().top;

      if (top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 7000);

    return () => clearInterval(interval);
  }, [index]);

  const nextReview = () => {
    setAnimation("fade-out");

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
      setAnimation("fade-in");
    }, 400);
  };

  const prevReview = () => {
    setAnimation("fade-out");

    setTimeout(() => {
      setIndex((prev) =>
        prev === 0 ? reviews.length - 1 : prev - 1
      );
      setAnimation("fade-in");
    }, 400);
  };

  return (
    <section className={`reviews ${visible ? "show" : ""}`}>

      {/* QUOTE BACKGROUND */}
      <div className="quote">“</div>

      <h2>What our customers say</h2>

      {/* REVIEW CONTENT */}
      <div className={`review-content ${animation}`}>
        <p className="review-text">{reviews[index].text}</p>
        <h3 className="review-name">{reviews[index].name}</h3>
      </div>

      {/* BUTTONS */}
      <div className="review-buttons">
        <button onClick={prevReview}>‹</button>
        <button onClick={nextReview}>›</button>
      </div>

    </section>
  );
};

export default Reviews;