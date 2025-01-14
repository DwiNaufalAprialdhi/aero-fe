import React, { useEffect } from 'react'
import AOS from "aos";


export default function Dedicated() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <main className="w-full h-auto overflow-hidden relative lg:pt-[200px] pt-[110px] lg:mb-[156px] mb-[50px]">
                        <section data-aos="fade-up" className='container_section flex flex-col items-center justify-center'>
                              <h2 className="w-full md:max-w-[1010px] max-w-none font-bold lg:text-[64px] text-[36px] lg:leading-[80px] leading-normal text-center text-theme-brand">
                                    Dedicated to <span className='text-theme-red'>Aviation Maintenance</span> and Innovation
                              </h2>
                              <p className='w-full md:max-w-[1010px] max-w-none font-normal lg:text-[24px] text-base leading-normal text-slate-400 text-center lg:mt-[14px] mt-[24px]'>
                                    Committed to Delivering Excellence and Precision in Every Service, With a Focus on Safety, Reliability, and Innovation in Aviation
                              </p>
                        </section>
                  </main>
            </>
      )
}