import React, { useEffect, useState } from 'react'

import logo from "../assets/logo.png"
import Sidebar from './sidebar/Sidebar'

export default function Header() {
  
  let [sidbarStatus,setSidebarStatus]=useState(false)
  const [scroll,setScroll]=useState(false)

  window.onmousemove = ()=>{
    setScroll(true)
    setTimeout(() => {
      setScroll(false)
    }, 1000);
  };
  window.onscroll=()=>{
            const topScroll=window.scrollY
            // console.log(topScroll);
              if(topScroll>=200){
                setScroll(true)
              }
              else{
                setScroll(false)
              } 
              setTimeout(() => {
                setScroll(false)
              }, 1000);
          }
  return (
    <>
    <header className={`w-full fixed  top-0 z-[99999] duration-500  ${scroll ? "bg-theme-black-color py-2 " : "bg-transparent py-8"} p-2`}>
        <div className='max-w-[1320px] bg-transparent mx-auto flex justify-between'>
        <img src={logo} className='md:w-auto w-[50%]' alt="Logo" />
        <nav className='flex items-center gap-4'>
            <button className='bg-white md:block hidden text-primary-color uppercase text-[12px] py-0.5 px-3 font-semibold rounded-full'>call now</button>   
            <button className='' onClick={()=>setSidebarStatus(!sidbarStatus)} >
            <svg  className='md:w-[34px] w-[25px] h-[20px] md:h-[22px]' viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 22H33.5V18.3333H0.5V22ZM0.5 12.8333H33.5V9.16667H0.5V12.8333ZM0.5 0V3.66667H33.5V0H0.5Z" fill="white"></path></svg>
            </button>
        </nav>
        </div>
    </header>
    {sidbarStatus ? <Sidebar sidbarStatus={sidbarStatus} setSidebarStatus={setSidebarStatus} /> : ""}
    </>
  )
}

