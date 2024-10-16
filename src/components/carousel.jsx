import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Carousel = () => {
    return (
        <section className="w-full h-[600px] bg-white flex items-center justify-center">
            {/* Wrapper Div inside Section */}
            <div className="w-[1100px] h-[550px] bg-[#DDFFED] rounded-3xl ">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                   
                    className="w-full h-[90%] rounded-3xl "
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className="flex  justify-between bg-[#BCE7F0] p-8 h-full">
                            <div className="flex-1">
                                <h1 className="text-6xl font-extrabold text-black mb-4 grid grid-cols-1 gap-4">
                                    <span>ORGANIC</span>
                                    <span>COMES</span>
                                    <span>KNOCKING</span>
                                </h1>

                                <p className="text-gray-600 mb-4 font-medium">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <button className="bg-black text-white px-6 py-3 rounded-xl font-bold uppercase">
                                    See Products
                                </button>
                            </div>
                            <div className="flex-1 flex flex-row "> 
                                <img src="./Carousel-1.png" alt="Milk Bottle" className="w-[300px] animate-slowBounce " />
                                <div className="flex flex-col ml-4 gap-6"> 
                                    <div className='w-[200px] h-[130px] bg-[#CA1E50]  rounded-3xl flex flex-row items-center justify-center'>
                                        <img src="./cproduct1.png" alt="Milk Bottle" className="w-[80px] h-[90px]" />
                                        <div className='flex flex-col items-center justify-center '><span className='font-bold text-white'>Milk Powder</span>
                                        <span className='text-white underline underline-offset-8 cursor-pointer text-sm'>Explore</span>
                                        </div>
                                    </div>


                                    <div className='w-[200px] h-[130px] bg-[#144A88] rounded-3xl flex flex-row items-center justify-center'>
                                    <img src="./cproduct2.png" alt="Milk Bottle" className="w-[80px] " />
                                        <div className='flex flex-col items-center justify-center '><span className='font-bold text-white'>Orginal Ghee</span>
                                        <span className='text-white underline underline-offset-8 cursor-pointer text-sm'>Explore</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="flex  justify-between bg-[#BCF0C8] p-8 h-full">
                            <div className="flex-1">
                                <h1 className="text-6xl font-extrabold text-black mb-4 grid grid-cols-1 gap-2">
                                    <span>ORGANIC</span>
                                    <span>COMES</span>
                                    <span>KNOCKING</span>
                                </h1>

                                <p className="text-gray-600 mb-4 font-medium">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <button className="bg-black text-white px-6 py-2 rounded-xl">
                                    See Products
                                </button>
                            </div>
                            <div className="flex-1 flex flex-row"> 
                                <img src="./Carousel-1.png" alt="Milk Bottle" className="w-[300px]" />
                                <div className="flex flex-col ml-4 gap-6"> 
                                    <div className='w-[200px] h-[130px] bg-[#CA1E50]  rounded-3xl'></div>
                                    <div className='w-[200px] h-[130px] bg-[#144A88] rounded-3xl'></div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className='grid grid-cols-3 place-items-center gap-4'>

                    <div className='flex flex-row justify-center items-center gap-2'> <img src='./feature1.png' className='w-[50px] h-[50px]'></img>
                    <span className='font-bold'>High in Protien</span></div>

                    <div className='flex flex-row justify-center items-center gap-2'> <img src='./feature2.png' className='w-[60px] h-[50px]'></img>
                    <span className='font-bold'>Fully Organic</span></div>

                    <div className='flex flex-row justify-center items-center gap-2'> <img src='./feature3.png' className='w-[70px] h-[40px]'></img>
                    <span className='font-bold'>Fast Delivery</span></div>

                </div>
            </div>
        </section>
    )
}

export default Carousel
