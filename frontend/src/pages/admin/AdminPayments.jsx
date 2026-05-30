const AdminPayments = () => {
  return (
    <div>
      <h2>Payments</h2>

      <div className="card">Total Revenue: ₹3,00,000</div>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Abel</td>
            <td>₹15000</td>
            <td>20 May</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminPayments;