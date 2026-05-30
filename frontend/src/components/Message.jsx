import React, { useState } from "react";
import "../styles/Message.css";

const Message = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <section className="message">
      <div className="message-container">
        <div className="message-left">
          <h2>
            Have a question?
            <br />
            Send us a message
          </h2>

          <form className="message-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Write your message..."
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="message-right">
          <div className="car-visual">
            <img
              src={new URL("../assets/rollmeg.png", import.meta.url).href}
              alt="Luxury car"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;