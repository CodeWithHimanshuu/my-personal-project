import React from "react";
import "./CropCard.css";

function CropCard({ crop }) {
  return (
    <div className="crop-card">

      <div className="crop-image">
        <img src={crop.image} alt={crop.name} />
      </div>

      <div className="crop-info">

        <h3>{crop.name}</h3>

        <p className="crop-description">
          {crop.description}
        </p>

        <div className="crop-details">

          <p>
            <strong>🌾 Quantity:</strong> {crop.quantity} {crop.unit}
          </p>

          <p>
            <strong>💰 Price:</strong> ₹{crop.price}/{crop.unit}
          </p>

          <p>
            <strong>📍 Location:</strong> {crop.location}
          </p>

          <p>
            <strong>👨‍🌾 Farmer:</strong> {crop.farmerName}
          </p>

        </div>

        <div className="crop-actions">

          <button className="details-btn">
            View Details
          </button>

          <button className="connect-btn">
            Connect Farmer
          </button>

        </div>

      </div>

    </div>
  );
}

export default CropCard;
