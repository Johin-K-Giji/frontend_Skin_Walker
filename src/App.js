// src/App.jsx
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about";
import Products from "./pages/products"; // Ensure proper casing
import ProductDetails from "./pages/productdetails";
import Dashboard from "./pages/dashboard";
import AddProduct from "./pages/addproduct";
import ViewProducts from "./pages/viewproduct";
import ContactUs from "./pages/contact";
import AddOrderPage from "./pages/addorder";
import Vieworder from "./pages/vieworder";



function App() {
  return (
    <BrowserRouter basename="/frontend_Skin_Walker">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/add-oders" element={<AddOrderPage />} />
        <Route path="/view-order" element={<Vieworder/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
