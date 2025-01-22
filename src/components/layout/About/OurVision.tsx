import BadgeCategory from '@/components/ui/BadgeCategory'
import React from 'react'

export default function OurVision() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative lg:mb-[0px] mb-[50px]'>
                        <section data-aos='fade-up' className='container_section flex flex-col items-center justify-center'>
                              <BadgeCategory>
                                    Our Vision
                              </BadgeCategory>
                              <h2 className='w-full md:max-w-[469px] max-w-none mx-auto text-center font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2'>
                                    Shaping the Future <span className='font-bold text-slate-800'>of</span> <span className='font-bold text-theme-red'>Aviation</span>
                              </h2>
                              <div className='w-full flex flex-col gap-y-0 md:max-w-[900px] max-w-none'>
                                    <h2 className='font-bold lg:text-[128px] text-[32px] leading-none'>“</h2>
                                    <p className=' font-normal lg:text-[32px] text-base leading-normal text-slate-800 text-center lg:-translate-y-12'>
                                          &quot;To become the number one Aviation Ecosystem Enabler in Indonesia by providing end to end services, within aviation infrastructure, aircraft operations, and aircraft maintenance in Military and Civil Markets.&quot;
                                    </p>
                                    <h2 className='font-bold lg:text-[128px] text-[32px] leading-none text-end lg:-translate-y-12'>“</h2>
                              </div>
                        </section>
                  </main>
            </>
      )
}
