import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCrop from "./pages/AddCrop";
import CropDetails from "./pages/CropDetails";
import Dashboard from "./pages/Dashboard";
import CropList from "./pages/CropList";
import Footer from "./components/Footer";


import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-crop" element={<AddCrop />} />
        <Route path="/crop/:id" element={<CropDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crops" element={<CropList />} />  
      </Routes>
      <Footer />
    </>
  );
}

export default App;
