import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import Features from "../components/Features";
import Highrated from "../components/Highrated";
import Reviews from "../components/Reviews";
import Message from "../components/Message";
import WhyLuxDrive from "../components/WhyLuxDrive";
import Footer from "../components/Footer";

const Home = () => {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch (err) {
    console.log("Invalid JSON in localStorage");
  }

  return (
    <div className="home">

      <Navbar />

      <Hero />


      {/* 🔥 FIXED WRAPPER */}
      <div className="booking-wrapper">
        <BookingForm />
      </div>

      <Features />
      <Highrated />
      <Reviews />
      <Message />
      <WhyLuxDrive />

      <Footer />
    </div>
  );
};

export default Home;