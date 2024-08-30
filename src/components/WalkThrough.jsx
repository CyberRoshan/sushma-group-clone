import React from 'react'
import walkThrough from "../assets/walkthrough.png"
import luxury from '../assets/luxury.png'
import playBtn from '../assets/playBtn.png'
export default function WalkThrough() {
  return (
    <section className='w-full lg:h-[521px] h-[250px] sm:h-[300px] md:h-[350px]  bg-center' style={{background:`url("${walkThrough}")`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div className='grid grid-cols-[50%_40%] items-center md:justify-normal justify-between  '>
        <div className='text-white lg:py-[80px] md:py-[50px] py-[30px] md:px-[40px] sm:px-[30px] px-[20px] lg:px-[60px] h-full' style={{background:"linear-gradient(90.93deg, rgba(30, 109, 164, 0.8) 43.48%, rgba(11, 41, 62, 0) 91.86%)"}}>
          <h3 className='xl:text-[63px] text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-bold uppercase'>Project <br />
          Walk-through</h3>
          <div className=' border border-white lg:w-[456px] w-[200px] sm:w-[250px] md:w-[300px]  py-2 md:py-4 flex justify-evenly items-center mt-3 md:mt-6 '>
            <div className='flex items-center flex-col'>
              <img className='lg:w-auto w-[50%]' src={luxury} alt="" />
              <p className='lg:text-[20px] text-[10px] md:text-[14px] font-semibold pt-2 text-center lg:leading-[23px] uppercase'>luxury <br /> property</p>
            </div>
            <div className='flex items-center flex-col'>
              <img className='lg:w-auto w-[50%]' src={luxury} alt="" />
              <p className='lg:text-[20px] text-[10px] md:text-[14px] font-semibold pt-2 text-center lg:leading-[23px] uppercase'>luxury <br /> property</p>
            </div>
            <div className='flex items-center flex-col'>
              <img className='lg:w-auto w-[50%]' src={luxury} alt="" />
              <p className='lg:text-[20px] text-[10px] md:text-[14px] font-semibold pt-2 text-center lg:leading-[23px] uppercase'>luxury <br /> property</p>
            </div>
          </div>
        </div>
        <div className=' flex justify-center'>
          <img className='animate-pulse lg:w-auto w-[50%]' src={playBtn} alt="" />
        </div>
      </div>
    </section>
  )
}
