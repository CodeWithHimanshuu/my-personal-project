import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [role, setRole] = useState("buyer");

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Registration successful!");
  };

  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-header">
          <div className="register-icon">🌾</div>

          <h1>Create Account</h1>

          <p>
            Join Crop Marketplace today
          </p>
        </div>

        <form onSubmit={handleRegister}>

          <div className="form-row">

            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First name"
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last name"
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create password"
              required
            />
          </div>

          <div className="form-group">
            <label>Select Your Role</label>

            <div className="role-options">

              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="farmer"
                  checked={role === "farmer"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <span>👨‍🌾 Farmer</span>
              </label>

              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="buyer"
                  checked={role === "buyer"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <span>🛒 Buyer</span>
              </label>

            </div>
          </div>

          <label className="terms">
            <input type="checkbox" required />
            I agree to the Terms & Conditions
          </label>

          <button type="submit" className="register-btn-main">
            Create Account
          </button>

        </form>

        <div className="register-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Register;