import { useState } from "react";

const AdminAddCar = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add New Car</h2>

      <input name="name" placeholder="Car Name" onChange={handleChange} />
      <input name="price" placeholder="Price per day" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input type="file" />

      <button>Add Car</button>
    </div>
  );
};

export default AdminAddCar;