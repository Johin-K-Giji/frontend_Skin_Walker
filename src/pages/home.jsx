import React from 'react'
import Header from '../components/navbar'
import Carousel from '../components/carousel'
import Footer from '../components/footer'
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  return (
    <div className='bg-[#FFFCF3]'>
      <Header />
      <Carousel />
      <motion.div
        className="relative min-h-screen w-full mt-12 overflow-hidden"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Image */}
        <div
          className='hidden md:block absolute inset-0 bg-cover bg-center opacity-40 h-[700px]'
          style={{ backgroundImage: "url('./aboutbg2.jpg')" }}
        ></div>

        {/* Content Container */}
        <div className='absolute inset-0 flex flex-col items-center px-4 pt-8 md:justify-center z-10'>
          <h1 className="text-2xl md:text-5xl font-bold text-black uppercase text-center">
            Why Choose Us
          </h1>

          {/* Main Content Box */}
          <div className='relative w-full max-w-[1000px] mt-8'>
            {/* Main Div with Low Opacity */}
            <div className='absolute inset-0 bg-[#5EA2B7] rounded-3xl opacity-65'></div>

            {/* Content Section on Top */}
            <div className='relative flex flex-col items-center justify-start w-full h-[500px] px-4 md:px-8'>
              {/* White Section with Logo and Text */}
              <div className='md:bg-[#FFFCF3] bg-white w-full max-w-[900px] rounded-3xl md:rounded-t-3xl flex flex-col md:flex-row 
        items-center justify-center mt-5 px-4 py-6 gap-4'>
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img
                    src="./logo.png"
                    alt="Logo"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className='font-bold text-sm md:text-base'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>

              {/* Icons Section */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 w-full max-w-[900px]'>
                {['aboutf1.png', 'aboutf2.png', 'aboutf3.png', 'aboutf4.png'].map((icon, index) => (
                  <div key={index} className="w-18 h-18 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center">
                    <img
                      src={`./${icon}`}
                      alt={`Feature ${index + 1}`}
                      className="w-12 h-12 md:h-24 md:w-24 object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Discover More Button */}
              <div className='flex items-center justify-center w-full mt-10 md:mt-8'>
                <button className="bg-black text-white px-2 py-2 md:px-6 md:py-3 rounded-xl font-bold uppercase">
                  Discover More
                </button>
              </div>
            </div>
          </div>

        </div>
      </motion.div>


      {/* product Secton  */}

      <motion.div
        className="relative"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="bg-[#FFFCF3] py-16 px-4 md:px-20">
          <h2 className="text-2xl  md:text-3xl font-bold text-center uppercase mb-10 ">
            Best Sellers
          </h2>

          <div className="mt-24">
            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 min-h-[450px]">
              {/* Product Card 1 */}
              <div className="bg-[#308472] rounded-2xl p-6 flex flex-col items-center mt-12 relative w-[300px] text-white">
                <div className="relative -mt-20">
                  <img
                    src="./cproduct1.png"
                    alt="Product 1"
                    className="w-40 h-40 object-contain relative z-10"
                  />
                </div>
                <h3 className="font-bold text-lg text-center mt-4">Walker Protein Ghee</h3>
                <ul className="text-sm list-disc list-inside mt-6 space-y-4">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Vivamus id lacus pulvinar, rhoncus velit id, mollis nisl.</li>
                </ul>
                <p className="font-bold text-xl mt-4">
                  Rs 500 <span className="text-sm">per litre</span>
                </p>
                <button className="bg-[#63B15B] text-white px-4 py-4 rounded-xl absolute -bottom-4">
                  View More
                </button>
              </div>

              {/* Duplicate Card 2 */}
              <div className="bg-[#308472] rounded-2xl p-6 flex flex-col items-center mt-12 relative w-[300px] text-white">
                <div className="relative -mt-20">
                  <img
                    src="./cproduct1.png"
                    alt="Product 1"
                    className="w-40 h-40 object-contain relative z-10"
                  />
                </div>
                <h3 className="font-bold text-lg text-center mt-4">Walker Protein Ghee</h3>
                <ul className="text-sm list-disc list-inside mt-6 space-y-4">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Vivamus id lacus pulvinar, rhoncus velit id, mollis nisl.</li>
                </ul>
                <p className="font-bold text-xl mt-4">
                  Rs 500 <span className="text-sm">per litre</span>
                </p>
                <button className="bg-[#63B15B] text-white px-4 py-4 rounded-xl absolute -bottom-4">
                  View More
                </button>
              </div>

              {/* Duplicate Card 3 */}
              <div className="bg-[#308472] rounded-2xl p-6 flex flex-col items-center mt-12 relative w-[300px] text-white">
                <div className="relative -mt-20">
                  <img
                    src="./cproduct1.png"
                    alt="Product 1"
                    className="w-40 h-40 object-contain relative z-10"
                  />
                </div>
                <h3 className="font-bold text-lg text-center mt-4">Walker Protein Ghee</h3>
                <ul className="text-sm list-disc list-inside mt-6 space-y-4">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Vivamus id lacus pulvinar, rhoncus velit id, mollis nisl.</li>
                </ul>
                <p className="font-bold text-xl mt-4">
                  Rs 500 <span className="text-sm">per litre</span>
                </p>
                <button className="bg-[#63B15B] text-white px-4 py-4 rounded-xl absolute -bottom-4">
                  View More
                </button>
              </div>
            </div>

            {/* Mobile Layout (Horizontal Scroll) */}
            <div className="flex md:hidden gap-4 overflow-x-auto overflow-hidden snap-x snap-mandatory px-4 mt-6 scroll-container">
              {/* Product Card 1 */}
              <div className="bg-[#308472] rounded-2xl p-6 flex flex-col items-center relative w-[200px] h-[250px] text-white flex-shrink-0 snap-center mt-12">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src="./cproduct1.png"
                    alt="Product 1"
                    className="w-20 h-20 object-contain z-10"
                  />
                </div>
                <h3 className="font-bold text-base text-center mt-4">Walker Protein Ghee</h3>
                <ul className="text-xs list-disc list-inside mt-2 space-y-1">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Vivamus id lacus pulvinar, rhoncus velit id, mollis nisl.</li>
                </ul>
                <p className="font-bold text-lg mt-4">
                  Rs 500 <span className="text-xs">per litre</span>
                </p>
                <button className="bg-[#63B15B] text-white px-2 py-1 rounded-lg mt-4 text-sm z-20 ">
                  View More
                </button>

              </div>

              {/* Product Card 2 */}
              <div className="bg-[#308472] rounded-2xl p-6 flex flex-col items-center relative w-[200px] h-[250px] text-white flex-shrink-0 snap-center mt-12">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src="./cproduct1.png"
                    alt="Product 1"
                    className="w-20 h-20 object-contain z-10"
                  />
                </div>
                <h3 className="font-bold text-base text-center mt-4">Walker Protein Ghee</h3>
                <ul className="text-xs list-disc list-inside mt-2 space-y-1">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Vivamus id lacus pulvinar, rhoncus velit id, mollis nisl.</li>
                </ul>
                <p className="font-bold text-lg mt-4">
                  Rs 500 <span className="text-xs">per litre</span>
                </p>
                <button className="bg-[#63B15B] text-white px-2 py-1 rounded-lg mt-4 text-sm z-20 relative">
                  View More
                </button>

              </div>

              {/* Product Card 3 */}
              <div className="bg-[#308472] rounded-2xl p-6 flex flex-col items-center relative w-[200px] h-[250px] text-white flex-shrink-0 snap-center mt-12">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <img
                    src="./cproduct1.png"
                    alt="Product 1"
                    className="w-20 h-20 object-contain z-10"
                  />
                </div>
                <h3 className="font-bold text-base text-center mt-4">Walker Protein Ghee</h3>
                <ul className="text-xs list-disc list-inside mt-2 space-y-1">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Vivamus id lacus pulvinar, rhoncus velit id, mollis nisl.</li>
                </ul>
                <p className="font-bold text-lg mt-4">
                  Rs 500 <span className="text-xs">per litre</span>
                </p>
                <button className="bg-[#63B15B] text-white px-2 py-1 rounded-lg mt-4 text-sm z-10 relative">
                  View More
                </button>

              </div>



            </div>

          </div>

          {/* View All Button - Positioned to Left */}
          <div
            className="absolute left-0 mt-24 bg-[#033D1E] w-[250px] h-[50px] md:w-[600px] md:h-[100px] flex justify-between items-center text-white px-6 rounded-r-lg  md:rounded-r-3xl"
          >
            <p className="text-xs md:text-xl font-medium">Take a Look on Organic</p>
            <span className="text-sm md:text-2xl font-bold cursor-pointer">View All</span>

          </div>
        </div>

        <div className="relative py-24 mt-[500px] ">
          {/* Dark Green Bar in the Background */}
          <div className="absolute inset-x-0 top-[5%] -translate-y-1/2 h-[400px] bg-[#22554A]"></div>

          {/* Green Card Overlapping the Dark Green Bar */}
          <div className="relative mx-auto bg-[#86D97D] rounded-3xl p-4 w-[90%] h-[500px] max-w-[1200px] shadow-lg z-10 mt-[-160px] ">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

              {/* Image Section */}


              {/* Iframe Section */}
              <div className="md:w-full mt-6 md:mt-0">
                <iframe
                  className="w-full h-full md:h-[450px] rounded-xl"
                  src="https://www.youtube.com/embed/25Pt1AZO9EM?si=XtCrcpmA7lNOF9oj"
                  title="YouTube Video"

                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>


      </motion.div>


      <Footer />



    </div>

  )
}

export default Home
