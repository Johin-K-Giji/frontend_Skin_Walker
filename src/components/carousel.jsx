import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Carousel1 from '../assets/images/Carousel-1.png'
import cproduct1 from '../assets/images/cproduct1.png'
import cproduct2 from '../assets/images/cproduct2.png'
import feature1 from '../assets/images/feature1.png'
import feature2 from '../assets/images/feature2.png'
import feature3 from '../assets/images/feature3.png'

const Carousel = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const bounceIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: 'spring', duration: 1 } },
    };

    return (
        <section className="w-full h-[600px] bg-white flex items-center justify-center">
            {/* Desktop Wrapper */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="hidden md:block w-[1100px] h-[550px] bg-[#DDFFED] rounded-3xl"
            >
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="w-full h-[90%] rounded-3xl"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <motion.div
                            className="flex justify-between bg-[#BCE7F0] p-8 h-full"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <div className="flex-1">
                                <motion.h1 className="text-6xl font-extrabold text-black mb-4 grid grid-cols-1 gap-4">
                                    <span>ORGANIC</span>
                                    <span>COMES</span>
                                    <span>KNOCKING</span>
                                </motion.h1>
                                <p className="text-gray-600 mb-4 font-medium">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <motion.button
                                    variants={bounceIn}
                                    className="bg-black text-white px-6 py-3 rounded-xl font-bold uppercase"
                                >
                                    See Products
                                </motion.button>
                            </div>

                            <motion.div
                                className="flex-1 flex flex-row"
                                initial="hidden"
                                animate="visible"
                                variants={bounceIn}
                            >
                                <img
                                    src={Carousel1}
                                    alt="Milk Bottle"
                                    className="w-[300px] animate-slowBounce"
                                />
                                <div className="flex flex-col ml-4 gap-6">
                                    <div className="w-[200px] h-[130px] bg-[#CA1E50] rounded-3xl flex items-center justify-center">
                                        <img src={cproduct1} className="w-[80px] h-[90px]" alt="Milk Powder" />
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-white">Milk Powder</span>
                                            <span className="text-white underline underline-offset-8 cursor-pointer text-sm">
                                                Explore
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-[200px] h-[130px] bg-[#144A88] rounded-3xl flex items-center justify-center">
                                        <img src={cproduct2} className="w-[80px]" alt="Ghee" />
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-white">Original Ghee</span>
                                            <span className="text-white underline underline-offset-8 cursor-pointer text-sm">
                                                Explore
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <motion.div
                            className="flex justify-between bg-[#BCF0C8] p-8 h-full"
                            variants={fadeIn}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="flex-1">
                                <motion.h1 className="text-6xl font-extrabold text-black mb-4 grid grid-cols-1 gap-4">
                                    <span>ORGANIC</span>
                                    <span>COMES</span>
                                    <span>KNOCKING</span>
                                </motion.h1>
                                <p className="text-gray-600 mb-4 font-medium">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <motion.button
                                    variants={bounceIn}
                                    className="bg-black text-white px-6 py-3 rounded-xl font-bold uppercase"
                                >
                                    See Products
                                </motion.button>
                            </div>

                            <motion.div
                                className="flex-1 flex flex-row"
                                initial="hidden"
                                animate="visible"
                                variants={bounceIn}
                            >
                                <img
                                    src="./Carousel-1.png"
                                    alt="Milk Bottle"
                                    className="w-[300px] animate-slowBounce"
                                />
                                <div className="flex flex-col ml-4 gap-6">
                                    <div className="w-[200px] h-[130px] bg-[#CA1E50] rounded-3xl flex items-center justify-center">
                                        <img src="./cproduct1.png" className="w-[80px] h-[90px]" alt="Milk Powder" />
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-white">Milk Powder</span>
                                            <span className="text-white underline underline-offset-8 cursor-pointer text-sm">
                                                Explore
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-[200px] h-[130px] bg-[#144A88] rounded-3xl flex items-center justify-center">
                                        <img src="./cproduct2.png" className="w-[80px]" alt="Ghee" />
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-white">Original Ghee</span>
                                            <span className="text-white underline underline-offset-8 cursor-pointer text-sm">
                                                Explore
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                </Swiper>

                <div className='grid grid-cols-3 place-items-center gap-4'>

<div className='flex flex-row justify-center items-center gap-2'> <img src={feature1} className='w-[50px] h-[50px]'></img>
<span className='font-bold'>High in Protien</span></div>

<div className='flex flex-row justify-center items-center gap-2'> <img src={feature2} className='w-[60px] h-[50px]'></img>
<span className='font-bold'>Fully Organic</span></div>

<div className='flex flex-row justify-center items-center gap-2'> <img src={feature3} className='w-[70px] h-[40px]'></img>
<span className='font-bold'>Fast Delivery</span></div>

</div>
            </motion.div>

            {/* Mobile Wrapper */}
            <motion.div
                className="block md:hidden w-full max-w-[300px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            >
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="w-full h-[370px] rounded-3xl"
                >
                    {/* Slide 1 - Mobile */}
                    <SwiperSlide>
    <div className="relative flex flex-col items-center justify-center  bg-[#BCE7F0] h-full p-5">
        {/* Top-right Box */}
        <div className="absolute top-3 right-3 w-20 h-20 bg-[#CA1E50] rounded-lg shadow-lg flex flex-col items-center justify-center">
        <img src="./cproduct1.png" alt="Milk Bottle" className="w-6 h-8 " />
        <span className='font-bold text-white text-xs'>Milk Powder</span>
            <span className="text-xs font-semibold text-white underline underline-offset-4">Explore</span>
        </div>

        {/* Image */}
        <img
            src="./Carousel-1.png"
            alt="Milk Bottle"
            className="w-[170px] animate-slowBounce"
        />

        {/* Heading */}
        <h1 className="text-xl font-extrabold text-black text-center">
            ORGANIC COMES KNOCKING
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-center px-3 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
    </div>
</SwiperSlide>


                    {/* Slide 2 - Mobile */}
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center gap-4 bg-[#BCF0C8] h-full p-8">
                            <img
                                src="./Carousel-1.png"
                                alt="Milk Bottle"
                                className="w-[180px]"
                            />
                            <h1 className="text-4xl font-extrabold text-black text-center">
                                ORGANIC <br /> COMES <br /> KNOCKING
                            </h1>
                            <p className="text-gray-600 text-center px-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="grid grid-cols-3 gap-4 mt-6">
                    <Feature icon="./feature1.png" label="High in Protein" />
                    <Feature icon="./feature2.png" label="Fully Organic" />
                    <Feature icon="./feature3.png" label="Fast Delivery" />
                </div>

            </motion.div>
        </section>
    );
};

const Feature = ({ icon, label }) => (
    <div className="flex flex-col items-center gap-2">
        <img src={icon} alt={label} className="w-8 h-8" />
        <span className="font-semibold text-sm text-center">{label}</span>
    </div>
);

export default Carousel;
