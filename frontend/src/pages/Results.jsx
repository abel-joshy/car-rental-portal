import { useLocation } from "react-router-dom";

const cars = [
  {
    name: "Hyundai i20",
    price: "₹1200/day",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/i20-exterior-right-front-three-quarter-3.jpeg"
  },
  {
    name: "Toyota Innova",
    price: "₹2500/day",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141125/innova-crysta-exterior-right-front-three-quarter.jpeg"
  }
];

const bikes = [
  {
    name: "Royal Enfield Classic",
    price: "₹800/day",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/49757/classic-350-right-front-three-quarter.jpeg"
  },
  {
    name: "Yamaha R15",
    price: "₹900/day",
    img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/103795/r15-v4-right-front-three-quarter.jpeg"
  }
];

const Results = () => {
  const { state } = useLocation();
  const { vehicleType, pickup, drop, date, time } = state || {};

  const data = vehicleType === "bike" ? bikes : cars;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available {vehicleType === "bike" ? "Bikes" : "Cars"}</h2>

      <p><b>Pickup:</b> {pickup}</p>
      <p><b>Drop:</b> {drop}</p>
      <p><b>Date:</b> {date}</p>
      <p><b>Time:</b> {time}</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {data.map((item, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={item.img} width="200" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;