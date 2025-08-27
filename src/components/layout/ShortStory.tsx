/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import BadgeCategory from '../ui/BadgeCategory'
import Image from 'next/image'
import Services from '../ui/Services'
import IconPlane from '../icon/IconPlane'
import IconVerified from '../icon/IconVerified'
import IconSetting from '../icon/IconSetting'
import IconBuillding from '../icon/IconBuillding'
import Wide from '../ui/Wide'
import AOS from "aos";
import ButtonTextIcon from '../material/ButtonTextIcon'
import IconRight from '../icon/IconRight'
import Button from '../material/Button'
import LabelSectionLight from '../material/LabelSectionLight'

export default function ShortStory() {

      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <main className='w-full h-max py-[150px] relative bg-[#1E293B] mt-[136px]'>
                        {/* LAYER SINCE */}
                        <div className='w-max h-max absolute top-[-80px] left-0 py-5 pl-5 lg:pr-[230px] pr-20 bg-slate-50 z-[2] flex flex-col gap-2 text-slate-800 overflow-hidden' style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 80px) 100%, 0 100%)" }}>
                              <p className='font-normal lg:text-base text-xs'>
                                    Short Story
                              </p>
                              <h2 className='font-bold md:text-[48px] text-[20px] text-slate-800 leading-tight'>
                                    Established <span className='text-[#BC1328]'>Since 2007</span>
                              </h2>
                              <p className='font-normal lg:text-base text-xs block lg:max-w-none max-w-[200px]'>
                                    Since we were established, we always growing along with general aviation
                              </p>

                              <div className='w-max h-max absolute z-[3] top-[-40px] right-[125px] lg:flex hidden items-start justify-start gap-4 '>
                                    <div className='w-[23px] h-[500px] rotate-[25deg] bg-[#BC1328]'>
                                    </div>
                                    <div className='w-[23px] h-[500px] rotate-[25deg] bg-[#F9F400]'>
                                    </div>
                                    <div className='w-[23px] h-[500px] rotate-[25deg] bg-[#352B5A]'>
                                    </div>
                              </div>
                        </div>
                        {/* ORNAMENT */}
                        <div className='w-full h-full absolute top-0 inset-x-0 pointer-events-none z-[1]'>
                              <Image
                                    src="/assets/images/ornament-background.svg"
                                    alt="Ornament"
                                    width={1000}
                                    height={1000}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        {/* CONTENT */}
                        <div className='w-full h-max relative z-[2] flex flex-col'>
                              {/* TEASER */}
                              <div className='w-full grid grid-cols-10 lg:gap-[50px] gap-5 lg:mb-[150px] mb-[100px] lg:max-w-[1200px] max-w-none mx-auto h-max lg:px-0 px-5'>
                                    {/* LEFT */}
                                    <div className='w-full lg:col-span-7 col-span-10 lg:h-[518px] h-[300px] overflow-hidden'>
                                          <Image src='/assets/images/since.svg' alt='Since' width={974} height={550} className='w-full h-full object-cover' />
                                    </div>
                                    {/* RIGHT */}
                                    <div className='w-full lg:h-auto h-max lg:col-span-3 col-span-10 overflow-hidden flex flex-col items-start lg:justify-between justify-start lg:gap-6 gap-5'>
                                          <Services title='Light Sport Aircraft'>
                                                <IconPlane className=' lg:min-w-[60px] min-w-[48px] lg:h-[60px] h-[48px] text-[#334155]' />
                                          </Services>
                                          <Services title='Certified Engine Maintenance'>
                                                <IconVerified className='lg:min-w-[60px] min-w-[48px] lg:h-[60px] h-[48px] text-[#334155]' />
                                          </Services>
                                          <Services title='Engine Spare Parts'>
                                                <IconSetting className='lg:min-w-[60px] min-w-[48px] lg:h-[60px] h-[48px] text-[#334155]' />
                                          </Services>
                                          <Services title='Develop Wiladatika Private Airport'>
                                                <IconBuillding className='lg:min-w-[60px] min-w-[48px] lg:h-[60px] h-[48px] text-[#334155]' />
                                          </Services>
                                    </div>
                              </div>
                              {/* SPECK */}
                              <div className='w-full h-max lg:px-0 px-5 py-[50px] lg:mb-[150px] mb-[100px] relative overflow-hidden'>
                                    {/* BACKGROUND METTERS */}
                                    <div className='w-full h-full absolute top-0 inset-x-0 pointer-events-none z-[-1]'>
                                          <Image src='/assets/images/background-metters.png' alt='background' width={1500} height={500} className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-full lg:max-w-[1200px] max-w-none mx-auto h-max lg:px-0 px-5 relative z-[2] grid lg:grid-cols-4 grid-cols-2 gap-[50px]'>
                                          <div className='w-full col-span-1'>
                                                <Wide wide='760 m' title='RUNAWAY LENGHT' images='/assets/images/speck-1.png' />
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <Wide wide='8 Units' title='AIRCRAFT HANGARS' images='/assets/images/speck-2.png' />
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <Wide wide='20 Ha' title='TOTAL AIRPORT AREA' images='/assets/images/speck-3.png' />
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <Wide wide='4.120 m2' title='TOTAL HANGARS' images='/assets/images/speck-4.png' />
                                          </div>
                                    </div>
                              </div>
                              {/* LOCATION */}
                              <div className='w-full grid grid-cols-12 lg:max-w-[1200px] max-w-none mx-auto h-max lg:px-0 px-5 lg:gap-[40px] gap-5 leading-tight'>
                                    {/* LEFT */}
                                    <div className='w-full lg:col-span-5 col-span-12 flex flex-col lg:gap-[50px] gap-5'>
                                          <div className='w-max h-max mb-[14px]'>
                                                <LabelSectionLight title={'Our Facilities'} />
                                          </div>
                                          <h2 className='font-bold lg:text-[64px] text-[40px] text-slate-50'>
                                                <span className='text-[#BC1328]'>Aviation Maintenance</span> and Hangar Leasing
                                          </h2>
                                          <Button link={'#'} className='flex items-center justify-center gap-x-2 lg:w-max w-full h-max'
                                                icon={
                                                      <><IconRight className='w-6 h-6 toRight' />
                                                      </>
                                                } >
                                                See location on map
                                          </Button>
                                    </div>
                                    {/* RIGHT */}
                                    <div className='w-full lg:col-span-7 col-span-12 overflow-hidden lg:h-[518px] h-max'>
                                          <Image src="/assets/images/hangar.svg" alt="hangar-locate" width={900} height={550} className='' />
                                    </div>
                              </div>
                        </div>
                        {/* LAYER BOTTOM */}
                        <div className='lg:w-[672px] w-[300px] h-[60px] lg:h-[100px] absolute bottom-0 right-0 bg-white py-4 pr-4 pl-20 flex items-center lg:gap-6 gap-3 z-[2]'
                              style={{ clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%)" }}
                        >
                        </div>
                  </main>
            </>
      )
}
