import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../styles/admin.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2>LuxDrive</h2>

        <NavLink to="/admin" end>Dashboard</NavLink>
        <NavLink to="/admin/bookings">Bookings</NavLink>
        <NavLink to="/admin/cars">Cars</NavLink>
        <NavLink to="/admin/add-car">Add Car</NavLink>
        <NavLink to="/admin/users">Users</NavLink>
        <NavLink to="/admin/payments">Payments</NavLink>
      </aside>

      {/* CONTENT */}
      <main className="admin-main">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;