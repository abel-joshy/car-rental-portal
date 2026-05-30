import { useEffect, useState } from "react";
import "../styles/profile.css";

const defaultUser = {
  name: "User",
  email: "user@gmail.com",
  phone: "9876543210",
};

const ProfileDetails = () => {
  const [user, setUser] = useState(defaultUser);
  const [originalUser, setOriginalUser] = useState(defaultUser);
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");

  // LOAD USER
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    const safeUser = stored && typeof stored === "object" ? stored : defaultUser;

    setUser(safeUser);
    setOriginalUser(safeUser);
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // SIMPLE VALIDATION
  const validate = () => {
    if (!user.name.trim()) return "Name is required";
    if (!user.email.includes("@")) return "Invalid email";
    if (user.phone.length < 10) return "Phone must be 10 digits";
    return "";
  };

  // SAVE USER
  const handleSave = () => {
    const err = validate();
    if (err) {
      setMessage(err);
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    setOriginalUser(user);
    setEditMode(false);
    setMessage("✅ Profile updated successfully");

    setTimeout(() => setMessage(""), 2000);
  };

  // CANCEL EDIT
  const handleCancel = () => {
    setUser(originalUser); // 🔥 revert changes
    setEditMode(false);
    setMessage("");
  };

  return (
    <div className="profile-details-page">
      <h1>Profile Details</h1>

      {message && (
        <p style={{ marginBottom: "10px", color: "green" }}>{message}</p>
      )}

      <div className="profile-card">
        {/* PROFILE ICON */}
        <div className="profile-icon">👤</div>

        {/* DETAILS */}
        <div className="profile-info">
          {/* NAME */}
          <label>Name</label>
          {editMode ? (
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          ) : (
            <p>{user.name}</p>
          )}

          {/* EMAIL */}
          <label>Email</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          ) : (
            <p>{user.email}</p>
          )}

          {/* PHONE */}
          <label>Phone</label>
          {editMode ? (
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          ) : (
            <p>{user.phone}</p>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="profile-actions">
          {editMode ? (
            <>
              <button className="btn" onClick={handleSave}>
                Save
              </button>

              <button className="btn secondary" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button className="btn" onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;