import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar';

const AddOrderPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [orderedDate, setOrderedDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      name,
      address,
      phone_no: phoneNo,
      pin_code: pinCode,
      ordered_date: orderedDate,
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/add_order', orderData);

      if (response.status === 201) {
        alert('Order added successfully');
        setName('');
        setAddress('');
        setPhoneNo('');
        setPinCode('');
        setOrderedDate('');
      }
    } catch (error) {
      console.error('Error adding order:', error);
      alert('Failed to add order');
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Add Order</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold">Customer Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter customer name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter address"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Phone Number</label>
            <input
              type="tel"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Pin Code</label>
            <input
              type="text"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              placeholder="Enter pin code"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Ordered Date</label>
            <input
              type="date"
              value={orderedDate}
              onChange={(e) => setOrderedDate(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
          >
            Add Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOrderPage;
