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

export default function ShortStory() {

      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <main className='bg-theme-opacity lg:py-[90px] py-[40px] overflow-x-hidden'>
                        <section data-aos='slide-right' className='container_section'>
                              <div className='flex flex-col mb-6'>
                                    <BadgeCategory>
                                          Short Story
                                    </BadgeCategory>
                                    <h2 className='font-normal lg:font-bold lg:text-[48px] text-[30px] my-[14px]'>Established <span className='font-bold'>Since 2007</span></h2>
                                    <p className='font-normal text-base'>Since we were established, we always growing along with general aviation</p>
                              </div>
                              <div className='w-full flex lg:hidden flex-col gap-y-6 mb-[50px]'>
                                    <Services title='Light Sport Aircraft'>
                                          <IconPlane className='lg:w-[74px] w-[48px] lg:h-[74px] h-[48px] text-[#334155]' />
                                    </Services>
                                    <Services title='Certified Engine Maintenance'>
                                          <IconVerified className='lg:w-[74px] w-[48px] lg:h-[74px] h-[48px] text-[#334155]' />
                                    </Services>
                                    <Services title='Engine Spare Parts'>
                                          <IconSetting className='lg:w-[74px] w-[48px] lg:h-[74px] h-[48px] text-[#334155]' />
                                    </Services>
                                    <Services title='Develop Wiladatika Private Airport'>
                                          <IconBuillding className='lg:w-[74px] w-[48px] lg:h-[74px] h-[48px] text-[#334155]' />
                                    </Services>
                              </div>
                        </section>
                        <section data-aos='slide-right' className='w-full lg:max-w-[1440px] max-w-none grid grid-cols-3 items-center relative gap-[50px] overflow-hidden'>
                              <div className='w-full lg:h-[518px] md:h-[400px] h-[246px] lg:rounded-r-[16px] rounded-none scale-105 lg:scale-100 overflow-hidden lg:col-span-2 col-span-3 group order-2 lg:order-1'>
                                    <Image src='/assets/images/short-story.svg' alt='Short Story' width={949} height={518} className='w-full h-full object-cover group-hover:scale-105 duration-500' />
                              </div>
                              <div className='w-full lg:col-span-1 col-span-3 hidden lg:flex flex-col gap-y-6 order-1 lg:order-2'>
                                    <Services title='Light Sport Aircraft'>
                                          <IconPlane className='lg:w-[74px] w-[48px] lg:h-[74px] h-[48px] text-[#334155]' />
                                    </Services>
                                    <Services title='Certified Engine Maintenance'>
                                          <IconVerified className='lg:w-[74px] w-[48px] lg:h-[74px] h-[48px] text-[#334155]' />
                                    </Services>
                                    <Services title='Engine Spare Parts'>
                                          <IconSetting className='lg:w-[74px] w-[48px] lg:h-[74px] h-[48px] text-[#334155]' />
                                    </Services>
                                    <Services title='Develop Wiladatika Private Airport'>
                                          <IconBuillding className='lg:w-[74px] w-[48px] lg:h-[74px] h-[48px] text-[#334155]' />
                                    </Services>
                              </div>
                        </section>
                        <section data-aos='fade-up' className='container_section grid grid-cols-2 gap-[50px] lg:mt-[150px] mt-[50px]'>
                              <div className='w-full lg:col-span-1 col-span-1 flex lg:flex-row flex-col gap-[50px]'>
                                    <div className='lg:pt-[143px] pt-0'>
                                          <Wide wide='760m' title='RUNAWAY LENGHT' images='/assets/images/runaway.png' />
                                    </div>
                                    <div className='lg:pb-[143px] pb-0'>
                                          <Wide wide='8 Units' title='AIRCRAFT HANGARS' images='/assets/images/aircraft.png' />
                                    </div>
                              </div>
                              <div className='w-full lg:col-span-1 col-span-1 flex lg:flex-row flex-col gap-[50px] pt-[160px] lg:pt-0'>
                                    <div className='lg:pt-[143px] pt-0'>
                                          <Wide wide='20Ha' title='TOTAL AIRPORT AREA' images='/assets/images/totalarea.png' />
                                    </div>
                                    <div className='lg:pb-[143px] pb-0'>
                                          <Wide wide='4' wideLatest='.120m2' title='TOTAL HANGARS' images='/assets/images/totallhangar.png' />
                                    </div>
                              </div>
                        </section>
                        <section data-aos='slide-left' className='w-full overflow-hidden lg:mt-[150px] mt-[50px] flex lg:justify-end justify-normal'>
                              <div className='w-full max-w-[1440px] grid grid-cols-3 items-center relative lg:gap-[50px] gap-[24px]'>
                                    <div className='w-full lg:max-w-none md:max-w-[696px] max-w-none lg:mx-0 mx-auto lg:col-span-1 col-span-3 lg:items-start lg:justify-start items-center justify-center flex flex-col p-5 lg:text-start text-center'>
                                          <BadgeCategory>
                                                Our Facilities
                                          </BadgeCategory>
                                          <h2 className='font-bold lg:text-[64px] text-[32px] text-theme-donker mt-[14px] mb-[50px]'>
                                                Aviation Maintenance and Hangar Leasing
                                          </h2>
                                          <ButtonTextIcon link={'https://www.google.com/maps?ll=-6.356956,106.897524&z=16&t=h&hl=id&gl=ID&mapclient=embed&cid=852543758339294028'} className='w-max flex items-center gap-x-[14px]'>
                                                <h2 className='font-medium lg:text-sm text-xs'>
                                                      See location on map
                                                </h2>
                                                <IconRight className='w-6 h-6 text-white toRight' />
                                          </ButtonTextIcon>
                                    </div>
                                    <div className='w-full lg:max-w-none md:max-w-[696px] max-w-[350px] lg:mx-0 md:mx-auto mx-auto lg:px-0 md:px-5 px-5 lg:h-[518px] md:h-[400px] h-[214px] lg:rounded-l-[16px] lg:rounded-r-none rounded-r-[16px] rounded-l-[16px] overflow-hidden lg:col-span-2 col-span-3 order-2 lg:order-1 relative'>
                                          <iframe className='w-full h-full lg:rounded-none rounded-[16px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4791.387785363366!2d106.89494887577587!3d-6.356956493633012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecc77559bab1%3A0xbd4d807ff4a434c!2sPT.%20Asia%20Aero%20Technology!5e1!3m2!1sid!2sid!4v1735223435493!5m2!1sid!2sid" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
