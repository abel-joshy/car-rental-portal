const AdminCars = () => {
  return (
    <div>
      <h2>Car Price List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Lamborghini Urus</td>
            <td>₹15000</td>
            <td>Available</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminCars;