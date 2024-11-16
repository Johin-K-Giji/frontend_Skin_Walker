// src/components/Dashboard.js
import React from 'react';
import Sidebar from '../components/sidebar';

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <div className="p-8 w-3/4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
    </div>
  </div>
);

export default Dashboard;
