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
            <div className=" py-4 px-8 flex justify-between items-center rounded-t-3xl bg-white ">
                {/* Logo */}
                <div className="w-24 h-24">
                    <img
                        src="./logo.png" // Replace with actual logo path
                        alt="Logow"
                        className="rounded-full"
                    />
                </div>

                {/* Menu Items */}
                <nav className="flex gap-12 text-gray-800 font-semibold text-xl">
                    <a href="/" className="hover:text-black">Home</a>
                    <a href="/about" className="hover:text-black">About</a>
                    <a href="/about" className="hover:text-black">Products</a>
                    <a href="/contact" className="hover:text-black">Contact</a>
                </nav>

                {/* Brochure Button */}
                <a
                    href="/path-to-brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-4 rounded-2xl  "
                >
                    Brochure
                </a>
            </div>
        </header>
    );
};

export default Header;
