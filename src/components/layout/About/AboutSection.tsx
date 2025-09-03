import LabelSectionDark from '@/components/material/LabelSectionDark'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative lg:mb-[150px] mb-[50px]'>
                        <section className='container_section grid md:items-center items-start lg:grid-cols-2 grid-cols-1 lg:gap-[60px] gap-[50px]'>
                              {/* LEFT */}
                              <div className='w-full col-span-1 md:h-[550px] h-[280px] relative overflow-hidden'>
                                    <Image
                                          src='/assets/images/about.svg'
                                          alt='about'
                                          width={500} height={500}
                                          className='w-full absolute h-full object-cover z-[2] top-[-20px] right-[-20px]'
                                    />
                                    <div className='w-full h-full absolute bottom-[-20px] left-[-20px] z-[1] bg-[#F9F400]'>
                                    </div>
                              </div>
                              {/* Right */}
                              <div className="w-full col-span-1 flex flex-col">
                                    <LabelSectionDark title={'About Us'} />
                                    <h2 className="font-normal lg:text-[48px] text-[24px] text-slate-800 block lg:my-[14px] my-3">
                                          About <span className='font-bold'>Asia Aero</span>
                                    </h2>
                                    <div className='flex flex-col font-normal lg:text-base text-sm text-slate-800 lg:gap-y-[14px] gap-y-3'>
                                          <span>
                                                PT. Asia Aero Technology (AAT) is a privately held company operating in the aviation sector, established in 2007 as the official representative for Rotax in Indonesia. In 2010, to support our growing operations, we acquired, built, and began operating Wiladatika Airport in Cibubur, Jakarta. This strategic move enabled us to successfully develop a Maintenance, Repair, and Overhaul (MRO) center specializing in helicopters and general aviation.
                                          </span>

                                          <span>
                                                As we continue to grow, we are committed to becoming Indonesia’s leading aviation supply chain provider. Our expanding network and capabilities allow us to support the Indonesian military, aircraft operators, and MROs across the country. In 2022, we strengthened our position through mergers and acquisitions with several prominent Indonesian aviation companies. Today, our group’s capabilities include Design Organization Approval (DOA), Aircraft Maintenance Organization (AMO 145), Operator Certificate (OC91), and Flying Club operations.
                                          </span>

                                          <span>
                                                Looking ahead, our vision is to build a comprehensive aviation industry ecosystem that supports the dynamic growth of Indonesia’s aviation sector.
                                          </span>

                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
