import React, { useEffect } from 'react'
import AOS from "aos";


export default function FullService() {
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
                              Full-Service <span className='text-[#BC1328]'>Aviation Support</span> and Solutions
                        </h2>
                        <p className='font-normal lg:text-[24px] text-base block leading-normal text-center md:max-w-[800px] max-w-none mx-auto'>
                              Committed to Delivering Excellence and Precision in Every Service, With a Focus on Safety, Reliability, and Innovation in Aviation
                        </p>
                  </section>
            </>
      )
}
