import React, { useState } from 'react';
import client1 from '../assets/client1.jpeg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ClintsSays() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '40px',
        slidesToShow: 3,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1,
                }
            },
        ]
    };

    // Determine the index of the center card
    const centerIndex = Math.floor(settings.slidesToShow / 2);

    return (
        <section className='w-full'>
            <div className='text-center py-[50px]'>
                <h3 className='text-primary-color lg:text-[40px] text-[22px] sm:text-[32px] md:text-[37px] font-bold uppercase'>
                    What Our Clients Say
                </h3>
                <p className='lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-[#5A5454]'>
                    Within the premises of the Sushma Township are reputed Schools.
                </p>
            </div>
            <div className='bg-[#F0F0F0] py-5'>
                <Slider {...settings}>
                    {[...Array(6)].map((_, index) => (
                        <div key={index}>
                            <div className='flex flex-col mx-4'>
                                <div className={`rounded-2xl text-white py-6 pb-16 px-6 text-center ${currentSlide % settings.slidesToShow === index % settings.slidesToShow ? 'bg-primary-color' : 'bg-gray-300'}`}>
                                    <p className='text-[14px] md:text-[16px] font-normal leading-5 md:leading-7'>
                                        Choosing to invest in a property with Sushma Group through Realty Nivesh has been one of the best decisions I've made. The Sushma Service Partner team was incredibly professional, guiding me every step of the way and ensuring a seamless buying experience. Their attention to detail and commitment to customer satisfaction truly set them apart. With Realty Nivesh and Sushma Group, I felt confident and supported in making a significant investment, and I couldn't be happier with my new home.
                                    </p>
                                </div>
                                <div className='space-y-3 relative top-[-8%]'>
                                    <img src={client1} className='mx-auto w-[120px] h-[120px] object-cover rounded-full' alt="" />
                                    <div className='text-center'>
                                        <h4 className='text-primary-color font-semibold text-[24px]'>Mukesh</h4>
                                        <p className='text-[10px] font-normal leading-[14px]'>
                                            Corporate Employee - SAP India
                                        </p>
                                        <div className='flex justify-center gap-3 my-2'>
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} stroke="currentColor" fill="gold" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
