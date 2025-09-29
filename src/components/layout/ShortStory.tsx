/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import Image from 'next/image'
import Services from '../ui/Services'
import IconPlane from '../icon/IconPlane'
import IconVerified from '../icon/IconVerified'
import IconSetting from '../icon/IconSetting'
import IconBuillding from '../icon/IconBuillding'
import Wide from '../ui/Wide'
import AOS from "aos";
import IconRight from '../icon/IconRight'
import Button from '../material/Button'
import LabelSectionLight from '../material/LabelSectionLight'
import Certificate from './About/Certificate'
import { useLangContext } from '../hooks/LangContext'

export default function ShortStory() {
      const { lang } = useLangContext()

      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);

      return (
            <>
                  <main className='w-full h-max py-[150px] relative bg-[#151126] mt-[136px]'>
                        {/* LAYER SINCE */}
                        <div className='w-max h-max absolute top-[-80px] left-0 py-5 pl-5 lg:pr-[230px] pr-20 bg-slate-50 z-[2] flex flex-col gap-2 text-slate-800 overflow-hidden' style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 80px) 100%, 0 100%)" }}>
                              <p className='font-normal lg:text-base text-xs'>
                                    {lang === 'ID' ? 'Cerita Singkat' : 'Short Story'}
                              </p>
                              {lang === 'ID' ? <>
                                    <h2 className='font-bold md:text-[48px] text-[24px] text-slate-800 leading-tight'>
                                          Berdiri <span className='text-[#BC1328]'>Sejak 2007</span>
                                    </h2>
                                    <p className='font-normal lg:text-base text-xs block lg:max-w-[700px] max-w-[200px]'>
                                          Sejak kami berdiri, kami selalu berkembang seiring dengan perkembangan penerbangan umum
                                    </p>
                              </> : <>
                                    <h2 className='font-bold md:text-[48px] text-[24px] text-slate-800 leading-tight'>
                                          Established <span className='text-[#BC1328]'>Since 2007</span>
                                    </h2>
                                    <p className='font-normal lg:text-base text-xs block lg:max-w-none max-w-[200px]'>
                                          Since we were established, we always growing along with general aviation
                                    </p>
                              </>}
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
                                          <Services title={lang === 'ID' ? 'Pesawat Olahraga Ringan' : 'Light Sport Aircraft'}>
                                                <IconPlane className=' lg:min-w-[60px] min-w-[48px] lg:h-[60px] h-[48px] text-[#334155]' />
                                          </Services>
                                          <Services title={lang === 'ID' ? 'Perawatan Mesin Bersertifikat' : 'Certified Engine Maintenance'}>
                                                <IconVerified className='lg:min-w-[60px] min-w-[48px] lg:h-[60px] h-[48px] text-[#334155]' />
                                          </Services>
                                          <Services title={lang === 'ID' ? 'Suku Cadang Mesin' : 'Engine Spare Parts'}>
                                                <IconSetting className='lg:min-w-[60px] min-w-[48px] lg:h-[60px] h-[48px] text-[#334155]' />
                                          </Services>
                                          <Services title={lang === 'ID' ? 'Mengembangkan Bandara Swasta Wiladatika' : 'Develop Wiladatika Private Airport'}>
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
                                                <Wide wide='760 m' title={lang === 'ID' ? 'PANJANG LANDASAN PACU' : 'RUNAWAY LENGHT'} images='/assets/images/speck-1.png' />
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <Wide wide='8 Units' title={lang === 'ID' ? 'HANGGAR PESAWAT' : 'AIRCRAFT HANGARS'} images='/assets/images/speck-2.png' />
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <Wide wide='20 Ha' title={lang === 'ID' ? 'TOTAL LUAS BANDARA' : 'TOTAL AIRPORT AREA'} images='/assets/images/speck-3.png' />
                                          </div>
                                          <div className='w-full col-span-1'>
                                                <Wide wide='4.120 m2' title={lang === 'ID' ? 'TOTAL HANGGAR' : 'TOTAL HANGARS'} images='/assets/images/speck-4.png' />
                                          </div>
                                    </div>
                              </div>
                              {/* LOCATION */}
                              <div className='w-full grid grid-cols-12 lg:max-w-[1200px] max-w-none mx-auto h-max lg:mb-[150px] mb-[100px] lg:px-0 px-5 lg:gap-[40px] gap-5 leading-tight'>
                                    {/* LEFT */}
                                    <div className='w-full lg:col-span-5 col-span-12 flex flex-col lg:gap-[50px] gap-5'>
                                          <div className='w-max h-max mb-[14px]'>
                                                <LabelSectionLight title={`${lang === 'ID' ? 'Fasilitas bandara wiladatika' : 'Wiladatika airport facilities'}`} />
                                          </div>
                                          {lang === 'ID' ? <>
                                                <h2 className='font-bold lg:text-[64px] text-[24px] text-slate-50'>
                                                      <span className='text-[#BC1328]'>Perawatan Penerbangan</span> dan Penyewaan Hanggar
                                                </h2>
                                                <Button link={'https://www.google.com/maps?ll=-6.356956,106.897524&z=16&t=h&hl=en&gl=US&mapclient=embed&cid=852543758339294028'} className='flex items-center justify-center gap-x-2 lg:w-max w-full h-max'
                                                      icon={
                                                            <><IconRight className='w-6 h-6 toRight' />
                                                            </>
                                                      } >
                                                      Lihat lokasi di peta
                                                </Button>
                                          </> : <>
                                                <h2 className='font-bold lg:text-[64px] text-[24px] text-slate-50'>
                                                      <span className='text-[#BC1328]'>Aviation Maintenance</span> and Hangar Leasing
                                                </h2>
                                                <Button link={'https://www.google.com/maps?ll=-6.356956,106.897524&z=16&t=h&hl=en&gl=US&mapclient=embed&cid=852543758339294028'} className='flex items-center justify-center gap-x-2 lg:w-max w-full h-max'
                                                      icon={
                                                            <><IconRight className='w-6 h-6 toRight' />
                                                            </>
                                                      } >
                                                      See location on map
                                                </Button>
                                          </>}
                                    </div>
                                    {/* RIGHT */}
                                    <div className='w-full lg:col-span-7 col-span-12 overflow-hidden lg:h-[518px] h-max'>
                                          <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4791.387789962295!2d106.897524!3d-6.356956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecc77559bab1%3A0xbd4d807ff4a434c!2sPT.%20Asia%20Aero%20Technology!5e1!3m2!1sen!2sus!4v1756540296774!5m2!1sen!2sus" loading="lazy"></iframe>
                                    </div>
                              </div>
                              <Certificate />
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
