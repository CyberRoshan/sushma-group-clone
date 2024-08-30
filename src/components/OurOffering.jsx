import React from "react";
import residential1 from "../assets/residential1.png";
import elementa from "../assets/elementa.png";
import rotateMark from "../assets/rotateMark.png";
import slider1Img from "../assets/slider1Img.png";
import sliderImg2 from "../assets/sliderImg2.png";
import sliderImg3 from "../assets/sliderImg3.png";
import sliderImg4 from "../assets/sliderImg4.png";
import elementaLogo from "../assets/elementaLogo.png";
import 'swiper/css';
import Slider from "react-slick";

export default function OurOffering() {
  return (
    <section className="w-full py-[80px]">
      <div className="text-center">
        <h3 className="text-primary-color lg:text-[40px] text-[22px] sm:text-[32px] md:text-[37px] font-bold uppercase">
          Our Offering
        </h3>
        <p className="lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-[#5A5454]">
          Within the premises of the Sushma Township are reputed Schools.
        </p>
        </div>
        <div className="mt-[50px]">
          <div className="lg:border border-y-[#9BB0B5] border-s-0 border-e-0 flex justify-around items-center py-1 mb-4 lg:gap-x-10">
            <h5 className="text-[#8F9495] duration-500 group relative lg:text-[22px] font-bold xs:text-[15px] text-[12px]">
              RESIDENTIAL
              <MenuBar />
            </h5>
            <h5 className="text-[#8F9495] duration-500 group relative lg:text-[22px] font-bold xs:text-[15px] text-[12px]">
              COMMERCIAL
              <MenuBar />
            </h5>
            <button className="bg-[#1E6DA4] xs:block hidden uppercase md:text-[16px] sm:text-[14px] text-[12px] text-white rounded-[22.83px] sm:px-3 px-2 xs:px-5 md:px-7 py-2">
              see all projects
            </button>
          </div>
          <SlidePage/>
        </div>
    </section>
  );
}

function MenuBar() {
  return (
    <div className="bg-white z-40 shadow-lg py-5 px-8 w-[180px] top-8  left-0 text-center hidden group-hover:block absolute">
      <ul className="text-[18px] font-normal space-y-1">
        <li>New Launch</li>
        <li>New Launch</li>
        <li>New Launch</li>
        <li>New Launch</li>
      </ul>
    </div>
  );
}


function SlidePage() {
  return (
    <>
    <div className="grid shadow-lg grid-cols-1 md:grid-cols-[65%_35%]">
            <div className="relative md:block hidden">
              <img className="w-full h-full" src={residential1} alt="" />
              <img  className="absolute right-5 top-5 animate-spin-slow" src={rotateMark} alt="" />
            </div>
            <div className="grid grid-cols-[70%_30%] sm:grid-cols-[80%_20%]">
              <div className=" p-10">
                <img src={elementa} alt="" />
                <p class="bg-white mt-7 text-[22px] xs:text-[25px] md:text-[30px]  text-start text-[#4E4A4A] font-bold uppercase">
                  SUSHMA orchards
                </p>
                <div class=" flex flex-col pr-2">
                  <div class="md:px-0 mt-2 mb-2">
                    <div class="flex justify-start items-center  gap-2  relative">
                      <p class="text-[15px] xs:text-[17px] text-[#1E6DA4] font-semibold uppercase">
                        rera number
                      </p>
                    </div>
                    <p class="w-full relative text-[17px] xs:text-[19px] text-start text-[#464646] leading-[25px] font-semibold pt-[4px] pb-3">
                      PBRERA-SAS80-PR0396
                      <span class="absolute w-[100%] h-[2px] bottom-0 left-0  bg-[#d6d4d491]"></span>
                    </p>
                  </div>
                  <div class="md:px-0 mt-2 mb-2">
                    <div class="flex justify-start items-center  gap-2  relative">
                      <p class="text-[15px] xs:text-[17px] text-[#1E6DA4] font-semibold uppercase">
                        Offerings
                      </p>
                    </div>
                    <p class="relative text-[17px] xs:text-[19px] text-start text-[#464646] leading-[25px] font-semibold pt-[4px] pb-3">
                      3BHK | 3BHK+S{" "}
                      <span class="absolute w-[100%] h-[2px] bottom-0 left-0  bg-[#d6d4d491]"></span>
                    </p>
                  </div>
                  <div class="md:px-0 mt-2 mb-2">
                    <div class="flex justify-start items-center  gap-2  relative">
                      <p class="text-[15px] xs:text-[17px] text-[#1E6DA4] font-semibold uppercase">
                        configuration
                      </p>
                    </div>
                    <p class="relative text-[17px] xs:text-[19px] text-start text-[#464646] leading-[25px] font-semibold pt-[4px] pb-3">
                      Low Rise s+4{" "}
                      <span class="absolute w-[100%] h-[2px] bottom-0 left-0  bg-[#d6d4d491]"></span>
                    </p>
                  </div>
                  <div class="md:px-0 mt-2 mb-2">
                    <div class="flex justify-start items-center  gap-2  relative">
                      <p class="text-[15px] xs:text-[17px] text-[#1E6DA4] font-semibold uppercase">
                        Size Available
                      </p>
                    </div>
                    <p class="relative text-[17px] xs:text-[19px] text-start text-[#464646] leading-[25px] font-semibold pt-[4px] pb-3">
                      1785 Sq ft | 2165 Sq ft{" "}
                    </p>
                  </div>
                </div>
                <div class="flex  md:justify-start items-center mt-2  text-center  ">
                  <div class=" h-[70px] relative mr-3 xs:mr-10 flex gap-3 xs:gap-10">
                    <div class="relative group size-[40px] sm:size-[54.54px] flex justify-center items-center text-[#1E6DA4] rounded-full border-[1.58px] border-[#1E6DA4]  cursor-pointer hover:bg-[#1E6DA4]">
                      <svg
                        
                        class="duration-500 sm:w-7 sm:h-7 h-5 w-5  fill-[#1E6DA4] group-hover:fill-[#fff]"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.54926 2.33134H7.26243L8.78135 6.12917L6.34079 7.75621C6.19707 7.8521 6.07924 7.98198 5.99775 8.13433C5.91627 8.28668 5.87365 8.45679 5.87367 8.62956V8.65266C5.8743 8.6996 5.8764 8.74651 5.87997 8.79332C5.88627 8.87939 5.89677 8.99591 5.91671 9.13972C5.95765 9.42314 6.03638 9.81363 6.18963 10.2734C6.49825 11.1971 7.10288 12.3927 8.28064 13.5705C9.45841 14.7483 10.654 15.3529 11.5767 15.6615C12.0375 15.8148 12.427 15.8925 12.7125 15.9345C12.8737 15.957 13.0359 15.971 13.1985 15.9764L13.2122 15.9775H13.2205C13.4154 15.9774 13.6075 15.923 13.7732 15.8205C13.939 15.718 14.0729 15.5713 14.16 15.397L14.8633 13.9904L19.5198 14.7672V19.3019C17.3039 19.6221 11.3185 19.938 6.61581 15.2353C1.91314 10.5327 2.22805 4.54622 2.54926 2.33134ZM8.04971 9.13972L9.94652 7.87588C10.3472 7.60859 10.6439 7.21164 10.7866 6.75161C10.9294 6.29157 10.9096 5.79643 10.7307 5.34924L9.21173 1.55141C9.05586 1.16187 8.78685 0.827971 8.4394 0.592782C8.09195 0.357593 7.682 0.231905 7.26243 0.231934H2.49468C1.5405 0.231934 0.643001 0.894297 0.486595 1.9293C0.129696 4.28274 -0.354217 11.2339 5.13153 16.7196C10.6173 22.2054 17.5684 21.7204 19.9219 21.3646C20.9569 21.2071 21.6192 20.3107 21.6192 19.3565V14.7672C21.6193 14.2702 21.4431 13.7893 21.1219 13.4101C20.8007 13.0309 20.3554 12.7779 19.8652 12.6961L15.2087 11.9204C14.7658 11.8465 14.3109 11.9165 13.9108 12.1201C13.5106 12.3238 13.1863 12.6504 12.9854 13.052L12.6222 13.7794C12.4938 13.7478 12.3667 13.711 12.2412 13.6692C11.5904 13.453 10.6866 13.0079 9.76493 12.0862C8.84329 11.1646 8.39821 10.2608 8.18197 9.60894C8.13034 9.45485 8.08549 9.29824 8.04971 9.13972Z"></path>
                      </svg>
                      <div class="uppercase font-semibold text-[10px] tracking-wide text-[#464646] duration-500 hidden group-hover:inline absolute top-[120%] left-[50%] translate-x-[-50%] whitespace-nowrap">
                        Call Us
                      </div>
                    </div>
                    <div class="relative group size-[40px] sm:size-[54.54px] flex justify-center items-center text-[#1E6DA4] rounded-full border-[1.58px] border-[#1E6DA4]  cursor-pointer hover:bg-[#1E6DA4]">
                      <svg
                        
                        class="duration-500 fill-[#1E6DA4] sm:w-7 sm:h-7 h-5 w-5 group-hover:fill-[#fff]"
                        viewBox="0 0 23 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.7916 8.49938L1.14771 2.77712C0.985174 2.52109 0.894707 2.22596 0.885839 1.92282C0.876971 1.61969 0.950029 1.31977 1.09732 1.05468C1.2446 0.789581 1.46067 0.56912 1.72274 0.41652C1.98482 0.263921 2.2832 0.184835 2.58645 0.187593L20.9042 0.371262C21.1817 0.374434 21.4521 0.458853 21.6821 0.614083C21.9121 0.769313 22.0916 0.988548 22.1984 1.24468C22.3051 1.50082 22.3345 1.78262 22.2828 2.05525C22.2311 2.32789 22.1006 2.5794 21.9075 2.77869L9.14093 15.9175C8.92915 16.1346 8.6628 16.2905 8.36988 16.369C8.07697 16.4474 7.76833 16.4455 7.47642 16.3634C7.18452 16.2812 6.92014 16.122 6.71109 15.9023C6.50205 15.6826 6.35606 15.4107 6.2885 15.1151L4.7916 8.49938ZM2.93511 2.07573L6.04218 6.95736L11.6897 4.60363C11.9203 4.5075 12.1797 4.50693 12.4108 4.60206C12.6419 4.69718 12.8257 4.88022 12.9219 5.11088C13.018 5.34155 13.0186 5.60096 12.9235 5.83205C12.8283 6.06313 12.6453 6.24697 12.4146 6.3431L6.76715 8.69683L8.04662 14.3402L19.7974 2.24533L2.93511 2.07573Z"></path>
                      </svg>
                      <div class="uppercase font-semibold text-[10px] tracking-wide text-[#464646] duration-500 hidden group-hover:inline absolute top-[120%] left-[50%] translate-x-[-50%] whitespace-nowrap">
                        Enquire now
                      </div>
                    </div>
                    <div class="relative group size-[40px] sm:size-[54.54px] flex justify-center items-center text-[#1E6DA4] rounded-full border-[1.58px] border-[#1E6DA4]  cursor-pointer  hover:bg-[#1E6DA4]">
                      <svg
                        
                        class="duration-500 fill-[#1E6DA4] sm:w-7 sm:h-7 h-5 w-5 group-hover:fill-[#fff]"
                        viewBox="0 0 27 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22.8816 4.6434C21.6587 3.40813 20.2021 2.42871 18.5967 1.76228C16.9913 1.09585 15.2693 0.755743 13.5311 0.761798C6.24806 0.761798 0.312277 6.69758 0.312277 13.9806C0.312277 16.3149 0.925864 18.5825 2.073 20.5833L0.205566 27.4395L7.20846 25.5987C9.14259 26.6525 11.3168 27.2127 13.5311 27.2127C20.8141 27.2127 26.7499 21.2769 26.7499 13.9939C26.7499 10.4591 25.376 7.13777 22.8816 4.6434ZM13.5311 24.9718C11.5569 24.9718 9.62279 24.4383 7.92876 23.4378L7.52859 23.1977L3.36687 24.2915L4.474 20.2365L4.20722 19.823C3.11043 18.0716 2.52805 16.0471 2.52653 13.9806C2.52653 7.92476 7.4619 2.98939 13.5177 2.98939C16.4523 2.98939 19.2134 4.13653 21.2809 6.21739C22.3047 7.23643 23.116 8.44853 23.6678 9.78343C24.2196 11.1183 24.501 12.5495 24.4956 13.9939C24.5223 20.0498 19.5869 24.9718 13.5311 24.9718ZM19.5602 16.7551C19.2268 16.595 17.5994 15.7947 17.306 15.6746C16.9992 15.5679 16.7858 15.5146 16.559 15.8347C16.3322 16.1682 15.7053 16.9151 15.5186 17.1286C15.3318 17.3553 15.1317 17.382 14.7983 17.2086C14.4648 17.0485 13.3977 16.6884 12.1438 15.5679C11.1568 14.6876 10.5032 13.6071 10.3031 13.2736C10.1163 12.9402 10.2764 12.7668 10.4498 12.5934C10.5965 12.4466 10.7833 12.2065 10.9433 12.0198C11.1034 11.833 11.1701 11.6863 11.2768 11.4729C11.3835 11.2461 11.3302 11.0594 11.2501 10.8993C11.1701 10.7393 10.5032 9.11192 10.2364 8.44497C9.9696 7.80471 9.68949 7.88474 9.4894 7.8714H8.84914C8.62238 7.8714 8.27557 7.95144 7.96877 8.28491C7.67532 8.61838 6.82163 9.41871 6.82163 11.046C6.82163 12.6734 8.00879 14.2474 8.16886 14.4608C8.32892 14.6876 10.5032 18.0223 13.8112 19.4495C14.5982 19.7963 15.2118 19.9964 15.692 20.1431C16.479 20.3966 17.1993 20.3566 17.7728 20.2765C18.4131 20.1832 19.7336 19.4762 20.0004 18.7025C20.2805 17.9289 20.2805 17.2753 20.1872 17.1286C20.0938 16.9818 19.8937 16.9151 19.5602 16.7551Z"></path>
                      </svg>
                      <div class="uppercase font-semibold text-[10px] border tracking-wide text-[#464646] duration-500 hidden group-hover:inline absolute top-[120%] left-[50%] translate-x-[-50%] whitespace-nowrap">
                        Whatsapp
                      </div>
                    </div>
                    <p class=" absolute bottom-0 text-nowrap translate-x-2 text-[13.51px] text-[#1E6DA4] font-bold pt-5  hidden group-hover:block">
                      Call Us
                    </p>
                  </div>
                </div>
                <div class="mt-3 md:mt-5 mb-10 md:mb-0 w-[134px] py-[8.32px] rounded-[5.21px] flex items-center justify-evenly border-[1px] border-[#1E6DA4]">
                  <button
                    class=" text-[14px] font-medium text-[#1E6DA4]"
                    fdprocessedid="qf2i8c"
                  >
                    Explore Now
                  </button>
                  <span>
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1781 6.02693L8.69694 1.54654L9.74047 0.503007L12.8718 3.63397L16.0031 6.76493L9.74121 13.0269L8.69694 11.9833L13.1788 7.50293L0.581054 7.50293L0.581054 6.02693L13.1781 6.02693Z"
                        fill="#1E6DA4"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="bg-[#1E6DA4] ">
                <div class="p-3 h-full bg-[#1E6DA4] gap-7 md:gap-8 flex flex-col  items-center justify-between  pb-4 2xl:pb-10">
                  <h6 class="uppercase text-[#fff] pr-4 w-[1px]  mb-16 md:mb-[38px] opacity-50 rotate-90 font-semibold text-[20px] md:text-[27px] whitespace-nowrap tracking-[20%] text-center ">
                    LEISURE HOMES
                  </h6>
                  <div class="flex flex-col gap-6 ">
                    <div class="flex flex-col  justify-center items-center ">
                      <span class="mb-0.5">
                        <svg
                          width="39"
                          height="32"
                          viewBox="0 0 39 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M35.3374 27.6089H38.7724V31.0438H0.988037V27.6089H4.42297V1.84686C4.42297 1.39136 4.60392 0.954517 4.92601 0.632429C5.2481 0.310342 5.68494 0.129395 6.14044 0.129395H23.3151C23.7706 0.129395 24.2075 0.310342 24.5296 0.632429C24.8517 0.954517 25.0326 1.39136 25.0326 1.84686V27.6089H31.9025V13.8691H28.4675V10.4342H33.6199C34.0754 10.4342 34.5123 10.6152 34.8344 10.9372C35.1565 11.2593 35.3374 11.6962 35.3374 12.1517V27.6089ZM7.85791 3.56433V27.6089H21.5977V3.56433H7.85791ZM11.2928 13.8691H18.1627V17.3041H11.2928V13.8691ZM11.2928 6.99927H18.1627V10.4342H11.2928V6.99927Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <p class="capitalize py-0.5 font-normal tracking-wider text-[10px] text-white">
                        Type
                      </p>
                      <h6 class="text-white tracking-wider font-medium text-[12px] text-center">
                        Semi Furnished
                      </h6>
                    </div>
                    <div class="flex flex-col  justify-center items-center">
                      <span class="mb-0.5">
                        <svg
                          width="15"
                          height="23"
                          viewBox="0 0 15 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.65611 22.6237L1.45338 14.0856V11.6461H5.72246C6.7999 11.6461 7.73015 11.2956 8.51322 10.5947C9.29629 9.89374 9.76874 9.02447 9.93055 7.98688H0.233643V5.54741H9.56463C9.21904 4.83589 8.70553 4.25164 8.02411 3.79464C7.34268 3.33765 6.57546 3.10875 5.72246 3.10793H0.233643V0.668457H14.8705V3.10793H10.9063C11.191 3.45352 11.4451 3.82961 11.6687 4.23619C11.8923 4.64277 12.0651 5.07984 12.1871 5.54741H14.8705V7.98688H12.4005C12.2379 9.71484 11.5264 11.1635 10.266 12.3328C9.00559 13.5021 7.49108 14.0864 5.72246 14.0856H4.83815L13.0409 22.6237H9.65611Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <p class="capitalize py-0.5 font-normal tracking-wider text-[10px] text-white">
                        Start From
                      </p>
                      <h6 class="text-white tracking-wider font-medium text-[12px] text-center">
                        ₹ 61 LAKHS*
                      </h6>
                    </div>
                    <div class="flex flex-col  justify-center items-center">
                      <span class="mb-0.5">
                        <svg
                          width="22"
                          height="21"
                          viewBox="0 0 22 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1732 0.224121C15.1605 0.226355 16.1361 0.43747 17.036 0.843596C17.9359 1.24972 18.7396 1.84166 19.3945 2.58053C20.0493 3.3194 20.5404 4.18846 20.8354 5.13063C21.1305 6.07279 21.2229 7.06673 21.1065 8.04713C20.9901 9.02753 20.6675 9.9722 20.16 10.8191C19.6526 11.666 18.9716 12.3959 18.162 12.9609C17.3524 13.5258 16.4323 13.9131 15.4624 14.0972C14.4924 14.2813 13.4944 14.2581 12.5341 14.0291L11.348 15.2152C11.1692 15.3942 10.9266 15.4949 10.6736 15.4951H9.71912V16.4496C9.7189 16.7026 9.6182 16.9452 9.43916 17.124L8.80286 17.7603C8.62404 17.9394 8.38144 18.0401 8.12839 18.0403H7.17396V18.9947C7.17373 19.2478 7.07303 19.4904 6.89399 19.6692L6.2577 20.3055C6.07888 20.4845 5.83627 20.5852 5.58323 20.5855H3.03806C2.44741 20.5855 1.88096 20.3508 1.46331 19.9332C1.04567 19.5155 0.811035 18.9491 0.811035 18.3584L0.811035 15.8133C0.811035 15.56 0.911569 15.3182 1.091 15.1388L7.36739 8.86242C7.11947 7.83319 7.10825 6.76113 7.33459 5.72693C7.56093 4.69274 8.01893 3.72336 8.6741 2.89178C9.32928 2.06019 10.1646 1.38806 11.1171 0.925991C12.0696 0.463919 13.1145 0.22394 14.1732 0.224121ZM9.08283 7.22333C9.08156 7.77182 9.17064 8.31776 9.34371 8.83824C9.39992 9.00647 9.40814 9.18702 9.36746 9.35966C9.32677 9.53229 9.23879 9.69017 9.11337 9.81559L2.71991 16.2078V18.3584C2.71991 18.5341 2.86244 18.6766 3.03806 18.6766H5.18872L5.26508 18.6002V17.0859C5.26508 16.8327 5.36564 16.59 5.54463 16.411C5.72362 16.232 5.96639 16.1314 6.21952 16.1314H7.73389L7.81025 16.0551V14.5407C7.81025 14.2876 7.9108 14.0448 8.0898 13.8658C8.26879 13.6868 8.51155 13.5863 8.76469 13.5863H10.2791L11.5809 12.2819C11.7065 12.1567 11.8644 12.0689 12.037 12.0285C12.2097 11.988 12.3902 11.9964 12.5583 12.0528C13.5794 12.3944 14.6826 12.4034 15.7092 12.0785C16.7357 11.7536 17.6328 11.1115 18.2715 10.2446C18.9101 9.37764 19.2574 8.33052 19.2634 7.25377C19.2694 6.17702 18.9338 5.1261 18.3049 4.25211C17.6759 3.37812 16.786 2.72609 15.7631 2.38976C14.7402 2.05343 13.637 2.05013 12.6121 2.38034C11.5873 2.71054 10.6935 3.35724 10.0593 4.22746C9.42515 5.09767 9.08327 6.14656 9.08283 7.22333ZM14.8095 7.85963C14.472 7.85963 14.1483 7.72555 13.9096 7.4869C13.671 7.24824 13.5369 6.92455 13.5369 6.58704C13.5369 6.24953 13.671 5.92585 13.9096 5.68719C14.1483 5.44853 14.472 5.31446 14.8095 5.31446C15.147 5.31446 15.4707 5.44853 15.7093 5.68719C15.948 5.92585 16.082 6.24953 16.082 6.58704C16.082 6.92455 15.948 7.24824 15.7093 7.4869C15.4707 7.72555 15.147 7.85963 14.8095 7.85963Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <p class="capitalize py-0.5 font-normal tracking-wider text-[10px] text-white text-center">
                        Expected Hand Over
                      </p>
                      <h6 class="text-white tracking-wider font-medium text-[12px] text-center">
                        DEC. 2027
                      </h6>
                    </div>
                    <div class="flex flex-col  justify-center items-center">
                      <span class="mb-0.5">
                        <svg
                          width="23"
                          height="26"
                          viewBox="0 0 23 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.5969 0.803711C14.5675 0.803711 17.4165 1.98378 19.517 4.08432C21.6175 6.18485 22.7976 9.03379 22.7976 12.0044C22.7976 15.8301 20.7118 18.9613 18.514 21.2076C17.4159 22.3178 16.2177 23.3243 14.9347 24.2144L14.4046 24.5753L14.1557 24.7408L13.6865 25.0395L13.2683 25.2946L12.7506 25.5958C12.3992 25.7964 12.0015 25.9019 11.5969 25.9019C11.1923 25.9019 10.7947 25.7964 10.4433 25.5958L9.92553 25.2946L9.27838 24.8964L9.03943 24.7408L8.52918 24.4011C7.14506 23.4646 5.85583 22.395 4.67988 21.2076C2.48206 18.96 0.39624 15.8301 0.39624 12.0044C0.39624 9.03379 1.57631 6.18485 3.67684 4.08432C5.77738 1.98378 8.62632 0.803711 11.5969 0.803711ZM11.5969 3.29275C9.28645 3.29275 7.07061 4.21058 5.43686 5.84433C3.80311 7.47808 2.88528 9.69392 2.88528 12.0044C2.88528 14.8942 4.46831 17.4305 6.4583 19.4665C7.31394 20.3327 8.23878 21.1277 9.22362 21.8436L9.79361 22.2493C9.9778 22.3779 10.1549 22.4974 10.325 22.6077L10.8104 22.9188L11.2373 23.1789L11.5969 23.3893L12.1632 23.0545L12.6199 22.7683C12.863 22.6139 13.1231 22.4409 13.4002 22.2493L13.9702 21.8436C14.9551 21.1277 15.8799 20.3327 16.7355 19.4665C18.7255 17.4318 20.3086 14.8942 20.3086 12.0044C20.3086 9.69392 19.3907 7.47808 17.757 5.84433C16.1232 4.21058 13.9074 3.29275 11.5969 3.29275ZM11.5969 7.02631C12.9172 7.02631 14.1834 7.55079 15.117 8.48436C16.0505 9.41793 16.575 10.6841 16.575 12.0044C16.575 13.3247 16.0505 14.5909 15.117 15.5244C14.1834 16.458 12.9172 16.9825 11.5969 16.9825C10.2767 16.9825 9.01046 16.458 8.07689 15.5244C7.14332 14.5909 6.61884 13.3247 6.61884 12.0044C6.61884 10.6841 7.14332 9.41793 8.07689 8.48436C9.01046 7.55079 10.2767 7.02631 11.5969 7.02631ZM11.5969 9.51536C10.9368 9.51536 10.3037 9.77759 9.83691 10.2444C9.37012 10.7112 9.10788 11.3443 9.10788 12.0044C9.10788 12.6645 9.37012 13.2976 9.83691 13.7644C10.3037 14.2312 10.9368 14.4934 11.5969 14.4934C12.2571 14.4934 12.8902 14.2312 13.3569 13.7644C13.8237 13.2976 14.086 12.6645 14.086 12.0044C14.086 11.3443 13.8237 10.7112 13.3569 10.2444C12.8902 9.77759 12.2571 9.51536 11.5969 9.51536Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <p class="capitalize py-0.5 font-normal tracking-wider text-[10px] text-white">
                        Location
                      </p>
                      <h6 class="text-white tracking-wider font-medium text-[12px] text-center">
                        kasauli
                      </h6>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto">
          <CardSlider/>
          </div>
          </>
  )
}


function CardSlider() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="py-[80px] ">
    <Slider {...settings} id="offeringCardSlider">
      <div>
        <Card img={slider1Img} />
      </div>
      <div>
        <Card img={sliderImg2} />
      </div>
      <div>
        <Card img={sliderImg3}/>
      </div>
      <div>
        <Card img={sliderImg4}/>
      </div>
    </Slider>
    </div>
  )
}

function Card({img}){
  return (
    <div className="mx-4 group">
        <figure className="relative h-[260px] overflow-hidden rounded-t-lg">
          <img src={img} className="group-hover:scale-105 duration-500 w-full rounded-t-lg h-full object-fill" alt="" />
          <img className="absolute bottom-0 left-0 bg-white w-[40%] p-3" src={elementaLogo} alt="" />
        </figure>
        <div className="bg-white p-3 rounded-b-lg shadow-[2.81px_2.25px_2.25px_0px_#00000040]">
          <h4 className="text-primary-color font-semibold text-[25px] text-start uppercase">Sushma bellaza</h4>
          <span className="flex items-center gap-1 text-theme-black-color"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Location_On"><g><path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path><path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path></g></g></svg> Zirakpur</span>
        </div>
      </div>
  )
}