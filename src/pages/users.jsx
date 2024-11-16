// src/components/Users.js
import React from 'react';
import Sidebar from '../components/sidebar';
const Users = () => (
  <div className="flex">
    <Sidebar />
    <div className="p-8 w-3/4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <table className="w-full border border-gray-200">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">john@example.com</td>
            <td className="border p-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Users;
