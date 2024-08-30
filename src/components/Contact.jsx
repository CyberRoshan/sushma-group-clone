import React from 'react'
import contactBg from "../assets/contactBg.png"
import brouchure from "../assets/brouchure.png"
export default function ContactUs() {
  return (
    <>
    <section className='w-full py-[80px] '>
        <div className='w-full h-[320px]' style={{background:`url("${contactBg}") center center`,backgroundSize:"100%",backgroundRepeat:"no-repeat"}} >
            <div className='bg-[rgba(0,0,0,0.49)] w-full h-full grid place-items-center'>
                <div className='text-center text-white'>
                    <h4 className='lg:text-[40px] text-[22px] sm:text-[32px] md:text-[37px] font-bold uppercase'>contact us
                    </h4>
                    <p className='lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-white'>Within the premises of the Sushma Township are reputed Schools.</p>
                </div>

                </div>
                <div className='max-w-[1300px] mt-6 mx-auto -translate-y-[100px] lg:px-12'>
                <div className='bg-[#1E6DA4] p-10 w-full flex flex-col lg:justify-between items-center lg:py-16 py-4'>
                    <form className='w-full md:w-auto grid sm:grid-cols-2 grid-cols-1 grid-flow-row md:flex px-2 justify-center md:justify-normal items-end gap-y-4 md:gap-y-0 gap-x-3 md:gap-x-4 xl:gap-x-10 text-center mx-auto space-y-5 lg:space-y-2'>
                          <div class="relative z-0">
                              <input type="text"  className="block py-2.5 px-0 w-full text-[18px] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
                              <label for="floating_standard" class="absolute w-full left-0 text-start text-[16px] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Name</label>
                          </div>
                          <div class="relative z-0">
                              <input type="email"  className="block py-2.5 px-0 w-full text-[18px] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
                              <label for="floating_standard" class="absolute w-full left-0 text-start text-[16px] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                          </div>
                          <div class="relative z-0">
                              <input type="tel"  className="block py-2.5 px-0 w-full text-[18px] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
                              <label for="floating_standard" class="absolute w-full left-0 text-start text-[16px] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Mobile</label>
                          </div>
                          <div class="relative z-0">
                              <input type="text"  className="block py-2.5 px-0 w-full text-[18px] text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " />
                              <label for="floating_standard" class="absolute w-full left-0 text-start text-[16px] text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Message</label>
                          </div>

                          <button className=' md:static sm:relative left-[50%] rounded-full lg:ms-2 mx-auto my-3 bg-white px-10 py-2 lg:text-[17.17px] font-medium md:text-[15px] sm:text-[14px] text-[13px]  text-[#076280] shadow-sm hover:bg-[#1E6DA4] border border-[#1E6DA4] hover:border-white hover:text-white uppercase'>submit</button>
                    </form>
                </div>
                <div className='bg-[#F4F4F4] p-10  w-full flex flex-wrap justify-center gap-6 lg:justify-between items-center py-5'>
                    <div className='uppercase font-semibold lg:basis-auto  md:text-[32px] text-[30px] text-center basis-[100%] text-[#464646] '>get in touch</div>
                    <div className='flex items-center basis-[100%] sm:basis-[45%] justify-center lg:basis-auto gap-2'>
                    <p class="size-[25px] xs:size-[35px]  xl:size-[44px]  bg-[#1E6DA4] grid place-items-center rounded-full lg:text-[25px] text-[18px] text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.37,166.46Z"></path></svg></p>
                    <ul>
                        <li className='md:text-[20px] text-[16px] text-[#464646]  font-semibold'>+91 1234567890</li>
                        <li className='md:text-[20px] text-[16px] text-[#464646]  font-semibold'>+91 1234567890</li>
                    </ul>
                    </div>
                    <div className='flex basis-[100%] sm:basis-[45%] justify-center lg:basis-auto items-center gap-2'>
                    <p class="size-[25px] xs:size-[35px]  xl:size-[44px]  bg-[#1E6DA4] grid place-items-center rounded-full lg:text-[25px] text-[18px] text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path></svg></p>
                    <ul>
                        <li className='md:text-[20px] text-[16px] text-[#464646]  font-medium'>Needhelp@gmail.com</li>
                    </ul>
                    </div>
                    <div className='flex basis-[100%] justify-center lg:basis-auto items-center gap-2'>
                    <p class="size-[25px] xs:size-[35px]  xl:size-[44px]  bg-[#1E6DA4] grid place-items-center rounded-full lg:text-[25px] text-[18px] text-white"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></p>
                    <ul>
                        <li className='md:text-[20px] text-[16px] text-[#464646]  font-medium'>PR-7 Airport Road, <br /> Zirakpur, Punjab</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
        <Presentation/>
        </>
  )
}


function Presentation() {
  return (
    <section className='md:px-5 px-5'>
    <div className='max-w-[1250px] pt-[600px] sm:pt-[400px] md:pt-[300px] lg:pt-[250px] pb-[100px] mx-auto grid grid-cols-1 md:grid-cols-2 space-y-10 items-center'>
        <div className='order2 md:order-1'>
            <h3 className='text-center  sm:text-left lg:text-[50px] xl:text-[67px] text-[28px] md:text-[40px] text-[#1E6DA4] font-bold uppercase lg:leading-[81px]'>Presentation of <br />
            the sushma group</h3>
            <button className='flex mx-auto text-[#1E6DA4] md:mx-0 lg:text-[31px] text-[18px] capitalize  sm:flex justify-center items-center border-[1.73px] border-[#1E6DA4] rounded-[5.19px] px-7 lg:px-16 lg:py-4 py-1 gap-2 shadow-[6px_6px_#1E6DA4] hover:shadow-none duration-700 lg:mt-9 my-3 hover:bg-[#1E6DA4] hover:text-white font-[600]'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-[40px] lg:w-[40px] w-[30px]"  xmlns="http://www.w3.org/2000/svg"><path d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg> brochure</button>
        </div>
        <div className='flex md:order-2 order-1 items-center justify-end'>
            <img src={brouchure} alt="" />
        </div>
    </div>
    </section>
  )
}
