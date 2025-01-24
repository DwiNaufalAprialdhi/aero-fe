import BadgeCategory from '@/components/ui/BadgeCategory'
import Image from 'next/image'
import React from 'react'

export default function OurStrategic() {
      return (
            <>
                  <main className="w-full overflow-hidden lg:mb-[150px] mb-[50px]">
                        <section className='container_section lg:mb-[0px] mb-6'>
                              {/* Text */}
                              <div data-aos="fade-right" className='w-full flex flex-col items-center justify-center'>
                                    <BadgeCategory>
                                          Our Strategic Partners
                                    </BadgeCategory>
                                    <h2 className='w-full text-center font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold text-slate-800'>Our Trusted</span> <span className='font-bold text-theme-red'>Partners</span>
                                    </h2>
                              </div>
                        </section>
                        <section className='container_section grid grid-cols-2 lg:gap-6 gap-5'>
                              <div data-aos="fade-right" className='w-full h-auto col-span-1 bg-slate-100 p-5 lg:rounded-[16px] rounded-[8px] grid lg:grid-cols-1 grid-cols-1 items-center gap-5'>
                                    {/* Image */}
                                    <div className='w-full col-span-1 overflow-hidden'>
                                          <Image
                                                src='/assets/logo/dai.svg'
                                                width={800}
                                                height={500}
                                                alt='Our Strategic Partners'
                                                className='w-full h-auto object-cover'
                                          />
                                    </div>
                                    {/* Text */}
                                    <div className='w-full col-span-1 flex flex-col'>
                                          <h2 className='font-semibold lg:text-[24px] text-sm leading-normal mb-2'>
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
                              </div>
                              <div data-aos="fade-left" className='w-full h-auto col-span-1 bg-slate-100 p-5 lg:rounded-[16px] rounded-[8px] grid lg:grid-cols-1 grid-cols-1 items-center gap-5'>
                                    {/* Image */}
                                    <div className='w-full col-span-1 overflow-hidden'>
                                          <Image
                                                src='/assets/logo/prizma.svg'
                                                width={800}
                                                height={500}
                                                alt='Our Strategic Partners'
                                                className='w-full h-auto object-cover'
                                          />
                                    </div>
                                    {/* Text */}
                                    <div className='w-full col-span-1 flex flex-col'>
                                          <h2 className='font-semibold lg:text-[24px] text-sm leading-normal mb-2'>
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
                              </div>
                        </section>
                  </main>
            </>
      )
}
