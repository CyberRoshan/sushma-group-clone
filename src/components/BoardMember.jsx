import React, { useEffect, useState } from 'react'
import binderPal from "../assets/binder-pal-mittal.png"
import bharatMittal from "../assets/bharat-Mittal.png"
import prateekMittal from "../assets/prateek-mittal.png"
export default function BoardMember() {
    const BoardMemberData=[
        {
            id:0,
            image: binderPal,
            name:"Mr. Binder Pal Mittal",
            work:"Chairman",
            about:"With more than three decades of experience and coveted knowledge transcending across Steel, Metals and Real Estate industries, Mr. Mittal stands tall above the board as founder and spearheads the group’s multi-faceted portfolio to cater to the needs of an exclusive clientele, by creating striking concepts and era-defining designs to match their customer’s tastes."
        },
        {
            id:1,
            image: bharatMittal,
            name:"Mr. Bharat Mittal",
            work:"Director",
            about:"Mr. Bharat Mittal has a keen eye for the nuances in real estate and its various dynamics. His rich knowledge and experience have taken the SUSHMA group to even greater heights while his futuristic vision and contribution have shaped the organization in a positive way, equipping it to provide innovative project ideas in line with the needs & demands of the growing clientele and deliver projects on time. His Master's degree in Business Administration from the UK has helped him understand the market even better and gain a deft hand at tackling complex issues."
        },
        {
            id:2,
            image: prateekMittal,
            name:"Mr. Prateek Mittal",
            work:"Executive Director",
            about:"Having started his career from being a Business Analyst at Essex LG, in no time he took over the role of the Executive Director of SUSHMA group. Mr. Prateek Mittal has done his degree in B.tech as an Electrical Engineer from IIT Bombay. He believes in re-defining his paths with every new challenge and is a motivation for the workforce at SUSHMA Group. He is looked up to as a mentor for young people who aspire to succeed with commitment and hard work."
        }
    ]

    let [dataState,setDataState]=useState(BoardMemberData)
    let [dataID,setDataID]=useState(0)
    const [dataDetails,setDataDetails]=useState(null)

    useEffect(()=>{
        setDataDetails(dataState[dataID])
        console.log(dataDetails);
        
    })
  return (
    <section className='bg-[#F3F3F3] py-[80px]'>
        <div className='max-w-[1400px] mx-auto grid lg:grid-cols-[25%_42%_15%] grid-cols-1  gap-12 lg:gap-24'>
            <div>
                <h3 className='uppercase lg:text-[40px] text-[25px] text-center xl:text-start text-[#1E6DA4] font-bold lg:leading-[55px]'>MEET OUR board MEMBER</h3>
                <p className='lg:text-[18px] text-[12px] text-center xl:text-start text-[#5A5454] font-semibold lg:leading-[21px] lg:pt-6
'>Within the premises of the Sushma Township are reputed Schools.</p>
            </div>
            {dataDetails!==null ? 
            <div>
                <div className='flex lg:justify-start justify-center items-center gap-4 lg:mb-9 mb-3'>
                    <div className='size-[113.34px] rounded-full bg-[#1E6DA4]'>
                        <img src={dataDetails.image} className='rounded-full relative top-1.5 left-0' alt="" />
                    </div>
                    <div>
                        <h4 className='text-[18px] text-[#1F5B87] font-[800]'>{dataDetails.name}</h4>
                        <span className='text-[15.66px] text-[#686868] font-[600] uppercase'>{dataDetails.work}</span>
                    </div>
                </div>
                <div className='bg-[#1E6DA4] md:w-full w-[80%] xs:w-[100%] mx-auto rounded-[9px] lg:px-12 px-5 lg:py-9 py-5 sm:py-5 sm:px-6 font-normal text-[12px] sm:text-[13px] md:text-[15px] lg:text-[17px] text-white mt-5 lg:mt-0'>
                {dataDetails.about}
                </div>
            </div>
            :
            ""
}

            <div className='w-full lg:space-y-4 lg:block flex justify-center lg:gap-0 gap-[50px] lg:justify-between xs:justify-evenly'>
            {dataState.map((items,index)=>{
                return (
                    <figure key={index} className='lg:size-[132px] cursor-pointer size-[100px] rounded-full grid place-items-center border-[3px] border-[#1E6DA4]'>
                    <img src={items.image} onClick={()=>setDataID(items.id)} className='rounded-full w-full' alt="" />
                </figure>     
                )
            })}
            </div>
        </div>
    </section>
  )
}
