import { useState } from "react";
import "../styles/profile.css";

const Payments = () => {
  const [methods] = useState([
    { id: 1, type: "UPI", details: "user@upi", primary: true },
    { id: 2, type: "Card", details: "**** **** **** 4589", primary: false },
    { id: 3, type: "Wallet", details: "Paytm Wallet", primary: false },
  ]);

  const [transactions] = useState([
    { id: "TXN123", amount: 2400, status: "Paid" },
    { id: "TXN456", amount: 7000, status: "Paid" },
    { id: "TXN789", amount: 1800, status: "Pending" },
  ]);

  return (
    <div className="payments-page">

      <h1>Payments</h1>

      {/* ================= PAYMENT METHODS ================= */}
      <div className="box">
        <h3>Saved Payment Methods</h3>

        <div className="payment-grid">
          {methods.map((m) => (
            <div key={m.id} className="payment-card">
              <h4>{m.type}</h4>
              <p>{m.details}</p>

              {m.primary && <span className="badge">Primary</span>}

              <button className="btn small">Use</button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ADD PAYMENT ================= */}
      <div className="box">
        <h3>Add Payment Method</h3>

        <div className="add-payment">
          <input placeholder="Card / UPI ID" />
          <button className="btn">Add</button>
        </div>
      </div>

      {/* ================= TRANSACTIONS ================= */}
      <div className="box">
        <h3>Transaction History</h3>

        {transactions.map((t) => (
          <div key={t.id} className="txn-row">
            <span>{t.id}</span>
            <span>₹{t.amount}</span>
            <span className={t.status === "Paid" ? "paid" : "pending"}>
              {t.status}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Payments;