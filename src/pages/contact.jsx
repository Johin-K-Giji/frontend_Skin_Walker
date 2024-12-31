import React, { useState } from "react";
import Header from "../components/navbar";
import Footer from "../components/footer";
import Circle from "../components/circle";
import { motion } from "framer-motion";

// Variants for animation
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const circleAnimation = {
  initial: { rotate: 0, opacity: 0 },
  animate: { rotate: 360, opacity: 0.7, transition: { duration: 3, repeat: Infinity, ease: "linear" } },
};

const ContactUs = () => {

    const [ name, setName] = useState('')
    const [address, setAddress] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

  return (
    <motion.div 
      className="relative min-h-screen bg-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <Header />

      <div className="relative w-full min-h-screen px-4 sm:px-8 md:px-24 py-16 overflow-hidden">
        {/* Animated Circles */}
        <motion.div
          variants={circleAnimation}
          className="absolute top-0 -left-16"
        >
          <Circle size="180px" color="#9EE09E" opacity={0.5} />
        </motion.div>
        <motion.div
          variants={circleAnimation}
          className="absolute bottom-4 -right-16"
        >
          <Circle size="150px" color="#9EE09E" opacity={0.7} />
        </motion.div>

        {/* Contact Form Section */}
        <motion.section 
          className="mb-16 flex flex-col items-center justify-center gap-12"
          variants={itemVariants}
        >
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
            Share Your Thoughts
          </motion.h1>
          <motion.div 
            className="bg-[#F9F9F9] p-6 sm:p-8 md:p-10 rounded-md shadow-md w-full md:w-[700px]"
            variants={itemVariants}
          >
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none sm:col-span-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <textarea
                placeholder="Ask Us..."
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none sm:col-span-2"
                rows="4"
              />
              <button
                type="submit"
                className="sm:col-span-2 bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-all"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.section>

        {/* Contact Information Section */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">Contact Us</h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center"
          variants={sectionVariants}
        >
          <div className="p-4 border border-gray-300 rounded-md shadow-sm">
            <h3 className="text-lg font-bold mb-2">For Placing Orders</h3>
            <p className="text-gray-600">+91-987456215</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-md shadow-sm">
            <h3 className="text-lg font-bold mb-2">Enquiry</h3>
            <p className="text-gray-600">+91-987456215</p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default ContactUs;
