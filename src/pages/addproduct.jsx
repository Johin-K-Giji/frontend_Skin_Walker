// src/components/AddProductPage.js
import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar';

const AddProductPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productBenefits, setProductBenefits] = useState('');
  const [productImages, setProductImages] = useState([]);

  const handleImageChange = (e) => {
    setProductImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('product_name', productName);
    formData.append('product_price', productPrice);
    formData.append('product_description', productDescription);
    formData.append('product_benefits', productBenefits);

    for (let i = 0; i < productImages.length; i++) {
      formData.append('product_images', productImages[i]);
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/add_products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('Product added successfully');
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        setProductBenefits('');
        setProductImages([]);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Product Price</label>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Product Description</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Product Benefits</label>
            <textarea
              value={productBenefits}
              onChange={(e) => setProductBenefits(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Product Images</label>
            <input
              type="file"
              onChange={handleImageChange}
              multiple
              className="w-full"
              accept="image/*"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
