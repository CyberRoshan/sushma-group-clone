import React from 'react'
import servicePartner from "../assets/service_partner.png"
import nivesh_logo from "../assets/nivesh_logo.png"
export default function ServicePartner() {
  return (
    <section className='md:px-5 px-5'>
    <div className='max-w-[1250px] mx-auto text-center py-[100px]'>
        <div className='flex justify-center gap-4'>
        <svg  className='w-9' stroke="#FBB245" fill="#FBB245" stroke-width="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
        <svg  className='w-9' stroke="#FBB245" fill="#FBB245" stroke-width="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
        <svg  className='w-9' stroke="#FBB245" fill="#FBB245" stroke-width="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
        <svg  className='w-9' stroke="#FBB245" fill="#FBB245" stroke-width="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
        <svg  className='w-9' stroke="#FBB245" fill="#FBB245" stroke-width="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"></path></svg>
        </div>
        <h3 className='text-primary-color lg:text-[40px] text-[22px] sm:text-[32px] md:text-[37px] font-bold uppercase'>SUSHMA SERVICE PARTNER</h3>
        <p className='lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-[#5A5454]'>Within the premises of the Sushma Township are reputed Schools.</p>
        <div className='grid md:grid-cols-[38%_62%] sm:grid-cols-1 lg:rounded-lg rounded-none shadow-md my-[70px]'>
            <div>
                <img className='lg:max-h-[420px] h-full w-full object-cover lg:rounded-s-lg rounded-s-none' src={servicePartner} alt="" />
            </div>
            <div className='bg-[#3E3C3C]  text-start p-6 relative lg:rounded-e-lg rounded-t-none  '>
                <div className='text-white space-y-4 border-b border-dotted py-4'>
                <p className='w-full lg:text-[18px] text-[12px] sm:text-[15px] md:text-[16px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci lectus sed nulla. amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis quisque orci.</p>
                <p className='w-full lg:text-[18px] text-[12px] sm:text-[15px] md:text-[16px] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu rhoncus urna facilisis</p>
                </div>
                <div className='text-white'>
                    <h4 className='lg:text-[26px] text-[24px] font-bold tracking-wide pt-6'>PAWAN KUMAR</h4>
                    <h5 className='lg:text-[19px] text-[17px] font-normal'>FOUNDER REALITY NIVESH</h5>
                </div>
                <div className='w-full lg:rounded-none rounded-md bottom-1.5 left-0 lg:absolute relative bg-white py-2 sm:py-2.5 px-6 mt-12 lg:mt-24 xl:mt-9'>
                    <img src={nivesh_logo} className='w-36 mx-auto' alt="" />
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
