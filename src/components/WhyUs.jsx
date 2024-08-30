import React from 'react'
import whyShshmaVideo from "../assets/whysushmavideo.mp4"
import construction from "../assets/construction.png"
import like from "../assets/like.svg"
import respect from "../assets/crespect.svg"
export default function WhyUs() {
  return (
    <section className='w-full grid md:grid-cols-[30%_70%] grid-cols-1 '>
        <div className='md:order-1 order-2'>
        <video loop  autoPlay className="h-full object-cover object-center w-full" ><source src={whyShshmaVideo} type="video/mp4"/>Your browser does not support the video tag.</video>
        </div>
        <div className='bg-primary-color p-10 md:order-2 order-1'>
            <div className='text-center text-white'>
              <h3 className='md:text-[35px] lg:text-[40px] text-[23px] px-2 font-bold uppercase'>Why Sushma Group              </h3>
              <p className='px-2 lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] font-normal md:font-semibold'>Within the premises of the Sushma Township are reputed Schools.</p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 py-5 lg:gap-12 md:gap-4'>
              <div className='lg:p-4 p-2  flex items-center gap-4 border-b border-[#378DC9]'>
                <img src={construction} className='z-30' alt="Construction" />
                <span className='hidden z-20 lg:inline lg:size-[25px] xl:size-[31px] rounded-full absolute bg-[#1E608E] translate-x-[-7px] translate-y-[-7px]  md:translate-y-[-14px]'></span>
                <p className='xl:text-[17px]  text-[12px]  font-semibold lg:leading-[9.24px] text-[#FFFFFF]'>Quality Construction</p>
              </div>
              <div className='lg:p-4 p-2 flex items-center gap-4 border-b border-[#378DC9]'>
              <svg className='w-10 z-30' viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M16.8115 0.399902C7.93573 0.399902 0.742188 7.59344 0.742188 16.4692C0.742188 25.345 7.93573 32.5386 16.8115 32.5386C25.6873 32.5386 32.8809 25.345 32.8809 16.4692C32.8809 7.59344 25.6873 0.399902 16.8115 0.399902ZM16.8115 29.8583C9.41712 29.8583 3.4225 23.8636 3.4225 16.4692C3.4225 9.07483 9.41712 3.08022 16.8115 3.08022C24.2059 3.08022 30.2005 9.07483 30.2005 16.4692C30.2005 23.8636 24.2059 29.8583 16.8115 29.8583ZM15.4745 15.1322H8.77686V17.8125H18.1485V5.76053H15.4682V15.1322H15.4745Z" fill="white"></path></svg>
                <span className='hidden z-20 lg:inline lg:size-[25px] xl:size-[31px] rounded-full absolute bg-[#1E608E] translate-x-[-7px] translate-y-[-7px]  md:translate-y-[-14px]'></span>
                <p className='xl:text-[17px] text-[12px]  font-semibold lg:leading-[9.24px] text-[#FFFFFF]'>On Time delivery</p>
              </div>
              <div className='lg:p-4 p-2 flex items-center gap-4 border-b border-[#378DC9]'>
                <svg className='w-7 z-30' viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7295 3.38428C11.7036 3.38428 8.80159 4.58632 6.66195 6.72597C4.5223 8.86562 3.32026 11.7676 3.32026 14.7935C3.32026 17.8194 4.5223 20.7214 6.66195 22.8611C8.80159 25.0007 11.7036 26.2028 14.7295 26.2028C17.7554 26.2028 20.6574 25.0007 22.7971 22.8611C24.9367 20.7214 26.1387 17.8194 26.1387 14.7935C26.1387 11.7676 24.9367 8.86562 22.7971 6.72597C20.6574 4.58632 17.7554 3.38428 14.7295 3.38428ZM0.58204 14.7935C0.58203 12.4487 1.16486 10.1406 2.27811 8.07681C3.39136 6.01306 5.00011 4.25837 6.95969 2.97057C8.91927 1.68277 11.1682 0.902229 13.5043 0.699154C15.8403 0.49608 18.1902 0.876838 20.3426 1.80718C22.495 2.73753 24.3824 4.18829 25.8351 6.02898C27.2878 7.86968 28.2601 10.0426 28.6648 12.3523C29.0694 14.662 28.8935 17.036 28.1531 19.2609C27.4126 21.4858 26.1308 23.4917 24.4228 25.0983C24.4685 25.1905 24.5064 25.2864 24.536 25.3849L25.7225 29.7095C26.2757 31.7303 26.7229 33.3568 26.9255 34.62C27.1245 35.8577 27.1647 37.1319 26.4728 38.1688C26.0785 38.7584 25.5418 39.2422 24.9102 39.5634C23.7601 40.1476 22.506 39.861 21.3834 39.4357C20.237 39.0048 18.7985 38.2546 17.0314 37.3327L16.9456 37.2889C15.624 36.6007 15.279 36.4455 14.9467 36.4108C14.8024 36.3935 14.6566 36.3935 14.5123 36.4108C14.18 36.4455 13.8368 36.6007 12.5134 37.2889L12.4276 37.3327C10.6605 38.2546 9.22203 39.003 8.07563 39.4357C6.95296 39.861 5.69886 40.1476 4.5488 39.5634C3.91848 39.238 3.38088 38.7582 2.9862 38.1688C2.29434 37.1319 2.3345 35.8577 2.53348 34.62C2.7361 33.3568 3.18335 31.7303 3.73829 29.7095L4.92303 25.3831C4.95271 25.2852 4.99057 25.1899 5.03621 25.0983C3.6282 23.7769 2.5064 22.1805 1.74024 20.4079C0.974089 18.6354 0.579888 16.7245 0.58204 14.7935ZM7.35457 26.8691L6.40167 30.3484C5.81751 32.4733 5.41408 33.9556 5.23701 35.0545C5.05446 36.1954 5.19137 36.5386 5.26439 36.6463C5.39809 36.8468 5.57933 37.0111 5.79196 37.1246C5.83394 37.1447 6.09499 37.2579 7.10995 36.8745C8.08293 36.5076 9.37355 35.8358 11.2483 34.861L11.4363 34.7624C12.4732 34.2203 13.3075 33.7858 14.222 33.6872C14.5603 33.6507 14.8987 33.6507 15.237 33.6872C16.1497 33.784 16.9858 34.2203 18.0227 34.7624L18.2107 34.861C20.0836 35.8358 21.3761 36.5076 22.349 36.8745C23.364 37.2579 23.6269 37.1447 23.667 37.1246C23.8803 37.0114 24.0622 36.8471 24.1964 36.6463C24.2695 36.5368 24.4045 36.1954 24.222 35.0545C24.0449 33.9556 23.6397 32.4733 23.0592 30.3484L22.1044 26.8691C19.8854 28.2292 17.3322 28.9465 14.7295 28.941C12.1268 28.9465 9.57364 28.2292 7.35457 26.8691ZM14.7295 11.2065C14.6248 11.3878 14.5037 11.6026 14.3662 11.8508L14.1873 12.1721L14.1453 12.2452C14.003 12.508 13.7656 12.9425 13.3695 13.2437C12.9661 13.5504 12.4787 13.6562 12.1957 13.7183L12.1154 13.7347L11.7686 13.8132C11.4473 13.8863 11.1862 13.9447 10.9654 14.0013C11.1096 14.1783 11.2976 14.401 11.5422 14.6876L11.7795 14.9651L11.8343 15.0272C12.0314 15.2554 12.3491 15.6205 12.4969 16.0951C12.643 16.5624 12.5919 17.0443 12.5608 17.3474L12.5517 17.4332L12.5152 17.8037L12.4385 18.6435C12.6302 18.5595 12.8456 18.4609 13.103 18.3423L13.4298 18.1926L13.5028 18.1561C13.7656 18.0337 14.2202 17.8202 14.7295 17.8202C15.2388 17.8202 15.6934 18.0337 15.9562 18.1579L16.0292 18.1926L16.356 18.3423C16.6103 18.4615 16.8318 18.5619 17.0205 18.6435L16.9438 17.8037L16.9073 17.4332L16.8982 17.3474C16.8671 17.0425 16.816 16.5624 16.9621 16.0951C17.1081 15.6205 17.4276 15.2554 17.6247 15.0272L17.6795 14.9651L17.9168 14.6876C18.1614 14.401 18.3494 14.1783 18.4936 14.0013C18.2728 13.9465 18.0117 13.8863 17.6904 13.8132L17.3436 13.7347L17.2633 13.7165C16.9803 13.6562 16.4929 13.5504 16.0895 13.2419C15.6934 12.9425 15.456 12.508 15.3137 12.247L15.2717 12.1721L15.0928 11.8508C14.9565 11.6026 14.8354 11.389 14.7295 11.2065ZM12.9296 8.95199C13.2436 8.54126 13.8131 7.94798 14.7295 7.94798C15.6459 7.94798 16.2154 8.54126 16.5294 8.95199C16.8306 9.34264 17.1318 9.88481 17.4422 10.4416L17.4841 10.5164L17.663 10.8395L17.7671 11.0221L17.9478 11.0641L18.2947 11.1426L18.3823 11.1608C18.9792 11.2977 19.5743 11.431 20.0307 11.6117C20.5345 11.8107 21.2173 12.1959 21.4819 13.0447C21.7412 13.8753 21.4144 14.5799 21.1296 15.0345C20.8649 15.4543 20.4633 15.9217 20.0526 16.4018L19.9978 16.4657L19.7605 16.745L19.6108 16.922C19.6145 16.9877 19.6236 17.0644 19.6327 17.1685L19.6692 17.539L19.6765 17.623C19.7386 18.2656 19.7989 18.8862 19.7769 19.3828C19.755 19.9049 19.6309 20.6935 18.9226 21.2283C18.1924 21.7833 17.3892 21.6628 16.8781 21.5149C16.4071 21.3817 15.8503 21.1243 15.2899 20.8669L15.2114 20.8304L14.8828 20.6789L14.7295 20.6077L14.5743 20.6807L14.2476 20.8304L14.1673 20.8669C13.6087 21.1243 13.0519 21.3817 12.5809 21.5149C12.0698 21.661 11.2666 21.7833 10.5364 21.2283C9.82991 20.6935 9.70396 19.9049 9.68205 19.3846C9.66014 18.8862 9.71856 18.2656 9.78245 17.623L9.78975 17.539L9.82626 17.1685L9.84999 16.922L9.69848 16.745L9.46117 16.4657L9.4064 16.4018C8.99567 15.9217 8.59407 15.4525 8.32937 15.0327C8.0446 14.5799 7.71783 13.8753 7.97705 13.0429C8.23992 12.1977 8.92448 11.8107 9.42831 11.6117C9.88468 11.431 10.4798 11.2977 11.0767 11.1626L11.1625 11.1444L11.5112 11.0641L11.6937 11.0221L11.796 10.8395L11.9749 10.5164L12.0168 10.4416C12.3272 9.88481 12.6284 9.34264 12.9296 8.95199Z" fill="white"></path></svg>
                <span className='hidden z-20 lg:inline lg:size-[25px] xl:size-[31px] rounded-full absolute bg-[#1E608E] translate-x-[-7px] translate-y-[-7px]  md:translate-y-[-14px]'></span>
                <p className='xl:text-[17px] text-[12px]  font-semibold lg:leading-[9.24px] text-[#FFFFFF]'>Superior product design, styling & quality</p>
              </div>
              <div className='lg:p-4 p-2 flex items-center gap-4 border-b border-[#378DC9]'>
                <img src={like} className='z-50' alt="Like" />
                <span className='hidden z-20 lg:inline lg:size-[25px] xl:size-[31px] rounded-full absolute bg-[#1E608E] translate-x-[-7px] translate-y-[-7px]  md:translate-y-[-14px]'></span>
                <p className='xl:text-[17px] text-[12px]  font-semibold lg:leading-[9.24px] text-[#FFFFFF]'>Transparency and trustworthiness</p>
              </div>
              <div className='lg:p-4 p-2 flex items-center gap-4 border-b border-[#378DC9]'>
                <img src={respect} className='z-50' alt="Respect" />
                <span className='hidden z-20 lg:inline lg:size-[25px] xl:size-[31px] rounded-full absolute bg-[#1E608E] translate-x-[-7px] translate-y-[-7px]  md:translate-y-[-14px]'></span>
                <p className='xl:text-[17px] text-[12px]  font-semibold lg:leading-[9.24px] text-[#FFFFFF]'>Mutual Respect</p>
              </div>
              <div className='lg:p-4 p-2 flex items-center gap-4 border-b border-[#378DC9]'>
              <svg className='w-7 z-30' viewBox="0 0 30 37" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M19.8138 1.93604H4.8138C3.92975 1.93604 3.0819 2.28722 2.45678 2.91235C1.83166 3.53747 1.48047 4.38531 1.48047 5.26937V31.936C1.48047 32.8201 1.83166 33.6679 2.45678 34.2931C3.0819 34.9182 3.92975 35.2694 4.8138 35.2694H24.8138C25.6979 35.2694 26.5457 34.9182 27.1708 34.2931C27.7959 33.6679 28.1471 32.8201 28.1471 31.936V10.2694L19.8138 1.93604Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.1484 1.93604V8.6027C18.1484 9.48676 18.4996 10.3346 19.1247 10.9597C19.7499 11.5848 20.5977 11.936 21.4818 11.936H28.1484M8.14844 20.2694H11.4818M18.1484 20.2694H21.4818M8.14844 26.936H11.4818M18.1484 26.936H21.4818" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span className='hidden z-20 lg:inline lg:size-[25px] xl:size-[31px] rounded-full absolute bg-[#1E608E] translate-x-[-7px] translate-y-[-7px]  md:translate-y-[-14px]'></span>
                <p className='xl:text-[17px] text-[12px]  font-semibold lg:leading-[9.24px] text-[#FFFFFF]'>Commitment to all stakeholders</p>
              </div>
              <div className='lg:p-4 p-2 flex items-center gap-4 border-b border-[#378DC9]'>
                <img src={construction} className='z-50' alt="Construction" />
                <span className='hidden z-20 lg:inline lg:size-[25px] xl:size-[31px] rounded-full absolute bg-[#1E608E] translate-x-[-7px] translate-y-[-7px]  md:translate-y-[-14px]'></span>
                <p className='xl:text-[17px] text-[12px]  font-semibold lg:leading-[9.24px] text-[#FFFFFF]'>Quality Construction</p>
              </div>
              <div className='lg:p-4 p-2 flex items-center gap-4 border-b border-[#378DC9]'>
                <img src={construction} className='z-50' alt="Construction" />
                <span className='hidden z-20 lg:inline lg:size-[25px] xl:size-[31px] rounded-full absolute bg-[#1E608E] translate-x-[-7px] translate-y-[-7px]  md:translate-y-[-14px]'></span>
                <p className='xl:text-[17px] text-[12px]  font-semibold lg:leading-[9.24px] text-[#FFFFFF]'>Quality Construction</p>
              </div>
            </div>
        </div>
    </section>
  )
}
