import LabelSectionLight from '@/components/material/LabelSectionLight'
import Image from 'next/image'
import React, { useState } from 'react'

export default function OurStrategic() {
      const [isLeftExpanded, setIsLeftExpanded] = useState(true)
      return (
            <>
                  <main className="w-full overflow-hidden relative z-[2] text-slate-50">
                        <section className='container_section lg:mb-[0px] mb-6'>
                              {/* Text */}
                              <div className='w-full flex flex-col items-center justify-center'>
                                    <LabelSectionLight title='Our Strategic Partners' />
                                    <h2 className='w-full text-center font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold'>Our Trusted</span> <span className='font-bold text-theme-red'>Partners</span>
                                    </h2>
                              </div>
                        </section>
                        <section className="container_section flex items-center lg:gap-6 gap-4">
                              {/* Left */}
                              <div
                                    onClick={() => setIsLeftExpanded(true)}
                                    className={`overflow-hidden transition-all relative duration-500 ease-in-out h-[422px] flex-shrink-0 cursor-pointer grid md:grid-cols-2 grid-cols-1 items-center gap-6 p-5 ${isLeftExpanded ? 'md:w-[90%] w-[85%] bg-slate-100' : 'w-[10%] bg-slate-400'
                                          }`}
                              >
                                    {isLeftExpanded ?
                                          <>
                                                {/* Image */}
                                                <a href='https://dinamikaaviasi.com/' target='_blank' className='w-full col-span-1 overflow-hidden flex items-center justify-center'>
                                                      <Image
                                                            src='/assets/logo/dai.svg'
                                                            width={800}
                                                            height={500}
                                                            alt='Our Strategic Partners'
                                                            className='w-full h-full object-contain'
                                                      />
                                                </a>
                                                {/* Text */}
                                                <div className='w-full col-span-1 flex flex-col'>
                                                      <h2 className='font-semibold lg:text-[24px] text-sm leading-normal mb-2 text-slate-800'>
                                                            Approved by DGCA DOA Certf No : DOA.21J.009
                                                      </h2>
                                                      <ul className='lg:pl-5 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Suplemental Type Certf Class C
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Aircraft
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  2 folding tables
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Specialized Services
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Modification Required by Airworthiness
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Directives/Operations/Customer Requirement
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Repair Major and Minor
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Alteration Major and Minor
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Structure Cabin Interior & Associated Systems
                                                            </li>
                                                      </ul>
                                                </div>
                                          </>
                                          :
                                          <>
                                                <h2 className="md:text-[24px] text-base font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-800 whitespace-nowrap transform -rotate-90">
                                                      DINAMIKA AVIASI INDONESIA
                                                </h2>
                                          </>
                                    }

                              </div>
                              {/* Right */}
                              <div
                                    onClick={() => setIsLeftExpanded(false)}
                                    className={`overflow-hidden transition-all relative duration-500 ease-in-out h-[422px] flex-shrink-0 cursor-pointer grid md:grid-cols-2 grid-cols-1 items-center gap-6 p-5 ${isLeftExpanded ? 'w-[10%] bg-slate-400' : 'md:w-[90%] w-[85%] bg-slate-100'
                                          }`}
                              >
                                    {isLeftExpanded ?
                                          <>
                                                <h2 className="md:text-[24px] text-base font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-800 whitespace-nowrap transform -rotate-90">
                                                      PRIZMA AERO SENTOSA
                                                </h2>
                                          </> : <>
                                                {/* Image */}
                                                <a href='https://www.prizma-aero.com/' target='_blank' className='w-full col-span-1 overflow-hidden flex items-center justify-center'>
                                                      <Image
                                                            src='/assets/logo/prizma.svg'
                                                            width={800}
                                                            height={500}
                                                            alt='Our Strategic Partners'
                                                            className='w-full h-full object-contain'
                                                      />
                                                </a>
                                                {/* Text */}
                                                <div className='w-full col-span-1 flex flex-col'>
                                                      <h2 className='font-semibold lg:text-[24px] text-sm leading-normal mb-2 text-slate-800'>
                                                            Approved by DGCA AMO NO. 145D-1058
                                                      </h2>
                                                      <ul className='lg:pl-5 pl-3 w-full h-max lg:max-w-[500px] max-w-none list-disc'>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Airframe Cessna 172 Series
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Engine Rotax 582/ 912 / 914 Series
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Specialized Services
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Cabin Interior Furnishing
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Aircraft Interior/Exterior Painting
                                                            </li>
                                                            <li className='font-normal lg:text-base text-xs text-slate-600'>
                                                                  Structure Repair & Alteration
                                                            </li>
                                                      </ul>
                                                </div>
                                          </>}
                              </div>
                        </section>
                  </main>
            </>
      )
}
