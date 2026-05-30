import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch (err) {
    console.log("Invalid JSON");
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;