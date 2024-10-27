// src/pages/ProductDetails.js
import React from 'react';
import Header from '../components/navbar'; // Ensure paths are correct
import Footer from '../components/footer';
import { FiShare2 } from 'react-icons/fi'; // React Icons for Share button

const ProductDetails = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <section className="flex-grow px-6 md:px-24 py-12">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">
          Walker Protein Ghee
        </h1>

        {/* Product Image Section */}
        <div className="flex justify-center mb-12">
  <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-xl">
    <div className="flex items-center justify-between gap-6">
      {/* Product Thumbnails */}
      <div className="p-4 bg-[#F5F5F5] rounded-xl shadow-md hover:scale-105 transform transition-all">
        <img src="/cproduct1.png" alt="Product" className="md:w-32 md:h-32 w-12 h-12rounded-lg" />
      </div>

      <div className="p-4 bg-[#F5F5F5] rounded-xl shadow-md hover:scale-105 transform transition-all">
        <img src="/cproduct2.png" alt="Product" className="w-24 h-24 rounded-lg" />
      </div>

      <div className="p-4 bg-[#F5F5F5] rounded-xl shadow-md hover:scale-105 transform transition-all">
        <img src="/cproduct1.png" alt="Product" className="w-24 h-24 rounded-lg" />
      </div>

      {/* View All Images Link */}
      <span className="text-green-500 font-bold cursor-pointer hover:underline hover:scale-105 transition-transform">
        View All Images
      </span>
    </div>
  </div>
</div>


        {/* Description Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum has been the industry's standard dummy text.</li>
            <li>Lorem Ipsum is simply dummy text of the printing.</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition-all">
            Call For Buy
          </button>
          <button className="border border-gray-400 px-6 py-2 rounded-full shadow-md flex items-center gap-2 hover:shadow-lg transition-all">
            <FiShare2 className="text-gray-600" />
            Share Product
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
