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
                  <main className="w-full lg:min-h-screen h-max relative overflow-hidden mb-[102px] flex items-center justify-start">
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
                        <div className='w-max h-max absolute bottom-0 right-0 bg-white py-4 pr-4 pl-20 flex items-center lg:gap-6 gap-3'
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

            // <>
            //       <main className='main_hero w-full lg:pt-[151px] pt-[137px] pb-[50px] relative overflow-hidden'>
            //             {/* Ornament */}
            //             <div className="w-full lg:h-auto h-full absolute lg:-top-[100px] md:-top-[350px] -top-[350px] left-0 z-[1] zoomIn">
            //                   <Image
            //                         src="/assets/ornaments/ornament-hero.svg"
            //                         alt="Ornament"
            //                         width={1000}
            //                         height={1000}
            //                         className='w-full h-full object-cover'
            //                   />
            //             </div>

            //             {/* Content */}
            //             <section className='container_section relative z-[2]'>
            //                   {/* Desktop */}
            //                   <div className='hidden lg:grid grid-cols-2 items-start gap-6'>
            //                         {/* Left */}
            //                         <motion.div
            //                               initial={{ opacity: 0, x: -100 }}
            //                               animate={{ opacity: 1, x: 0 }}
            //                               transition={{ duration: 0.8 }}
            //                               className='w-full col-span-1 flex flex-col'>

            //                               <h2 className='font-bold text-[64px] leading-[80px] text-theme-brand'>General <span className='text-theme-red'>Aviation Solution</span> and Airport Services</h2>
            //                               <div className='w-full col-span-2 grid grid-cols-12 items-center gap-[50px]'>
            //                                     <div className='w-full h-[191px] col-span-3 rounded-[16px] overflow-hidden group'>
            //                                           <Image src='/assets/images/hero-1.svg' alt='Hero-1' width={139} height={191} className='w-full h-full object-cover group-hover:scale-105 duration-500' />
            //                                     </div>
            //                                     <div className='w-full col-span-9 flex flex-col gap-y-[50px]'>
            //                                           <h2 className='font-normal text-[24px] text-theme-secondary'>&quot;We are commited to develop general aviation airport of Indonesia&quot;</h2>
            //                                           <div className='flex items-center gap-x-6'>
            //                                                 <ButtonTextIcon link={'#'} className='w-max flex items-center gap-x-[14px]'>
            //                                                       <h2 className='font-medium lg:text-sm text-xs'>
            //                                                             Get Started Now
            //                                                       </h2>
            //                                                       <IconRight className='w-6 h-6 text-white toRight' />
            //                                                 </ButtonTextIcon>
            //                                                 <ButtonOutline link='#' className='w-max'>
            //                                                       View Services
            //                                                 </ButtonOutline>
            //                                           </div>
            //                                     </div>
            //                               </div>
            //                         </motion.div>
            //                         {/* Right */}
            //                         <motion.div
            //                               initial={{ opacity: 0, x: 100 }}
            //                               animate={{ opacity: 1, x: 0 }}
            //                               transition={{ duration: 0.8 }}
            //                               className='w-full col-span-1 flex flex-col'>
            //                               <div className='w-full h-[450px] rounded-[16px] overflow-hidden group mb-[14px]'>
            //                                     <Image src='/assets/images/hero-2.svg' alt='Hero-2' width={634} height={450} className='w-full h-full object-cover group-hover:scale-105 duration-500' />
            //                               </div>
            //                               <div className='w-full h-auto flex items-center gap-x-6 justify-end p-5'>
            //                                     <div className='flex flex-col bg-slate-50 bg-opacity-5 rounded-[16px] backdrop-blur-sm'>
            //                                           <div className='flex items-center gap-x-[14px]'>
            //                                                 <IconStarsCircle className='w-[60px] h-[60px] text-theme-donker' />
            //                                                 <h2 className="font-bold text-[64px]">
            //                                                       {count}+
            //                                                 </h2>
            //                                           </div>
            //                                           <h2 className='font-normal text-base '>Years of Experience</h2>
            //                                     </div>
            //                                     <div className='w-[1px] h-[50px] border border-slate-400'></div>
            //                                     <div className='flex flex-col items-start'>
            //                                           <h2 className='font-normal text-base mb-4'>Years of Experience</h2>
            //                                           <div className='flex items-center gap-x-4'>
            //                                                 <Image src='/assets/logo/dai.svg' alt='Logo' width={106} height={60} className='w-[106px] h-auto object-cover' />
            //                                                 <Image src='/assets/logo/pes.svg' alt='Logo' width={106} height={60} className='w-[106px] h-auto object-cover' />
            //                                           </div>
            //                                     </div>
            //                               </div>
            //                         </motion.div>
            //                   </div>
            //                   {/* Mobile */}
            //                   <div className='flex lg:hidden flex-col gap-y-[18px]'>
            //                         <div className='w-full md:h-[400px] h-[254px] overflow-hidden rounded-[16px] relative'>
            //                               <Image src='/assets/images/hero-2.svg' alt='Hero-1' width={357} height={254} className='w-full h-full object-cover' />
            //                               <div className='p-[10px] rounded-[8px] bg-white/80 backdrop-blur-sm absolute top-[7px] left-[7px] flex flex-col items-start'>
            //                                     <h2 className='font-normal text-[10px] mb-[14px]'>Years of Experience</h2>
            //                                     <div className='flex items-center gap-x-[24px]'>
            //                                           <Image src='/assets/logo/dai.svg' alt='Logo' width={42} height={24} className='w-[42px] h-auto object-cover' />
            //                                           <Image src='/assets/logo/pes.svg' alt='Logo' width={42} height={24} className='w-[42px] h-auto object-cover' />
            //                                     </div>
            //                               </div>
            //                               <div className='p-[10px] rounded-[8px] bg-white/80 backdrop-blur-sm flex flex-col absolute bottom-[7px] right-[7px] '>
            //                                     <div className='flex items-center gap-x-[14px]'>
            //                                           <IconStarsCircle className='w-[24px] h-[24px] text-theme-donker' />
            //                                           <h2 className='font-bold text-[32px]'>18+</h2>
            //                                     </div>
            //                                     <h2 className='font-normal text-[10px] '>Years of Experience</h2>
            //                               </div>
            //                         </div>
            //                         <div className='flex flex-col items-center justify-center'>
            //                               <h2 className='font-bold text-[34px] text-theme-brand text-center leading-[40px] mb-6'>General <span className='text-theme-red'>Aviation Solution</span> and Airport Services</h2>
            //                               <h2 className='font-normal text-base text-theme-secondary text-center mb-[50px]'>&quot;We are commited to develop general aviation airport of Indonesia&quot;</h2>
            //                               <div className='flex items-center gap-x-6'>
            //                                     <ButtonTextIcon link={'#'} className='w-max flex items-center gap-x-[14px]'>
            //                                           <h2 className='font-medium lg:text-sm text-xs'>
            //                                                 Get Started Now
            //                                           </h2>
            //                                           <IconRight className='w-6 h-6 text-white' />
            //                                     </ButtonTextIcon>
            //                                     <ButtonOutline link='#' className='w-max'>
            //                                           View Services
            //                                     </ButtonOutline>
            //                               </div>
            //                         </div>
            //                   </div>
            //             </section>
            //       </main>
            // </>
      )
}
