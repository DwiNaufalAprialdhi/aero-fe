/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ButtonOutline from '../material/ButtonOutline'
import IconRight from '../icon/IconRight'
import ButtonTextIcon from '../material/ButtonTextIcon'
import IconStarsCircle from '../icon/IconStarsCircle'
import { motion, animate } from 'framer-motion';
import Button from '../material/Button'


export default function Hero() {
      const [count, setCount] = useState(0);

      useEffect(() => {
            // Animasi angka dari 0 hingga 18
            const controls = animate(0, 18, {
                  duration: 2, // Durasi animasi (dalam detik)
                  onUpdate: (value) => setCount(Math.floor(value)), // Update state setiap frame
            });

            return controls.stop;
      }, []);

      return (
            <>
                  <main className="w-full lg:min-h-screen h-max relative overflow-hidden mb-[100px] flex items-center justify-start">
                        {/* LAYER BACKGROUND */}
                        <div className='w-full h-full absolute top-0 inset-x-0'>
                              <Image src='/assets/images/hero-background.svg' alt='hero' width={1000} height={1000} className='w-full h-full object-cover scale-x-[-1]' />
                        </div>
                        {/* CONTENT HERO */}
                        <div className='w-full h-max lg:max-w-[1200px] mx-auto relative z-[2] lg:py-0 py-[170px] lg:px-0 px-5'>
                              <div className='w-full lg:max-w-[660px] max-w-none flex flex-col justify-start '>
                                    <h2 className='font-bold md:text-[64px] text-[40px] text-slate-50 leading-tight lg:mb-6 mb-5'>
                                          General <span className='text-[#BC1328]'>Aviation</span> <span className='text-[#F9F400]'>Solution</span> and Airport Services
                                    </h2>
                                    <p className='block w-full lg:max-w-[397px] text-[24px] max-w-none font-normal text-slate-100 lg:mb-[50px] mb-[25px]'>
                                          &quot;We are commited to develop general aviation airport of Indonesia&quot;
                                    </p>
                                    <div className='lg:w-max w-full h-max flex flex-row gap-6'>
                                          <Button link={'#'} className='flex items-center justify-center gap-x-2'
                                                icon={
                                                      <><IconRight className='w-6 h-6 toRight' />
                                                      </>
                                                } >
                                                Get Started Now
                                          </Button>
                                          <ButtonOutline link={'#'} >
                                                View Services
                                          </ButtonOutline>
                                    </div>
                              </div>
                        </div>
                        {/* LAYER HERO */}
                        <div className='w-max h-max absolute bottom-[-3px] z-10 right-0 bg-white py-4 pr-4 pl-20 flex items-center lg:gap-6 gap-3'
                              style={{ clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%)" }}
                        >
                              {/* CONTENT */}
                              <div className='flex flex-col rounded-[1 text-[40px]6px] relative z-[2]'>
                                    <div className='flex items-center gap-x-[14px]'>
                                          <IconStarsCircle className='lg:w-[60px] w-[20px] lg:h-[60px] h-[20px] text-theme-donker' />
                                          <h2 className="font-bold lg:text-[64px] text-[24px]">
                                                {count}+
                                          </h2>
                                    </div>
                                    <h2 className='font-normal lg:text-base text-xs'>Years of Experience</h2>
                              </div>
                              <div className='w-[1px] h-[50px] border border-slate-400 relative z-[2]'></div>
                              <div className='flex flex-col items-start relative z-[2]'>
                                    <h2 className='font-normal lg:text-base text-xs lg:mb-4 mb-2'>Years of Experience</h2>
                                    <div className='flex items-center gap-x-4'>
                                          <Image src='/assets/logo/dai.svg' alt='Logo' width={106} height={60} className='lg:w-[106px] w-[50px] h-auto object-cover' />
                                          <Image src='/assets/logo/pes.svg' alt='Logo' width={106} height={60} className='lg:w-[106px] w-[50px] h-auto object-cover' />
                                    </div>
                              </div>
                        </div>
                  </main>
            </>
      )
}
