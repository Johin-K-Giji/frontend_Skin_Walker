// src/App.jsx
import React from "react";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Products from "./pages/products"; // Ensure proper casing
import ProductDetails from "./pages/productdetails";
import Dashboard from "./pages/dashboard";
import AddProduct from "./pages/addproduct";
import ViewProducts from "./pages/viewproduct";
import Users from "./pages/users";
import ContactUs from "./pages/contact";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
