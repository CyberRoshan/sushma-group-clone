import React from 'react'
import aboutImg from "../assets/about_us.png"
export default function About() {
  return (
    <section className='md:px-5 px-5'>
    <div id='about-us' className='max-w-[1024px] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-[100px] py-[100px] items-center'>
        <div className='md:px-5 px-5'>
            <img src={aboutImg} className='mx-auto' alt="About Us" />
        </div>
        <div>
        <div className='space-y-7 mx-auto'>
          <h2 className='text-primary-color text-[30px] leading-[35px] md:text-[38px] md:leading-[leading-[49px] lg:text-[40px] lg:leading-[56px] font-bold uppercase md:text-start text-center'>About <br />
          Sushma Group</h2>
          <p className='lg:text-[20px] md-[16px] text-[14px] lg:leading-[30px] text-theme-text-color font-semibold md:text-start text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
          <h3 className='lg:text-[32.49px] text-[22px] text-[#575858] lg:leading-[48px] font-semibold md:text-start text-center lg:pe-12'>WE PROVIDE YOU THE BEST <span className='font-bold'>EXPERIENCE</span> </h3>
        </div>
        <div className=' relative mt-10 bg-primary-color p-3 grid md:grid-cols-4 grid-cols-1 rounded-t-lg gap-4 md:divide-x-2 md:divide-y-0 divide-y divide-dotted before:w-full before:h-[1px] before:bg-white before:absolute before:bottom-1 before:left-0'>
          <div className='flex flex-col text-white font-semibold px-2 text-center'>
          <div className='lg:text-[40px] md:text-[28px] text-[16px] font-extrabold   '>100+</div>
          <span className='text-[10px] capitalize'>Completed Project</span>
          </div>
          <div className='flex flex-col text-white font-semibold px-2 text-center'>
          <div className='lg:text-[40px] md:text-[28px] text-[16px] font-extrabold  ps-3 '>50+</div>
          <span className='text-[10px] capitalize'>residence Project</span>
          </div>
          <div className='flex flex-col text-white font-semibold px-2 text-center'>
          <div className='lg:text-[40px] md:text-[28px] text-[16px] font-extrabold ps-3 '>50+</div>
          <span className='text-[10px] capitalize'>commercial Project</span>
          </div>
          <div className='flex flex-col text-white font-semibold px-2 text-center'>
          <div className='lg:text-[40px] md:text-[28px] text-[16px] font-extrabold ps-3  '>02+</div>
          <span className='text-[10px] capitalize'>upcoming </span>
          </div>
        </div>
        </div>
    </div>
    </section>
  )
}
