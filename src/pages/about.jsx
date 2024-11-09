// src/pages/AboutUs.js
import React from 'react';
import Header from '../components/navbar';
import Footer from '../components/footer';
import Circle from '../components/circle';
import { motion } from 'framer-motion';
import { FaSeedling, FaClipboardCheck, FaBoxOpen, FaTruck } from 'react-icons/fa';

// Variants for section animation
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 } },
};

// Variants for individual item animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Rotating circle animation
const circleAnimation = {
  initial: { rotate: 0, opacity: 0 },
  animate: { rotate: 360, opacity: 0.7, transition: { duration: 3, repeat: Infinity, ease: 'linear' } },
};

const AboutUs = () => {
  return (
    <motion.div 
      className="relative min-h-screen bg-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants} // Animate the entire page
    >
      <Header />

      <div className="relative w-full min-h-screen px-8 md:px-24 py-16 overflow-hidden">
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

        <motion.section className="mb-16 flex flex-col md:flex-row items-center justify-center gap-12" variants={itemVariants}>
          <motion.h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-8">
            About Us
          </motion.h1>
          <motion.div 
            className="bg-[#DDFFED] border-l-4 border-green-500 p-6 rounded-md shadow-md w-full md:w-[700px]"
            whileHover={{ scale: 1.05 }} // Subtle hover animation
            variants={itemVariants}
          >
            <p className="text-gray-700 text-lg md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </motion.div>
        </motion.section>

        {/* Focus Section */}
        <h2 className="text-center text-4xl font-bold mb-12">Our Focus On</h2>
        <motion.div className="flex flex-col gap-2" variants={sectionVariants}>
          <FocusCard imgSrc="aboutf3.png" title="100% Organic" text="Lorem Ipsum is simply dummy text." />
          <FocusCard imgSrc="aboutf4.png" title="Quality" text="Lorem Ipsum has been the industry's standard." reverse />
          <FocusCard imgSrc="aboutf5.png" title="Best Price" text="Lorem Ipsum used in typesetting industry." />
        </motion.div>

        {/* Processing Section */}
        <h2 className="text-center text-4xl font-bold mb-12 mt-16">Our Processing</h2>
        <motion.div 
          className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4 mt-8"
          variants={sectionVariants}
        >
          <AnimatedCard number={1} text="Collect Directly From Farmers" icon={<FaSeedling />} />
          <AnimatedCard number={2} text="Go through the Quality Check" icon={<FaClipboardCheck />} />
          <AnimatedCard number={3} text="Packed in a Secure Environment" icon={<FaBoxOpen />} />
          <AnimatedCard number={4} text="Deliver to your Doorstep" icon={<FaTruck />} />
        </motion.div>

        {/* Final Paragraph Section */}
        <motion.div 
          className="mt-16 p-8 bg-[#F0F0F0] rounded-md shadow-md text-center"
          whileHover={{ scale: 1.02 }}
          variants={itemVariants}
        >
          <p className="text-lg text-gray-700">
            We ensure that all our products follow strict quality checks and packaging procedures, so you receive only the best.
            From collecting fresh produce from farmers to ensuring timely delivery, we are committed to excellence every step of the way.
          </p>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

const FocusCard = ({ imgSrc, title, text, reverse }) => (
  
  <motion.div
    className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
    variants={itemVariants}
  >
    <img src={`./${imgSrc}`} alt={title} className="w-36 h-36" />
    <div className="text-center md:text-left">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </motion.div>
);

const AnimatedCard = ({ number, text, icon }) => (
  <motion.div
    className="relative group border-2 border-green-950 w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px] rounded-3xl 
               flex flex-col items-center justify-around p-4 overflow-hidden"
    variants={itemVariants}
    whileHover={{ scale: 1.1, rotate: 5 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="absolute inset-0 border-4 border-green-500 rounded-3xl transform scale-110 opacity-0 
                    group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

    <div className="text-green-500 text-4xl mb-2">{icon}</div>
    <span className="text-2xl sm:text-3xl font-bold text-green-950">{number}</span>
    <p className="text-center text-gray-700 text-xs sm:text-sm font-bold">{text}</p>
  </motion.div>
);

export default AboutUs;
