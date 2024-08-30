import React, { useEffect, useState } from 'react'
import sushmaTour from "../assets/sushmatour.mp4"
import sushmaMainTour from "../assets/sushmamaintour.mp4"
import homeImg1 from "../assets/homeImg1.png"
import heroImg2 from "../assets/heroImg2.png"
import heroImg3 from "../assets/heroImg3.png"
import ReactPlayer from 'react-player'

import Slider from 'react-slick'
export default function Home() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 3000,
  }
  return (
    <section className='w-full h-screen grid md:grid-cols-[42%_58%] grid-cols-1'>
        <div className=" md:relative absolute z-40 md:top-0 md:left-0 top-[10%] md:text-start text-center left-[0%] w-full h-screen md:bg-primary-color bg-none" >
        <div className='md:block md:items-start md:justify-start flex items-center justify-center mt-[24%] flex-col'>
        <p class="  md:text-start text-center md:mt-8  px-8 lg:mt-5 text-[30px] xs:text-[40px] md:text-[42px] font-medium text-white lg:text-[45px] xl:text-[50px]  xl:leading-[77px] ">WE MAKE <br /> HOMES THAT <br />UNDERSTAND <br/>YOU</p>
        <button className='py-1 md:mt-8 mt-4 lg:mt-5 mx-8 text-white font-normal px-3 md:px-5 rounded-full uppercase md:text-[20px] text-[16px] lg:text-[30px] border'>see all projects</button>
        <div className='lg:h-[180px] h-[280px] w-[95%] mt-3 md:block hidden'>
        <video loop autoPlay controls className="object-cover w-full h-full" ><source src={sushmaMainTour} type="video/mp4"/>Your browser does not support the video tag.</video>
        </div>
        </div>
        </div>
        <div className=' relative z-30 w-full h-full overflow-hidden  top-0 left-0  bg-gradient-to-b from-black/60 md:from-black/30 to-transparent'>
        <div className="overflow-hidden">
    <Slider {...settings} id="offeringCardSlider">
      <div>
      <video  autoPlay controls className="object-cover w-full h-screen"><source src={sushmaTour} type="video/mp4"/>Your browser does not support the video tag.</video>
      </div>
      <div>
        <img src={homeImg1} className='w-full h-screen' alt="" />
      </div>
      <div>
      <img src={heroImg2} className='w-full h-screen' alt="" />
      </div>
      <div>
      <img src={heroImg3} className='w-full h-screen' alt="" />
      </div>
    </Slider>
    </div>
        </div>
    </section>
  )
}
