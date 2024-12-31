import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar';

const AddProductPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productBenefits, setProductBenefits] = useState('');
  const [productImages, setProductImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProductImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleRemoveImage = (index) => {
    const newImages = productImages.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    setProductImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handleBenefitsChange = (e) => {
    setProductBenefits(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert benefits into an array of points
    
    const benefitsArray = productBenefits.split('\n').map((benefit) => benefit.trim()).filter(Boolean);

    const formData = new FormData();
    formData.append('product_name', productName);
    formData.append('product_price', productPrice);
    formData.append('product_description', productDescription);
    formData.append('product_benefits', JSON.stringify(benefitsArray));  // Send as JSON string

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
        setImagePreviews([]);
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
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Add Product</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              placeholder="Enter product name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Product Price</label>
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              placeholder="Enter product price"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Product Description</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              placeholder="Enter product description"
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Product Benefits</label>
            <textarea
              value={productBenefits}
              onChange={handleBenefitsChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200"
              placeholder="Enter product benefits (one per line)"
              rows="4"
            ></textarea>
            <small className="text-gray-500">Separate benefits with new lines (e.g., "Benefit 1", "Benefit 2")</small>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Product Images</label>
            <input
              type="file"
              onChange={handleImageChange}
              multiple
              className="w-full mt-2"
              accept="image/*"
            />
            <div className="flex flex-wrap gap-4 mt-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
