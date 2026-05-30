import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json"
  }
});

// 🔐 Attach token automatically
API.interceptors.request.use((req) => {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (user?.token) {
      req.headers.Authorization = `Bearer ${user.token}`;
    }
  } catch (err) {
    console.log("Token error:", err);
  }

  return req;
});

// ================= AUTH =================
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);

// ================= VEHICLES =================
export const getVehicles = () => API.get("/vehicles");
export const getVehicleById = (id) => API.get(`/vehicles/${id}`);

// ================= BOOKINGS =================
export const createBooking = (data) => API.post("/bookings", data);
export const getMyBookings = () => API.get("/bookings/my");

// ================= LOGOUT =================
export const logoutUser = () => {
  localStorage.removeItem("user");
};

// ================= ERROR HANDLER =================
API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.log("API ERROR:", err.response?.data || err.message);

    if (err.response?.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/signin";
    }

    return Promise.reject(err);
  }
);

export default API;