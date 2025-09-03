import React, { useEffect } from 'react'
import AOS from "aos";


export default function Explore() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <section className='w-full flex flex-col items-center justify-center gap-[14px] lg:mb-[150px] mb-[50px]'>
                        <h2 className='font-bold md:text-[48px] text-[20px] text-slate-800 leading-tight text-center w-full md:max-w-[800px] max-w-none mx-auto'>
                              Explore Our <span className='text-[#BC1328]'>Aviation Services</span> in Action
                        </h2>
                        <p className='font-normal lg:text-[24px] text-base block leading-normal text-center md:max-w-[800px] max-w-none mx-auto'>
                              Explore Our Dedicated Approach to Aviation Service and Maintenance, Focused on Delivering Excellence, Innovation, and Long-Term Client Satisfaction
                        </p>
                  </section>
            </>
      )
}
