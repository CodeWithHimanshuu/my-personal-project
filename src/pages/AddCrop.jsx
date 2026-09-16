import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCrop.css";

function AddCrop() {
  const navigate = useNavigate();

  const [cropData, setCropData] = useState({
    cropName: "",
    category: "",
    quantity: "",
    unit: "kg",
    price: "",
    location: "",
    harvestDate: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCropData({
      ...cropData,
      [name]: value,
    });
  };

  // Crop image select karne ke liye
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setCropData({
        ...cropData,
        image: imageUrl,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cropData.image) {
      alert("Please select a crop image!");
      return;
    }

    const newCrop = {
      id: Date.now(),
      name: cropData.cropName,
      category: cropData.category,
      quantity: cropData.quantity,
      unit: cropData.unit,
      price: cropData.price,
      location: cropData.location,
      harvestDate: cropData.harvestDate,
      description: cropData.description,
      farmerName: "Current Farmer",
      image: cropData.image,
    };

    const oldCrops =
      JSON.parse(localStorage.getItem("crops")) || [];

    const updatedCrops = [...oldCrops, newCrop];

    localStorage.setItem(
      "crops",
      JSON.stringify(updatedCrops)
    );

    alert("Crop added successfully!");

    navigate("/crops");
  };

  return (
    <div className="add-crop-page">

      <div className="add-crop-container">

        <h1>🌾 Add New Crop</h1>

        <p>
          Add your crop details and connect with buyers.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Crop Image */}
          <div className="crop-form-group">
            <label>Crop Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />

            {cropData.image && (
              <div className="image-preview">
                <img
                  src={cropData.image}
                  alt="Crop Preview"
                />
              </div>
            )}
          </div>

          {/* Crop Name */}
          <div className="crop-form-group">
            <label>Crop Name</label>

            <input
              type="text"
              name="cropName"
              placeholder="e.g. Wheat, Rice, Potato"
              value={cropData.cropName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="crop-form-group">
            <label>Crop Category</label>

            <select
              name="category"
              value={cropData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Grains">Grains</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Pulses">Pulses</option>
              <option value="Spices">Spices</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Quantity + Unit */}
          <div className="crop-form-row">

            <div className="crop-form-group">
              <label>Quantity</label>

              <input
                type="number"
                name="quantity"
                placeholder="e.g. 500"
                value={cropData.quantity}
                onChange={handleChange}
                min="1"
                required
              />
            </div>

            <div className="crop-form-group">
              <label>Unit</label>

              <select
                name="unit"
                value={cropData.unit}
                onChange={handleChange}
              >
                <option value="kg">Kg</option>
                <option value="quintal">Quintal</option>
                <option value="ton">Ton</option>
              </select>
            </div>

          </div>

          {/* Price */}
          <div className="crop-form-group">
            <label>Price per Unit (₹)</label>

            <input
              type="number"
              name="price"
              placeholder="e.g. 2500"
              value={cropData.price}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          {/* Location */}
          <div className="crop-form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              placeholder="e.g. Lucknow, Uttar Pradesh"
              value={cropData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Harvest Date */}
          <div className="crop-form-group">
            <label>Harvest Date</label>

            <input
              type="date"
              name="harvestDate"
              value={cropData.harvestDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="crop-form-group">
            <label>Crop Description</label>

            <textarea
              name="description"
              placeholder="Enter information about your crop..."
              value={cropData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="add-crop-btn"
          >
            🌾 Add Crop
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddCrop;