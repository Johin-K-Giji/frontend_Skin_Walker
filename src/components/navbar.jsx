// src/components/Header.jsx
import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
            <div className="py-4 px-8 flex justify-between items-center bg-[#FFFCF3] rounded-t-3xl">
                {/* Logo */}
                <div className="w-16 h-16 md:w-24 md:h-24">
                    <img
                        src="./logo.png" // Replace with actual logo path
                        alt="Logo"
                        className="rounded-full"
                    />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-12 text-gray-800 font-semibold text-xl">
                    <a href="/" className="hover:text-black">Home</a>
                    <a href="/about" className="hover:text-black">About</a>
                    <a href="/products" className="hover:text-black">Products</a>
                    <a href="/contact" className="hover:text-black">Contact</a>
                </nav>

                {/* Brochure Button */}
                <a
                    href="/path-to-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-2xl"
                >
                    Brochure
                </a>


                {/* Hamburger Icon (Mobile) */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4 px-8 flex flex-col gap-4">
                    <a
                        href="/"
                        className="text-gray-800 text-lg font-semibold hover:text-black"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="text-gray-800 text-lg font-semibold hover:text-black"
                        onClick={toggleMenu}
                    >
                        About
                    </a>
                    <a
                        href="/products"
                        className="text-gray-800 text-lg font-semibold hover:text-black"
                        onClick={toggleMenu}
                    >
                        Products
                    </a>
                    <a
                        href="/contact"
                        className="text-gray-800 text-lg font-semibold hover:text-black"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                    <a
                        href="/path-to-brochure.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-xl"
                    >
                        Brochure
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
