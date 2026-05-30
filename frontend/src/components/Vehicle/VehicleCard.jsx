
const VehicleCard = ({ data }) => {
  return (
    <div className="vehicle-card">

      <img src={data.image} alt={data.name} />

      <div className="vehicle-info">
        <h3>{data.name}</h3>

        <p className="price">₹{data.price} / day</p>

        <p className="extra">
          📍 {data.location}
        </p>

        <p className="extra">
          ⚙ {data.fuel} | {data.transmission}
        </p>

        <button className="book-btn">Book Now</button>
      </div>

    </div>
  );
};

export default VehicleCard;