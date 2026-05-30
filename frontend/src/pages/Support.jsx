import { useState } from "react";
import "../styles/profile.css";

const Support = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      q: "How do I book a car?",
      a: "Go to Cars section, select a vehicle, choose date & time, and click Book.",
    },
    {
      q: "Can I cancel my booking?",
      a: "Yes, you can cancel before pickup time from your bookings page.",
    },
    {
      q: "What documents are required?",
      a: "Valid driving license and ID proof are required during pickup.",
    },
    {
      q: "How is payment processed?",
      a: "Payments can be made via UPI, card, or wallet securely.",
    },
    {
      q: "Is there a refund policy?",
      a: "Refund depends on cancellation time. Late cancellations may incur charges.",
    },
  ];

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="support-page">

      <h1>Support & Help</h1>

      {/* FAQ */}
      <div className="box">
        <h3>Frequently Asked Questions</h3>

        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
          >

            <div
              className="faq-question"
              onClick={() => toggle(index)}
            >
              {item.q}
              <span>{active === index ? "−" : "+"}</span>
            </div>

            {/* ALWAYS RENDER (for animation) */}
            <div
              className={`faq-answer ${
                active === index ? "show" : ""
              }`}
            >
              {item.a}
            </div>

          </div>
        ))}
      </div>

      {/* CONTACT */}
      <div className="box">
        <h3>Contact Support</h3>

        <p>Email: support@luxdrive.com</p>
        <p>Phone: +91 9876543210</p>

        <textarea
          placeholder="Describe your issue..."
          className="support-textarea"
        />

        <button className="btn">Submit</button>
      </div>

    </div>
  );
};

export default Support;