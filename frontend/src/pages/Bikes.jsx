import VehicleList from "../components/Vehicle/VehicleList";

const Bikes = () => {
  const bikes = [
    {
      name: "KTM Duke 390",
      price: 800,
      location: "Kochi",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
    },
    {
      name: "Royal Enfield",
      price: 1000,
      location: "Goa",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
    },
    {
      name: "Yamaha R15",
      price: 700,
      location: "Bangalore",
      image: "https://images.unsplash.com/photo-1580310614729-ccd69652491d",
    },
  ];

  return (
    <div className="page">
      <h2>Available Bikes</h2>
      <VehicleList vehicles={bikes} />
    </div>
  );
};

export default Bikes;