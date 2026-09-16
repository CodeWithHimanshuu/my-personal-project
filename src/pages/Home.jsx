import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">
        <h1>🌾 Crop Marketplace</h1>

        <h2>Best Crop Marketplace for Farmers & Buyers</h2>

        <p>
          Buy and sell fresh crops directly from farmers.
        </p>

        <div className="hero-buttons">
          <button>Explore Crops</button>
          <button>Add Your Crop</button>
        </div>
      </section>

      <section className="features-section">

        <h2>Why Choose Crop Marketplace?</h2>

        <div className="features">

          <div className="feature-card">
            <h3>👨‍🌾 For Farmers</h3>
            <p>
              Add your crops and connect directly with buyers.
            </p>
          </div>

          <div className="feature-card">
            <h3>🛒 For Buyers</h3>
            <p>
              Search and find fresh crops from different farmers.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤝 Direct Connection</h3>
            <p>
              Connect farmers and buyers without unnecessary middlemen.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;