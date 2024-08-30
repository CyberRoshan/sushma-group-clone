import React from 'react'
export default function AboutWork() {
  return (
    <section className='max-w-[1320px] mx-auto py-[80px] bg-white'>
        <h3 className='lg:text-[25px] text-center max-w-[1000px] mx-auto  mt-3 px-2 md:mt-0 text-[13px] xs:text-[14px] text-[#6F6E6E] font-semibold uppercase'>We blend creativity with intelligence to craft homes
        that enhance your living experience and deliver on our promises.</h3>
        <div className='grid sm:grid-cols-2 gap-5 lg:mt-10 mt-3 mx-3 xl:mx-0'>
            <div className='rounded-[13px]  border sm:h-[372px] h-[250px] grid place-items-center text-white group bg-cover ' style={{ backgroundImage: "url('/src/assets/aboutwork_1.png')" }} >
                <div className='bg-[rgba(30,108,164,0.8)] lg:h-28 h-16 lg:group-hover:h-[50%] group-hover:h-[56%] py-2 w-full text-center overflow-hidden duration-700 group-hover:overflow-visible'>
                    <h4 className='lg:text-[33px] md:text-[28px] text-[18px] uppercase'>The Art of CUSTOMER <br /> <span className='font-semibold'> CENTRIC DESIGN</span></h4>
                    <p className='lg:text-[16px] text-[13px]'>Constant consumer interactions and extensive research enables us to understand the pulse of our audience, and curate our homes accordingly.</p>
                </div>
            </div>
            <div className='rounded-[13px]  border sm:h-[372px] h-[250px] grid place-items-center text-white group bg-cover ' style={{ backgroundImage: "url('/src/assets/aboutwork_2.png')" }}>
                <div className='bg-[rgba(30,108,164,0.8)] lg:h-28 h-16 lg:group-hover:h-[50%] group-hover:h-[56%] py-2 w-full text-center overflow-hidden duration-700 group-hover:overflow-visible'>
                    <h4 className='lg:text-[33px] md:text-[28px] text-[18px] uppercase'>The Science of <br /> <span className='font-semibold'> CONSTRUCTION TECHNOLOGY</span></h4>
                    <p className='lg:text-[16px] text-[13px]'>Quality and timeline deliverables are sacrosanct to us. This is why we have robust, indigenous construction processes to keep our promises.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
