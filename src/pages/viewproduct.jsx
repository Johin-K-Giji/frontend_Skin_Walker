import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar';
import { FiSearch } from 'react-icons/fi';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/view_products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = () => {
    axios.put(`http://localhost:5000/edit_product/${editProduct.id}`, editProduct)
      .then(() => {
        fetchProducts();
        setShowEditModal(false);
      })
      .catch(error => {
        console.error("Error updating product:", error);
      });
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`http://localhost:5000/delete_product/${id}`)
        .then(() => fetchProducts())
        .catch(error => {
          console.error("Error deleting product:", error);
        });
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">View Products</h1>
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-sm p-2 pl-10 text-gray-700 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500 text-xl" />
        </div>

        <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
          <thead>
            <tr className="bg-green-500 text-white text-left">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Description</th>
              <th className="p-4">Benefits</th>
              <th className="p-4">Images</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 text-gray-700">{product.id}</td>
                  <td className="p-4 text-gray-700">{product.name}</td>
                  <td className="p-4 text-gray-700">{product.price}</td>
                  <td className="p-4 text-gray-700">{product.description}</td>
                  <td className="p-4 text-gray-700">{product.benefits}</td>
                  <td className="p-4">
                    <div className="flex">
                      {product.images.map((img, index) => (
                        <img
                          key={index}
                          src={`http://localhost:5000/static/uploads/${img}`}
                          alt="Product"
                          className="w-12 h-12 object-cover rounded-lg mr-2"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                      onClick={() => handleEditClick(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDeleteClick(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Edit Modal */}
        {showEditModal && editProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  name="name"
                  value={editProduct.name}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block mb-2">
                Price:
                <input
                  type="text"
                  name="price"
                  value={editProduct.price}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block mb-2">
                Description:
                <textarea
                  name="description"
                  value={editProduct.description}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>
              <label className="block mb-4">
                Benefits:
                <textarea
                  name="benefits"
                  value={editProduct.benefits}
                  onChange={handleEditChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </label>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="bg-gray-400 text-white px-3 py-1 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditSubmit}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProducts;
