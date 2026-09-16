import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CropDetails.css";

function CropDetails() {
  const { id } = useParams();

  const crop = {
    id: id,
    name: "Wheat",
    description:
      "Fresh and high-quality wheat directly sourced from the farmer.",
    quantity: 500,
    unit: "kg",
    price: 28,
    location: "Lucknow, Uttar Pradesh",
    farmerName: "Ramesh Kumar",
    phone: "+91 9876543210",
    quality: "Premium",
    harvestDate: "August 2026",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b"
  };

  return (
    <div className="crop-details-page">

      <div className="crop-details-container">

        <Link to="/crops" className="back-link">
          ← Back to Crops
        </Link>

        <div className="details-card">

          <div className="details-image">
            <img
              src={crop.image}
              alt={crop.name}
            />
          </div>

          <div className="details-content">

            <span className="quality-badge">
              {crop.quality} Quality
            </span>

            <h1>{crop.name}</h1>

            <p className="details-description">
              {crop.description}
            </p>

            <div className="crop-info-grid">

              <div className="info-item">
                <span>🌾 Quantity</span>
                <strong>
                  {crop.quantity} {crop.unit}
                </strong>
              </div>

              <div className="info-item">
                <span>💰 Price</span>
                <strong>
                  ₹{crop.price}/{crop.unit}
                </strong>
              </div>

              <div className="info-item">
                <span>📍 Location</span>
                <strong>{crop.location}</strong>
              </div>

              <div className="info-item">
                <span>📅 Harvest</span>
                <strong>{crop.harvestDate}</strong>
              </div>

            </div>

            <div className="farmer-box">

              <h2>👨‍🌾 Farmer Information</h2>

              <p>
                <strong>Name:</strong>{" "}
                {crop.farmerName}
              </p>

              <p>
                <strong>Phone:</strong>{" "}
                {crop.phone}
              </p>

            </div>

            <div className="details-actions">

              <button className="connect-farmer-btn">
                🤝 Connect with Farmer
              </button>

              <button className="buy-btn">
                🛒 Contact to Buy
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CropDetails;