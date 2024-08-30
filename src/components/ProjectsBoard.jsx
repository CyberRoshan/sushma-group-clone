import React from 'react'
import Marquee from "react-fast-marquee";
import pizzaHut from "../assets/pizzaHut.png"
import reliance from "../assets/reliance.png"
import pitaPit from "../assets/pitaPit.png"
import sagar from "../assets/sagar.png"
import skechers from "../assets/skechers.png"
import piterEngland from "../assets/peter_england.png"
export default function ProjectsBoard() {
  return (
    <section className='max-w-[1320px] mx-auto py-[100px]'>
        <div className='text-center'>
        <h3 className='text-primary-color lg:text-[40px] text-[22px] sm:text-[32px] md:text-[37px] font-bold uppercase'>SUSHMA PROJECTS BRANDS ON BOARD</h3>
        <p className='lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-[#5A5454]'>Within the premises of the Sushma Township are reputed Schools.</p>
        </div>
        <Marquee>
            <div className='flex gap-10 my-[50px]'>
                <img src={pizzaHut} alt="Pizzahut" />
                <img src={reliance} alt="reliance" />
                <img src={pitaPit} alt="reliance" />
                <img src={sagar} alt="reliance" />
                <img src={skechers} alt="reliance" />
                <img src={piterEngland} alt="reliance" />
                <img src={pizzaHut} alt="Pizzahut" />
                <img src={reliance} alt="reliance" />
                <img src={pitaPit} alt="reliance" />
                <img src={sagar} alt="reliance" />
                <img src={skechers} alt="reliance" />
                <img src={piterEngland} alt="reliance" />
            </div>
        </Marquee>
    </section>
  )
}
