import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSearch, FiShare2 } from 'react-icons/fi';
import Header from '../components/navbar';
import Footer from '../components/footer';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = window.innerWidth < 768 ? 30 : 9;
  const pageCount = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    // Fetch products from the backend
    axios.get('http://localhost:5000/view_products')
      .then(response => {
        setProducts(response.data.products); // Assuming the data format is { products: [...] }
        
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <motion.div
      className="bg-white min-h-screen overflow-hidden"
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <Header />

      <section className="px-4 md:px-12 py-12 max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Product Catalog
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full px-4 py-2 rounded-full border border-gray-400 focus:outline-none"
            />
            <FiSearch className="absolute right-4 top-2.5 text-gray-600 text-xl" />
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={cardVariants}
        >
          {currentProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full flex justify-end">
                <FiShare2 className="text-gray-500 cursor-pointer hover:text-green-600" />
              </div>
              <img
                src={`http://localhost:5000/static/uploads/${product.images[0]}`}
                alt={product.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-sm md:text-xl font-bold mb-1">
                {product.name}
              </h3>
              <p className="text-base font-semibold text-black">
                {product.price}
                <span> per litre</span>
              </p>
              <Link
                to={`/product/${product.id}`}
                className="text-green-600 font-bold mt-2 hover:underline"
              >
                View More
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <ReactPaginate
            previousLabel={'← Previous'}
            nextLabel={'Next →'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="flex gap-4"
            activeClassName="text-green-600 font-bold border-b-2 border-green-600"
            previousClassName="text-green-600 font-bold"
            nextClassName="text-green-600 font-bold"
            pageClassName="text-gray-700"
            disabledClassName="text-gray-400"
          />
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Products;
