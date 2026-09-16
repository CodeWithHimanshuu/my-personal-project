import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>My Website</h2>

        <p>
          © 2026 My Website. All Rights Reserved.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/CropList">Crop List</a>
          <a href="/AddCrop">Add Crop</a>
          <a href="/Dashboard">Dashboard</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;