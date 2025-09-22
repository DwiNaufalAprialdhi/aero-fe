import LabelSectionLight from '@/components/material/LabelSectionLight'
import Image from 'next/image'
import React from 'react'

export default function OurMission() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative z-[2] text-slate-50'>
                        <section className='container_section flex lg:flex-row flex-col items-start md:gap-[50px] gap-6 grid-cols-1 justify-center'>
                              {/* LEFT */}
                              <div className='lg:w-[420px] w-full flex-shrink-0 md:h-[660px] h-[280px] relative overflow-hidden lg:order-1 order-1'>
                                    <Image
                                          src='/assets/images/mission.svg'
                                          alt='about'
                                          width={500} height={500}
                                          className='w-full absolute h-full object-cover z-[2] top-[-20px] right-[-20px]'
                                    />
                                    <div className='w-full h-full absolute bottom-[-20px] left-[-20px] z-[1] bg-[#F9F400]'>
                                    </div>
                              </div>
                              {/* RIGHT */}
                              <div className='w-full flex-grow flex flex-col lg:order-2 order-2'>
                                    <LabelSectionLight title='Our Mission' />
                                    <div className='w-full flex flex-col lg:gap-6 gap-5 lg:mt-[50px] mt-6'>
                                          {/* LIST 1 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>
                                                      Acted as an Aviation Industry growth catalysator by developing several Aviation infrastructures such as airport, aviation park, training facility, and other aviation related facility which is become the center of the aviation activities in the region.
                                                </h2>
                                          </div>
                                          {/* LIST 2 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>
                                                      Providing aviation product, spare parts, and maintenance service for the Indonesia Aviation Industry
                                                </h2>
                                          </div>
                                          {/* LIST 3 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>
                                                      Ensuring flight and aviation safety as a core concern in every aspect of our company operation
                                                </h2>
                                          </div>
                                          {/* LIST 4 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>
                                                      Enhancing and maximizing Stakeholder Value by streamlining business process, mechanization and automation to achieve efficient operation, minimized cost, and deliver quality services and products above its customer expectation.
                                                </h2>
                                          </div>
                                          {/* LIST 5 */}
                                          <div className='w-full flex items-start justify-start gap-[14px]'>
                                                <div className='lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                                                      <div className='lg:w-[18px] lg:h-[18px] w-[15px] h-[15px] rounded-full bg-[#352B5A]'></div>
                                                </div>
                                                <h2 className='w-full block font-normal lg:text-[20px] text-sm text-slate-100 leading-tight'>
                                                      Continuous Improvement, innovation, and adaptation to the dynamic aviation industry market
                                                </h2>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
