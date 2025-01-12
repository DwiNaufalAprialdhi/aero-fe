/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ButtonOutline from '../material/ButtonOutline'
import IconRight from '../icon/IconRight'
import ButtonTextIcon from '../material/ButtonTextIcon'
import IconStarsCircle from '../icon/IconStarsCircle'
import { motion, animate } from 'framer-motion';


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
                  <main className='w-full lg:pt-[151px] pt-[137px] pb-[50px]'>
                        <section className='container_section'>
                              {/* Desktop */}
                              <div className='hidden lg:grid grid-cols-2 items-start gap-6'>
                                    {/* Left */}
                                    <motion.div
                                          initial={{ opacity: 0, x: -100 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.8 }}
                                          className='w-full col-span-1 flex flex-col'>

                                          <h2 className='font-bold text-[64px] text-theme-brand'>General <span className='text-theme-red'>Aviation Solution</span> and Airport Services</h2>
                                          <div className='w-full col-span-2 grid grid-cols-12 items-center gap-[50px]'>
                                                <div className='w-full h-[191px] col-span-3 rounded-[16px] overflow-hidden group'>
                                                      <Image src='/assets/images/hero-1.svg' alt='Hero-1' width={139} height={191} className='w-full h-full object-cover group-hover:scale-105 duration-500' />
                                                </div>
                                                <div className='w-full col-span-9 flex flex-col gap-y-[50px]'>
                                                      <h2 className='font-normal text-[24px] text-theme-secondary'>&quot;We are commited to develop general aviation airport of Indonesia&quot;</h2>
                                                      <div className='flex items-center gap-x-6'>
                                                            <ButtonTextIcon link={'#'} className='w-max flex items-center gap-x-[14px]'>
                                                                  <h2 className='font-medium lg:text-sm text-xs'>
                                                                        Get Started Now
                                                                  </h2>
                                                                  <IconRight className='w-6 h-6 text-white toRight' />
                                                            </ButtonTextIcon>
                                                            <ButtonOutline link='#' className='w-max'>
                                                                  View Services
                                                            </ButtonOutline>
                                                      </div>
                                                </div>
                                          </div>
                                    </motion.div>
                                    {/* Right */}
                                    <motion.div
                                          initial={{ opacity: 0, x: 100 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ duration: 0.8 }}
                                          className='w-full col-span-1 flex flex-col'>
                                          <div className='w-full h-[450px] rounded-[16px] overflow-hidden group mb-[14px]'>
                                                <Image src='/assets/images/hero-2.svg' alt='Hero-2' width={634} height={450} className='w-full h-full object-cover group-hover:scale-105 duration-500' />
                                          </div>
                                          <div className='w-full h-auto flex items-center justify-end p-5'>
                                                <div className='flex flex-col border-r border-slate-200 pr-[24px]'>
                                                      <div className='flex items-center gap-x-[14px]'>
                                                            <IconStarsCircle className='w-[60px] h-[60px] text-theme-donker' />
                                                            <h2 className="font-bold text-[64px]">
                                                                  {count}+
                                                            </h2>
                                                      </div>
                                                      <h2 className='font-normal text-base '>Years of Experience</h2>
                                                </div>
                                                <div className='pl-[24px] flex flex-col items-start'>
                                                      <h2 className='font-normal text-base mb-4'>Years of Experience</h2>
                                                      <div className='flex items-center gap-x-4'>
                                                            <Image src='/assets/logo/dai.svg' alt='Logo' width={106} height={60} className='w-[106px] h-auto object-cover' />
                                                            <Image src='/assets/logo/pes.svg' alt='Logo' width={106} height={60} className='w-[106px] h-auto object-cover' />
                                                      </div>
                                                </div>
                                          </div>
                                    </motion.div>
                              </div>
                              {/* Mobile */}
                              <div className='flex lg:hidden flex-col gap-y-[18px]'>
                                    <div className='w-full md:h-[400px] h-[254px] overflow-hidden rounded-[16px] relative'>
                                          <Image src='/assets/images/hero-2.svg' alt='Hero-1' width={357} height={254} className='w-full h-full object-cover' />
                                          <div className='p-[10px] rounded-[8px] bg-white/80 backdrop-blur-sm absolute top-[7px] left-[7px] flex flex-col items-start'>
                                                <h2 className='font-normal text-[10px] mb-[14px]'>Years of Experience</h2>
                                                <div className='flex items-center gap-x-[24px]'>
                                                      <Image src='/assets/logo/dai.svg' alt='Logo' width={42} height={24} className='w-[42px] h-auto object-cover' />
                                                      <Image src='/assets/logo/pes.svg' alt='Logo' width={42} height={24} className='w-[42px] h-auto object-cover' />
                                                </div>
                                          </div>
                                          <div className='p-[10px] rounded-[8px] bg-white/80 backdrop-blur-sm flex flex-col absolute bottom-[7px] right-[7px] '>
                                                <div className='flex items-center gap-x-[14px]'>
                                                      <IconStarsCircle className='w-[24px] h-[24px] text-theme-donker' />
                                                      <h2 className='font-bold text-[32px]'>18+</h2>
                                                </div>
                                                <h2 className='font-normal text-[10px] '>Years of Experience</h2>
                                          </div>
                                    </div>
                                    <div className='flex flex-col items-center justify-center'>
                                          <h2 className='font-bold text-[34px] text-theme-brand text-center leading-normal mb-6'>General <span className='text-theme-red'>Aviation Solution</span> and Airport Services</h2>
                                          <h2 className='font-normal text-base text-theme-secondary text-center mb-[50px]'>&quot;We are commited to develop general aviation airport of Indonesia&quot;</h2>
                                          <div className='flex items-center gap-x-6'>
                                                <ButtonTextIcon link={'#'} className='w-max flex items-center gap-x-[14px]'>
                                                      <h2 className='font-medium lg:text-sm text-xs'>
                                                            Get Started Now
                                                      </h2>
                                                      <IconRight className='w-6 h-6 text-white' />
                                                </ButtonTextIcon>
                                                <ButtonOutline link='#' className='w-max'>
                                                      View Services
                                                </ButtonOutline>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
