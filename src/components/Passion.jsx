import React from 'react'
import passion from '../assets/passion.png'
import pause from '../assets/pause.png'
export default function Passion() {
  return (
    <section className='md:px-5 px-5'>
    <div className='max-w-[1320px] relative mx-auto grid py-[100px] grid-cols-1 sm:grid-cols-[40%_60%]'>
        <div>
            <div className='absolute bottom-[10%] sm:text-start text-center left-0 sm:relative md:top-[12%] xs:top-[25%] sm:top-[17%] sm:left-[10%] w-full lg:max-w-[520px] xl:max-w-[600px] xs:h-[20%] sm:h-auto lg:text-[65.63px] text-[16px] xs:text-[20px] sm:text-[28px] md:text-[38px]  py-2 px-4 sm:py-4 sm:px-6 lg:py-16 lg:ps-9 lg:pe-16 border-[4px] border-[#1E6DA4] border-l-[12px] lg:leading-[80px] xs:translate-x-20 z-[1] bg-white text-nowrap'>
                <h3 className='text-[#767676]  md:text-[40px] lg:text-[52px] font-semibold'>PASSION FOR</h3>
                <h3 className='text-[#1E6DA4]   md:text-[40px] lg:text-[55px] font-bold'>PERFECTION</h3>
            </div>
        </div>
            <div className='relative w-full h-full '>
                <img src={passion} className='w-full h-full rounded-xl' alt="" />
                <img className='absolute  left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] z-[9999]  animate-pulse lg:w-auto w-[20%]' src={pause} alt="" />
            </div>
    </div>
    </section>
  )
}
