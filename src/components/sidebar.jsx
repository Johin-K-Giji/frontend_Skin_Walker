// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="bg-gray-100 p-4 min-h-screen w-1/4">
    <h2 className="text-xl font-bold mb-6">Skin Walker Admin</h2>
    <nav className="flex flex-col gap-4">
      <Link to="/dashboard" className="font-semibold text-gray-700 hover:text-black">Dashboard</Link>
      <Link to="/add-product" className="font-semibold text-gray-700 hover:text-black">Add Product</Link>
      <Link to="/view-products" className="font-semibold text-gray-700 hover:text-black">View Products</Link>
      <Link to="/users" className="font-semibold text-gray-700 hover:text-black">Users</Link>
    </nav>
  </div>
);

export default Sidebar;
