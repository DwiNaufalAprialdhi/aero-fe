import LabelSectionLight from '@/components/material/LabelSectionLight'
import Image from 'next/image'
import React from 'react'

export default function OurVision() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative z-[2] text-slate-50'>
                        <section className='container_section grid lg:grid-cols-2 md:gap-[50px] gap-6 grid-cols-1 items-center justify-center'>
                              {/* LEFT */}
                              <div className='w-full col-span-1 flex flex-col lg:order-1 order-2'>
                                    <LabelSectionLight title='Our Vision' />
                                    <h2 className='w-full md:max-w-[469px] max-w-none text-start font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2'>
                                          Shaping the Future <span className='font-bold'>of</span> <span className='font-bold text-theme-red'>Aviation</span>
                                    </h2>
                                    <div className='w-full flex flex-col lg:mt-[50px] mt-6'>
                                          <h2 className='font-bold lg:text-[128px] text-[32px] leading-none'>“</h2>
                                          <p className=' font-normal lg:text-[32px] text-base leading-normal text-start lg:-translate-y-12'>
                                                &quot;to become the leading Aviation Ecosystem Enabler in Indonesia by delivering comprehensive, end-to-end services across aviation infrastructure, aircraft operations, and aircraft maintenance”&quot;
                                          </p>
                                          <h2 className='font-bold lg:text-[128px] text-[32px] leading-none text-end lg:-translate-y-12'>“</h2>
                                    </div>
                              </div>
                              {/* RIGHT */}
                              <div className='w-full col-span-1 md:h-[550px] h-[280px] relative overflow-hidden lg:order-2 order-1'>
                                    <Image
                                          src='/assets/images/shaping.svg'
                                          alt='about'
                                          width={500} height={500}
                                          className='w-full absolute h-full object-cover z-[2] top-[-20px] right-[-20px]'
                                    />
                                    <div className='w-full h-full absolute bottom-[-20px] left-[-20px] z-[1] bg-[#F9F400]'>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
