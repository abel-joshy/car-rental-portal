import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVehicleById } from "../services/api";
import "../styles/details.css";

const BASE_URL = "http://localhost:5000";

const CarDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetchVehicle();
  }, []);

  const fetchVehicle = async () => {
    const res = await getVehicleById(id);
    setVehicle(res.data);
  };

  if (!vehicle) return <h2>Loading...</h2>;

  return (
    <div className="details">

      <img src={`${BASE_URL}/${vehicle.image}`} alt="" />

      <h1>{vehicle.name}</h1>
      <p>{vehicle.brand}</p>

      <p>{vehicle.fuel} • {vehicle.transmission}</p>

      <h2>₹{vehicle.price}/day</h2>

      <button>Book Now</button>

    </div>
  );
};

export default CarDetails;