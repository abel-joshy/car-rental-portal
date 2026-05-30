import { useNavigate, useLocation } from "react-router-dom";

import carImg from "../../assets/bmw.jpg";
import bikeImg from "../../assets/Panigale.png";

const VehicleToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      <div style={{ display: "flex", gap: "10px" }}>

        {/* CARS */}
        <button
          onClick={() => navigate("/cars")}
          style={{
            padding: "10px 20px",
            background: path === "/cars" ? "#ffb400" : "#eee",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Cars
        </button>

        {/* BIKES */}
        <button
          onClick={() => navigate("/bikes")}
          style={{
            padding: "10px 20px",
            background: path === "/bikes" ? "#ffb400" : "#eee",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Bikes
        </button>

      </div>
    </div>
  );
};

export default VehicleToggle;