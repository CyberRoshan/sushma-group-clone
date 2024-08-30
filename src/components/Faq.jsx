import React, { useState } from 'react'
import faqImg from "../assets/faqImg.png"

export default function Faq() {

    const faqData=[
        {
            id:1,
            heading:"What are the ongoing residential Projects by Sushma Group ?",
            para:"Sushma Belleza , Sushma Joynest Moh, Sushma Valencia ,Sushma Crescent , Sushma Grande NXT & Sushma Grande are the Ongoing Residential Projects in Zirakpur By Sushma Group"
        },
        {
            id:2,
            heading:"What are the ongoing Commercial Projects by Sushma Group ?",
            para:"Sushma Pristine , Sushma Empiria, Sushma Metropol ,Sushma Capital & Sushma Infinium are Commercial Projects by Sushma Group"
        },
        {
            id:3,
            heading:"What is Sushma Pristine ?",
            para:"Sushma Pristine is First Organized Commercial Project Offering 12% Assured Returns & Lease Guarantee on Airport Road ,Mohali .Sushma Pristine is one of the most Aspirational and Biggest project on International Airport Road ,Zirakpur by Award Winning Developer Sushma Group – Sushma Build tech ."
        },
        {
            id:4,
            heading:"What is Sushma Service Partner ?",
            para:"Since Sushma Group Doesn't Sell its Properties Directly Thats why Sushma Group as appointed Sushma Service Partner to sell its Properties. For Better Deals Price & Latest Offers You can Contact +91-9988010405"
        },
    ]

    // let [faq,setFaq]=useState(faqData)
    const [faq,setFaq]=useState(faqData)
    let [faqCurrentID,setFaqCurrentID]=useState(faqData[0].id)

  return (
    <section className='md:px-5 px-5'>
    <div className='max-w-[1320px] mx-auto py-[100px]'>
         <div className="text-center">
        <h3 className="text-primary-color lg:text-[40px] text-[22px] sm:text-[32px] md:text-[37px] font-bold uppercase">
        FAQ’s
        </h3>
        <p className="lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-[#5A5454]">
          Within the premises of the Sushma Township are reputed Schools.
        </p>
        </div>
        <div className='grid md:grid-cols-[60%_34%] grid-cols-1     gap-8 sm:gap-10 md:gap-12 py-[50px]'>
            <div>
                <div className='space-y-10'>
                {faq.map((item,index)=>{
                    return (
                        <div key={index} className={` relative ${faqCurrentID==item.id ? "bg-[#1E6DA4] text-white" : "border text-primary-color border-[#1E6DA4]"}   cursor-pointer flex-col  rounded-[4px] px-3 md:px-6 flex mb-2   `}>
                        <div className='w-[100%] '>
                        <h4 onClick={()=>setFaqCurrentID(item.id==faqCurrentID ? 0 : item.id)} className='relative sm:text-[15.96px] py-4  text-[12px] xs:text-[13px] font-semibold tracking-wide'>{index+1}. {item.heading} 
                            <svg class={` duration-700 border-2  rounded-full ${faqCurrentID==item.id ? "rotate-90 top-[40%] w-12 h-12" : "top-2 w-10 h-10"} absolute right-0  `} viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_1_2" maskUnits="userSpaceOnUse" x="0" y="0" width="52" height="51" ><path d="M38.3601 3.47328C43.7799 6.58858 47.8623 11.5767 49.8321 17.4906C51.8018 23.4046 51.5218 29.8327 49.0453 35.5547C46.5687 41.2767 42.068 45.8943 36.3976 48.5308C30.7272 51.1673 24.2817 51.6394 18.2848 49.8571C12.288 48.0749 7.15711 44.1627 3.8663 38.863C0.575487 33.5633 -0.646184 27.2451 0.433195 21.1079C1.51258 14.9707 4.81787 9.44162 9.72162 5.57036C14.6254 1.69911 20.7861 -0.244856 27.0345 0.107495L25.5902 25.4932L38.3601 3.47328Z" fill="#D9D9D9"></path></mask><g mask="url(#mask0_1_2)"><path d="M25.5902 48.7436C38.4884 48.7436 48.9444 38.334 48.9444 25.4932C48.9444 12.6523 38.4884 2.24268 25.5902 2.24268C12.6921 2.24268 2.23607 12.6523 2.23607 25.4932C2.23607 38.334 12.6921 48.7436 25.5902 48.7436Z" stroke="" stroke-width="0.75996"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M29.0381 31.5506C29.2621 31.5506 29.4437 31.3699 29.4437 31.1469C29.4437 30.9587 29.5458 30.6627 29.7635 30.2809C29.9726 29.9138 30.2576 29.5201 30.5518 29.1525C31.2998 28.2175 32.19 27.4047 33.2056 26.7859C33.5912 26.5509 34.0103 26.3257 34.4204 26.1601C34.835 25.9928 35.2145 25.897 35.5282 25.897V25.0894C35.2145 25.0894 34.8352 24.9937 34.4207 24.8263C34.0107 24.6608 33.5916 24.4355 33.2054 24.2005C32.1899 23.5825 31.3 22.77 30.5522 21.8336C30.2579 21.4663 29.9725 21.0727 29.7634 20.7059C29.5459 20.3246 29.4437 20.0286 29.4437 19.8396C29.4437 19.6166 29.2621 19.4357 29.0381 19.4357C28.814 19.4357 28.6324 19.6166 28.6324 19.8396C28.6324 20.2499 28.8276 20.701 29.0579 21.1047C29.2964 21.5228 29.6098 21.9526 29.9172 22.3363C30.7173 23.3383 31.677 24.2169 32.7822 24.8896C32.8923 24.9566 33.0061 25.0236 33.1228 25.0894H16.0578C15.8338 25.0894 15.6523 25.2702 15.6523 25.4932C15.6523 25.7162 15.8338 25.897 16.0578 25.897H33.1225C33.0059 25.9629 32.8921 26.0299 32.7821 26.0969C31.677 26.7703 30.7174 27.649 29.9174 28.6492C29.6098 29.0333 29.2964 29.4639 29.0579 29.8823C28.8276 30.2862 28.6324 30.7373 28.6324 31.1469C28.6324 31.3699 28.814 31.5506 29.0381 31.5506Z" fill="#F2FAFF"></path></svg>
                        </h4>
                        <p  className={` ${faqCurrentID==item.id ? "p-3" : "hidden"}  sm:text-[14px] text-[10px] xs:text-[12px] font-normal text-wrap pe-6 pt-4 pb-3 block`}>{item.para}</p>
                        </div>
                    </div>
                    )
                })}
                   
                </div>
            </div>
            <div className=' w-full h-full '>
                <img className='h-full w-full object-cover md:block hidden ' src={faqImg} alt="" />
            </div>
        </div>
    <ScheduleVisit/>

    </div>
    </section>
  )
}


function ScheduleVisit() {
    return (
      <div className='bg-[#1E6DA4] max-w-[1320px] mx-auto rounded-2xl md:py-8 py-4 items-center md:px-10 px-5 flex  justify-between my-[100px]'>
          <h3 className='lg:text-[36px] text-[12px] xs:text-[20px] sm:text-[24px] md:text-[28px] font-medium lg:leading-[49px] text-white'>SCHEDULE YOUR SITE VISIT</h3>
          <button className='rounded-full uppercase bg-white sm:px-6 px-2 py-2 lg:text-[16px] text-[8px] xs:text-[10px] font-semibold sm:text-[12px] md:text-[14px] text-[#1E6DA4]'>connect with us</button>
      </div>
    )
  }
  
