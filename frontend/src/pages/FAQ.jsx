import React, { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    category: "General",
    question: "Can I create a booking with LuxDrive if I have an International DL?",
    answer:
      "Yes, you can book using a valid International Driving License along with your passport.",
  },
  {
    category: "Bookings",
    question: "Do you provide a chauffeur with the vehicle?",
    answer:
      "Yes, chauffeur service is available for selected vehicles.",
  },
  {
    category: "Bookings",
    question:
      "If I opt for chauffeur service, what would be the accident/repair liability?",
    answer:
      "LuxDrive takes full responsibility when chauffeur service is selected.",
  },
  {
    category: "Payments",
    question:
      "Do chauffeur charges include food and accommodation during outstation trips?",
    answer:
      "No, those expenses must be covered by the customer.",
  },
  {
    category: "General",
    question: "Do you provide spot booking service?",
    answer:
      "Yes, spot booking is available in select locations.",
  },
];

const categories = ["All", "General", "Bookings", "Payments"];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFAQs =
    activeCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">

      {/* BRAND */}
      <div className="faq-brand">
        <h1>LuxDrive</h1>
        <p>Premium Car Rental Experience</p>
      </div>

      {/* TITLE */}
      <h2>Frequently Asked Questions</h2>

      {/* FILTER */}
      <div className="faq-filters">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => {
              setActiveCategory(cat);
              setActiveIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="faq-list">
        {filteredFAQs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${
              activeIndex === index ? "open" : ""
            }`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <p>{item.question}</p>
              <span>+</span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQ;