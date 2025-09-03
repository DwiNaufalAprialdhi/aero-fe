import React, { useEffect } from 'react'
import AOS from "aos";
import Image from 'next/image';


export default function Dedicated() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <section className="w-full md:h-[500px] h-[400px] overflow-hidden relative lg:pt-[200px] pt-[110px] lg:mb-[150px] mb-[50px]">
                        {/* BACKGROUND */}
                        <div className='w-full h-full absolute top-0 inset-x-0 z-[1]'>
                              <Image src='/assets/images/background-metters.png' alt='background' width={1000} height={500} className='w-full h-full object-cover' />
                        </div>
                        {/* LAYER HERO */}
                        <div className='w-max h-max absolute bottom-[-3px] z-10 right-0 bg-white md:pl-[90px] pl-[60px] md:py-[30px] py-[20px] md:pr-[230px] pr-[120px]'
                              style={{ clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%)" }}
                        >
                              {/* ORNAMENT */}
                              <div className='w-max h-max absolute z-[3] top-[-40px] md:right-[125px] right-[50px] flex items-start justify-start gap-4'>
                                    <div className='md:w-[23px] md:h-[500px] w-[17px] h-[300px] rotate-[25deg] bg-[#BC1328]'>
                                    </div>
                                    <div className='md:w-[23px] md:h-[500px] w-[17px] h-[300px] rotate-[25deg] bg-[#F9F400]'>
                                    </div>
                                    <div className='md:w-[23px] md:h-[500px] w-[17px] h-[300px] rotate-[25deg] bg-[#352B5A]'>
                                    </div>
                              </div>
                              {/* CONTENT */}
                              <h2 className='font-bold md:text-[64px] text-[32px] text-slate-800 leading-tight'>
                                    About Us
                              </h2>
                        </div>
                  </section>
                  <section className='w-full flex flex-col items-center justify-center gap-[14px] lg:mb-[100px] mb-[50px]'>
                        <h2 className='font-bold md:text-[48px] text-[20px] text-slate-800 leading-tight text-center w-full md:max-w-[800px] max-w-none mx-auto'>
                              Dedicated to <span className='text-[#BC1328]'>Aviation Maintenance</span> and Innovation
                        </h2>
                        <p className='font-normal lg:text-[24px] text-base block leading-normal text-center md:max-w-[800px] max-w-none mx-auto'>
                              Committed to Delivering Excellence and Precision in Every Service, With a Focus on Safety, Reliability, and Innovation in Aviation                        </p>
                  </section>
            </>
      )
}
