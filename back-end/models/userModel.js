import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lastLogin: { type: Date, default: null }, // For tracking last login
  role: { type: Number, default: 0 }, // User roles, e.g., admin
});

const User = mongoose.model("User", userSchema);
export default User;
