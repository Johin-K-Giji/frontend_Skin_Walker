// src/App.jsx
import React from "react";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Products from "./pages/products"; // Ensure proper casing
import ProductDetails from "./pages/productdetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
