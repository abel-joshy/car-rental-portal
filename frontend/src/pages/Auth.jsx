import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import carImg from "../assets/sigin.jpg";
import { registerUser, loginUser } from "../services/api";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const navigate = useNavigate();

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= SAVE USER =================
  const saveUser = (res) => {
    const userData = res.data.user;

    // 🔥 Clear old data
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // 🔥 Save new data
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", res.data.token);

    return userData;
  };

  // ================= REDIRECT =================
  const handleRedirect = (user) => {
    // ⚠️ temporary admin check
    if (user.email === "admin@luxdrive") {
      localStorage.setItem("role", "admin");
      navigate("/admin", { replace: true });
    } else {
      localStorage.setItem("role", "user");
      navigate("/profile", { replace: true });
    }
  };

  // ================= LOGIN =================
  const handleLogin = async () => {
    try {
      if (!form.email || !form.password) {
        return alert("Please fill all fields");
      }

      setLoading(true);

      const res = await loginUser({
        email: form.email.toLowerCase(),
        password: form.password
      });

      const user = saveUser(res);

      handleRedirect(user);

      alert("Login Successful");

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // ================= SIGNUP =================
  const handleSignup = async () => {
    try {
      if (!form.name || !form.email || !form.phone || !form.password) {
        return alert("Please fill all fields");
      }

      setLoading(true);

      const res = await registerUser({
        name: form.name,
        email: form.email.toLowerCase(),
        phone: form.phone,
        password: form.password
      });

      const user = saveUser(res);

      handleRedirect(user);

      alert("Signup Successful");

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className={`auth-container ${isSignUp ? "active" : ""}`}>

        {/* LEFT SECTION */}
        <div className="form-section">

          {/* SIGN IN */}
          <div className="form sign-in">
            <h1 className="brand">LuxDrive</h1>
            <h2>Welcome Back</h2>
            <p className="subtitle">Sign in to continue your journey</p>

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <button
              className="primary-btn"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Sign In"}
            </button>

            <span onClick={() => setIsSignUp(true)}>
              Don't have an account? <b>Sign Up</b>
            </span>
          </div>

          {/* SIGN UP */}
          <div className="form sign-up">
            <h1 className="brand">LuxDrive</h1>
            <h2>Create Account</h2>
            <p className="subtitle">Join the premium experience</p>

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <button
              className="primary-btn"
              onClick={handleSignup}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Sign Up"}
            </button>

            <span onClick={() => setIsSignUp(false)}>
              Already have an account? <b>Sign In</b>
            </span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="image-section">
          <img src={carImg} alt="car" />

          <div className="image-overlay">
            <h2>Drive Luxury</h2>
            <p>Premium cars. Seamless experience.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;