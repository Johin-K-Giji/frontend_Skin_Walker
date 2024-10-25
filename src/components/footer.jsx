import React from 'react'

import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="bg-[#BCE7F0] py-12 px-6 md:px-16">
        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-center md:text-left">
          
          {/* Address Section */}
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <FaMapMarkerAlt className="text-2xl" />
            <p className="text-lg">
              26985 Brighton Lane, <br /> Lake Forest, CA 92630
            </p>
          </div>
  
          {/* Office Hours Section */}
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <FaClock className="text-2xl" />
            <p className="text-lg">
              Our office is open: <br /> Mon to Fri from 9 a.m. to 5 p.m.
            </p>
          </div>
  
          {/* Phone Section */}
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <FaPhoneAlt className="text-2xl" />
            <p className="text-lg">
              +91-7598425522 <br /> +91-7598425522
            </p>
          </div>
        </div>
  
        {/* Email Section */}
        <div className="flex items-center justify-center mt-8 space-x-3">
          <FaEnvelope className="text-xl" />
          <p className="text-lg font-medium">
            Mail Us at: <a href="mailto:skinwalker@gmail.com" className="font-bold">skinwalker@gmail.com</a>
          </p>
        </div>
  
        {/* Divider Line */}
        <div className="my-6 border-t-2 border-black w-[80%] mx-auto"></div>
  
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 text-2xl">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>
      </footer>
    );
  };

export default Footer
