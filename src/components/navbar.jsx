// src/components/Header.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
    return (
        <header className="w-full">
            {/* Top Info Bar */}
            <div className="bg-black text-white py-2 flex justify-between items-center px-8">

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <FaPhoneAlt size={14} />
                    <span className="text-sm">+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center gap-2">
                    <MdEmail size={14} />
                    <span className="text-sm">Hello@gmail.com</span>
                </div>

            </div>
            </div>

            {/* Main Navigation Bar */}
            <div className=" py-4 px-8 flex justify-between items-center rounded-t-3xl ">
                {/* Logo */}
                <div className="w-24 h-24">
                    <img
                        src="./logo.png" // Replace with actual logo path
                        alt="Logow"
                        className="rounded-full"
                    />
                </div>

                {/* Menu Items */}
                <nav className="flex gap-8 text-gray-800 font-medium">
                    <a href="/" className="hover:text-black">Home</a>
                    <a href="/about" className="hover:text-black">About</a>
                    <div className="relative group">
                        <button className="hover:text-black flex items-center">
                            Products <span className="ml-1"><RiArrowDropDownLine size={14} /></span>
                        </button>
                        {/* Dropdown Menu */}
                        <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md">
                            <a href="/products/product1" className="block px-4 py-2 hover:bg-gray-200">
                                Product 1
                            </a>
                            <a href="/products/product2" className="block px-4 py-2 hover:bg-gray-200">
                                Product 2
                            </a>
                        </div>
                    </div>
                    <a href="/contact" className="hover:text-black">Contact</a>
                </nav>

                {/* Brochure Button */}
                <a
                    href="/path-to-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md"
                >
                    Brochure
                </a>
            </div>
        </header>
    );
};

export default Header;
