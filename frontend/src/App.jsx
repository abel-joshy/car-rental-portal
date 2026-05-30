import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= PUBLIC ================= */
import Home from "./pages/Home";
import Results from "./pages/Results";
import Auth from "./pages/Auth";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import FAQ from "./pages/FAQ";

/* ================= USER DASHBOARD ================= */
import ProtectedRoute from "./components/ProtectedRoute";
import ProfileLayout from "./pages/Profile";
import Overview from "./pages/Overview";
import Bookings from "./pages/Bookings";
import ProfileDetails from "./pages/ProfileDetails";
import Payments from "./pages/Payments";
import Support from "./pages/Support";

/* ================= ADMIN ================= */
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard"; // ✅ FIXED
import AdminBookings from "./pages/admin/AdminBookings";
import AdminCars from "./pages/admin/AdminCars";
import AdminAddCar from "./pages/admin/AdminAddCar";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminPayments from "./pages/admin/AdminPayments";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/vehicle/:id" element={<CarDetails />} />
        <Route path="/faq" element={<FAQ />} />

        {/* ================= USER DASHBOARD ================= */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="profile-details" element={<ProfileDetails />} />
          <Route path="payments" element={<Payments />} />
          <Route path="support" element={<Support />} />
        </Route>

        {/* ================= ADMIN DASHBOARD ================= */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          {/* ✅ MAIN DASHBOARD */}
          <Route index element={<AdminDashboard />} />

          {/* OTHER ADMIN PAGES */}
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="cars" element={<AdminCars />} />
          <Route path="add-car" element={<AdminAddCar />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="payments" element={<AdminPayments />} />
        </Route>

        {/* ================= 404 ================= */}
        <Route path="*" element={<h2>Page Not Found</h2>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;