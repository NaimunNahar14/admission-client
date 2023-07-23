import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaSistrix } from 'react-icons/fa';


// Import Swiper styles

import './Banner.css';
import img1 from '../../assets/school-books-on-desk-education-concept-871454068-5b548900c9e77c005b04fc8c.jpg';
import img2 from '../../assets/001b24de-1600.webp';
import img3 from '../../assets/istockphoto-525494824-612x612.jpg';

const Banner = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className="mySwiper mt-2 mb-2">
            <Swiper pagination={pagination}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img1} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                    Welcome to EnrollGenius
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                    We're here to simplify your journey to higher education. Explore colleges, universities, and courses with ease. Our dedicated support team is ready to assist you at every step. Join us and unlock a world of endless opportunities! Start your admission journey today. Let's make your dreams come true!
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img2} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                    Welcome to EnrollGenius
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                    We're here to simplify your journey to higher education. Explore colleges, universities, and courses with ease. Our dedicated support team is ready to assist you at every step. Join us and unlock a world of endless opportunities! Start your admission journey today. Let's make your dreams come true!
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[calc(100vh-90px)] w-full relative '>
                        <img src={img3} alt="" className='object-cover h-full w-full' />
                        <div className='absolute h-full w-full top-0 right-0 bg-black bg-opacity-50 text-white flex justify-center items-center text-center'>
                            <div className='md:w-2/3 px-5'>
                                <h2 className='text-5xl font-bold mb-5'>
                                    Welcome to EnrollGenius
                                </h2>
                                <p className='text-lg font-medium mb-10'>
                                    We're here to simplify your journey to higher education. Explore colleges, universities, and courses with ease. Our dedicated support team is ready to assist you at every step. Join us and unlock a world of endless opportunities! Start your admission journey today. Let's make your dreams come true!
                                </p>
                                <div className="mx-auto">
                                    <button className="btn btn-primary">Enroll</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className='mt-5 flex items-center justify-center'>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xl mb-3 mr-2"
                />
                <button className="btn btn-primary">
                    <FaSistrix />
                </button>
            </div>
        </div>
    );
};

export default Banner;
