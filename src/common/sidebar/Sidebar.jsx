import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar({sidbarStatus,setSidebarStatus}) {
    let [dropDown,setDropDown]=useState(false)
  return (
    <section className={`bg-primary-color ${sidbarStatus ? "block transition duration-500  w-screen" : "duration-700  w-[0vw] transition hidden "}    right-0 fixed z-[99999]  h-screen`}>
        <div className='grid sm:grid-cols-2 grid-cols-1 '>
            <div className='bg-primary-color sm:block hidden w-full h-screen relative border '>
                <img className='w-[60%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/image_1%202-mvcGa-Xf.png" alt="" />
            </div>
            <div className='bg-white relative h-screen w-full  px-5'>
                <button className='absolute right-2 top-1' onClick={()=>setSidebarStatus(false)}>
                <svg className='md:w-[40px] w-[30px] h-[30px] md:h-[40px]' stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path></svg>
                </button>
                <ul className='h-full overflow-y-hidden md:mt-8 lg:text-[30px] text-[15px] text-[#1E6DA4] font-medium uppercase lg:px-16 px-3 py-3'>
                {/* <Link to={"/about"}> */}
                    <li className='text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] pb-3 pt-3 me-9 hover:duration-500 cursor-pointer border-b border-b-[#D4D4D4]'>About us</li>
                    {/* </Link> */}
                    <li className='text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] pb-3 pt-3 me-9 hover:duration-500 cursor-pointer border-b border-b-[#D4D4D4]'>why sushma group</li>
                    <li onClick={()=>setDropDown(!dropDown)} className=' duration-500 text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] pb-3 pt-3 me-9 hover:duration-500 cursor-pointer border-b flex items-center gap-3 border-b-[#D4D4D4]'>our projects 
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14.7601" cy="14.6434" r="13.8641" fill="#1E6DA4"></circle><path d="M21.2905 10.3506L22.5662 11.6276L15.6134 18.5827C15.502 18.6949 15.3695 18.7838 15.2236 18.8446C15.0777 18.9053 14.9212 18.9365 14.7631 18.9365C14.6051 18.9365 14.4486 18.9053 14.3027 18.8446C14.1567 18.7838 14.0243 18.6949 13.9128 18.5827L6.95645 11.6276L8.23219 10.3518L14.7613 16.8798L21.2905 10.3506Z" fill="white"></path></svg>
                    </li>
                    <div>
                    {dropDown ? <OurProjects dropDown={dropDown} setDropDown={setDropDown} /> : ""}
                    </div>
                    <li className='text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] pb-3 pt-3 me-9 hover:duration-500 cursor-pointer border-b border-b-[#D4D4D4]'>our stories</li>
                    <li className='text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] pb-3 pt-3 me-9 hover:duration-500 cursor-pointer border-b border-b-[#D4D4D4]'>media</li>
                    <li className='text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] pb-3 pt-3 me-9 hover:duration-500 cursor-pointer border-b border-b-[#D4D4D4]'>sushma service partner</li>
                    <li className='text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] pb-3 pt-3 me-9 hover:duration-500 cursor-pointer border-b border-b-[#D4D4D4]'>faq</li>
                    <li className='text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] pb-3 pt-3 me-9 hover:duration-500 cursor-pointer border-b border-b-[#D4D4D4]'>contact us</li>
                    <li className='flex items-center'>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3592 7.2219C17.3742 7.2219 18.6601 8.50788 18.6601 11.5228H21.5274C21.5274 6.89933 18.9827 4.35461 14.3592 4.35461V7.2219ZM19.2651 15.0252C18.9897 14.7749 18.6277 14.6413 18.2556 14.6528C17.8835 14.6643 17.5304 14.82 17.2709 15.0869L13.8402 18.6151C13.0144 18.4574 11.3543 17.9398 9.64537 16.2352C7.93647 14.5249 7.41892 12.8604 7.26552 12.0404L10.7909 8.60823C11.0581 8.34893 11.214 7.99581 11.2255 7.62362C11.237 7.25142 11.1032 6.88935 10.8525 6.61403L5.55518 0.78913C5.30436 0.512948 4.95574 0.345423 4.58339 0.322134C4.21103 0.298845 3.84427 0.421627 3.56098 0.664403L0.44997 3.33242C0.202108 3.58118 0.054168 3.91226 0.0342123 4.26285C0.0127076 4.62127 -0.397315 13.1113 6.18599 19.6975C11.9292 25.4392 19.1232 25.8593 21.1045 25.8593C21.3941 25.8593 21.5719 25.8507 21.6192 25.8478C21.9697 25.8282 22.3006 25.6796 22.5482 25.4306L25.2148 22.3182C25.4577 22.0351 25.5807 21.6684 25.5577 21.2961C25.5347 20.9237 25.3674 20.575 25.0915 20.324L19.2651 15.0252Z" fill="#464646"></path>
                    </svg>
                        <p className='text-[#464646] py-4 ml-3'> +91 1234567890 </p>
                    </li>
                </ul>
                <img className='absolute bottom-4 right-4 w-[25%]' src="https://staging.adiyogitechnology.com/sushmagroup/assets/c3611c24db9ffa2be6bf1b8a5b51cbd2--9KUxnWA.png" alt="" />
            </div>
        </div>
    </section>
  )
}




function OurProjects({dropDown,setDropDown}) {
  return (
    <ul className='h-[126px] sm:h-[145px] md:h-[152px] lg:h-[155px] duration-300 mt-5 overflow-hidden ml-9'>
        <li className='mb-3 text-[14px] sm:text-[17px] md:text-[18px] lg:text-[19px] text-[#5C5C5C] font-semibold'>Residental</li>
        <li className='mb-3 text-[14px] sm:text-[17px] md:text-[18px] lg:text-[19px] text-[#5C5C5C] font-semibold'>Commercial</li>
        <li className='mb-3 text-[14px] sm:text-[17px] md:text-[18px] lg:text-[19px] text-[#5C5C5C] font-semibold'>New launch</li>
        <li className='mb-3 text-[14px] sm:text-[17px] md:text-[18px] lg:text-[19px] text-[#5C5C5C] font-semibold'>Upcoming project</li>
    </ul>
  )
}

