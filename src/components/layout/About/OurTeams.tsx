import LabelSectionDark from '@/components/material/LabelSectionDark'
import Image from 'next/image'
import React from 'react'

export default function OurTeams() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative z-[2] text-slate-800 lg:pb-[250px] pb-[200px]'>
                        <section className='container_section flex flex-col items-start justify-start'>
                              {/* Text */}
                              <div className='w-full flex flex-col'>
                                    <LabelSectionDark title='Our Teams' />
                                    <h2 className='w-full md:max-w-[500px] max-w-none font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold'>Trusted Hands</span> <span className='font-bold text-slate-700'>Behind</span> <span className='font-bold text-theme-red'>Every Flight</span>
                                    </h2>
                              </div>
                              {/* Teams */}
                              <div className='w-full grid md:grid-cols-4 grid-cols-2 lg:gap-6 gap-5'>
                                    <div className='w-full lg:h-[346px] h-max col-span-1 overflow-hidden'>
                                          <Image src={'/assets/images/teams1.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-full lg:h-[346px] h-max col-span-1 overflow-hidden'>
                                          <Image src={'/assets/images/teams2.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-full lg:h-[346px] h-max col-span-1 overflow-hidden'>
                                          <Image src={'/assets/images/teams1.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-full lg:h-[346px] h-max col-span-1 overflow-hidden'>
                                          <Image src={'/assets/images/teams2.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-full lg:h-[346px] h-max col-span-1 overflow-hidden'>
                                          <Image src={'/assets/images/teams1.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-full lg:h-[346px] h-max col-span-1 overflow-hidden'>
                                          <Image src={'/assets/images/teams2.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-full lg:h-[346px] h-max col-span-1 overflow-hidden'>
                                          <Image src={'/assets/images/teams1.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-full lg:h-[346px] h-max col-span-1 overflow-hidden'>
                                          <Image src={'/assets/images/teams2.svg'} alt='teams' width={300} height={400} className='w-full h-full object-contain' />
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
