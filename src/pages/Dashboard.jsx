import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="page-container">
      <h1>Dashboard</h1>

      <p>Welcome to Crop Marketplace</p>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>🌾 My Crops</h2>
          <p>View and manage your listed crops.</p>
        </div>

        <div className="dashboard-card">
          <h2>🛒 Buy Crops</h2>
          <p>Search and find crops from farmers.</p>
        </div>

        <div className="dashboard-card">
          <h2>👨‍🌾 Farmer Connect</h2>
          <p>Connect directly with farmers.</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;