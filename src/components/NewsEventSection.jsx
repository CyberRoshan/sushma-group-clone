import React from 'react'
import news1 from "../assets/news1.png"
import news2 from "../assets/news2.png"
import news3 from "../assets/news3.png"
export default function NewsEventSection() {
  return (
    <section className='md:px-5 px-5 bg-[#F4F4F4]'>
    <div className='w-full py-[50px] bg-[#F4F4F4]'> 
    <div className='max-w-[1220px] mx-auto'>
        <div className='flex items-center justify-between'>
    <div>
        <h3 className='text-primary-color lg:text-[40px] text-[22px] sm:text-[32px] md:text-[37px] font-bold uppercase'>news & Events</h3>
        <p className='lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-[#5A5454]'>Within the premises of the Sushma Township are reputed Schools.</p>
        </div>
        <button className='uppercase rounded-full inline border-[0.83px] mt-6 px-5 py-2 lg:text-[18px] text-[12px] text-nowrap text-[#1E6DA4] font-bold border-[#1E6DA4] hover:text-white hover:bg-[#1E6DA4] hover:duration-500'>see all</button>
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 pt-[50px]'>
            <div className='group'>
                <figure className='rounded-xl overflow-hidden lg:h-[250px]'>
                    <img src={news1} className='rounded-xl overflow-hidden group-hover:scale-105 duration-500' alt="" />
                </figure>
                <div className='py-3 px-0'>
                    <p className='text-[11px] lg:text-[15px] text-[#1E6DA4] font-semibold'>Nov 11, 2023</p>
                    <h3 className='text-[10px] sm:text-[12px] lg:text-[16px] xl:text-[17.49px] text-[#3F4041] font-bold lg:pe-20'>What is a Short-Term Apartment Rentals? | Confident Group</h3>
                </div>
            </div>
            <div className='group'>
                <figure className='rounded-xl overflow-hidden lg:h-[250px]'>
                    <img src={news2} className='rounded-xl overflow-hidden group-hover:scale-105 duration-500' alt="" />
                </figure>
                <div className='py-3 px-0'>
                    <p className='text-[11px] lg:text-[15px] text-[#1E6DA4] font-semibold'>Nov 11, 2023</p>
                    <h3 className='text-[10px] sm:text-[12px] lg:text-[16px] xl:text-[17.49px] text-[#3F4041] font-bold lg:pe-20'>What is a Short-Term Apartment Rentals? | Confident Group</h3>
                </div>
            </div>
            <div className='group'>
                <figure className='rounded-xl overflow-hidden lg:h-[250px]'>
                    <img src={news3} className='rounded-xl  overflow-hidden group-hover:scale-105 duration-500' alt="" />
                </figure>
                <div className='py-3 px-0'>
                    <p className='text-[11px] lg:text-[15px] text-[#1E6DA4] font-semibold'>Nov 11, 2023</p>
                    <h3 className='text-[10px] sm:text-[12px] lg:text-[16px] xl:text-[17.49px] text-[#3F4041] font-bold lg:pe-20'>What is a Short-Term Apartment Rentals? | Confident Group</h3>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
  )
}
