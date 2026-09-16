import React, { useEffect, useState } from "react";
import CropCard from "../components/CropCard";
import "./CropList.css";

function CropList() {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const savedCrops =
      JSON.parse(localStorage.getItem("crops")) || [];

    setCrops(savedCrops);
  }, []);

  return (
    <div className="crop-list-page">

      <div className="crop-list-header">
        <h1>🌾 Available Crops</h1>
        <p>
          Fresh crops listed directly by farmers.
        </p>
      </div>

      <div className="crop-container">

        {crops.length === 0 ? (
          <p>No crops available yet.</p>
        ) : (
          crops.map((crop) => (
            <CropCard
              key={crop.id}
              crop={crop}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default CropList;