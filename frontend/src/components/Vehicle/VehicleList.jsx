import VehicleCard from "./VehicleCard";

const VehicleList = ({ vehicles }) => {
  return (
    <div className="vehicle-grid">
      {vehicles.map((v, i) => (
        <VehicleCard key={i} data={v} />
      ))}
    </div>
  );
};

export default VehicleList;