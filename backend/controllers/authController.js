import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ================= TOKEN =================
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// ================= REGISTER =================
export const register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json("All fields required");
    }

    const emailLower = email.toLowerCase();

    const exist = await User.findOne({ email: emailLower });
    if (exist) return res.status(400).json("User already exists");

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email: emailLower,
      phone,
      password: hashed,
    });

    const userData = user.toObject();
    delete userData.password;

    res.status(201).json({
      user: userData,
      token: generateToken(user._id),
    });

  } catch (err) {
    console.log(err.message);
    res.status(500).json("Register failed");
  }
};

// ================= LOGIN =================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json("Email and password required");
    }

    const emailLower = email.toLowerCase();

    const user = await User.findOne({ email: emailLower });
    if (!user) return res.status(400).json("User not found");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json("Wrong password");

    const userData = user.toObject();
    delete userData.password;

    res.json({
      user: userData,
      token: generateToken(user._id),
    });

  } catch (err) {
    console.log(err.message);
    res.status(500).json("Login failed");
  }
};