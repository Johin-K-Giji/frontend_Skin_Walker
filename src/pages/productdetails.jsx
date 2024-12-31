import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For extracting URL parameters
import axios from 'axios';
import Header from '../components/navbar';
import Footer from '../components/footer';
import { FiShare2 } from 'react-icons/fi';

const ProductDetails = () => {
  const { id } = useParams(); // Extract product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details by ID
    axios
      .get(`http://localhost:5000/view_product/${id}`)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      <section className="flex-grow px-6 md:px-24 py-12">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">{product.name}</h1>

        {/* Product Image Section */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-xl">
            <div className="flex items-center justify-between gap-4">
              {product.images.slice(0, 3).map((img, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#ffffff] rounded-xl shadow-md hover:scale-105 transform transition-all"
                >
                  <img
                    src={`http://localhost:5000/static/uploads/${img}`}
                    alt={`Product ${index + 1}`}
                    className="w-16 h-24 rounded-lg"
                  />
                </div>
              ))}
              {/* <span className="text-green-500 font-bold cursor-pointer hover:underline hover:scale-105 transition-transform">
                View All Images
              </span> */}
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {product.benefits.split(',').map((benefit, index) => (
              <li key={index}>{benefit.trim()}</li>
            ))}
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
