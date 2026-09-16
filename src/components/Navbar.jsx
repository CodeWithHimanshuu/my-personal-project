
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <div className="navbar-brand">
        <Link to="/">
          🌾 CropMarket
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/crops">Crop List</Link>
        <Link to="/add-crop">Add Crop</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      {/* Search */}
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search crops..."
        />
        <button>Search</button>
      </div>

      {/* User Section */}
      <div className="navbar-user">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
