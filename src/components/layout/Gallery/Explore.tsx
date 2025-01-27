import React, { useEffect } from 'react'
import AOS from "aos";
import Image from 'next/image';


export default function Explore() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <main className="w-full h-auto overflow-hidden relative lg:pt-[200px] pt-[110px] lg:mb-[56px] mb-[0px]">
                        {/* Ornament */}
                        <div className="w-full h-auto absolute -top-[100px] left-0">
                              <Image
                                    src="/assets/ornaments/ornament-head.svg"
                                    alt="Ornament"
                                    width={1000}
                                    height={1000}
                                    className='w-full h-auto object-cover'
                              />
                        </div>
                        <section data-aos="fade-up" className='container_section flex flex-col items-center justify-center relative z-[2]'>
                              <h2 className="w-full md:max-w-[1010px] max-w-none font-bold lg:text-[64px] text-[36px] lg:leading-[80px] leading-normal text-center text-theme-brand">
                                    Full-Service <span className='text-theme-red'>Exploore Our</span> and Solutions
                              </h2>
                              <p className='w-full md:max-w-[1010px] max-w-none font-normal lg:text-[24px] text-base leading-normal text-slate-400 text-center lg:mt-[14px] mt-[24px]'>
                                    Explore Our Dedicated Approach to Aviation Service and Maintenance, Focused on Delivering Excellence, Innovation, and Long-Term Client Satisfaction
                              </p>
                        </section>
                  </main>
            </>
      )
}
