import React, { useEffect } from 'react'
import AOS from "aos";
import ButtonTextIcon from '@/components/material/ButtonTextIcon';
import Icon from '@/components/icon/Icon';
import LabelSectionDark from '@/components/material/LabelSectionDark';

export default function OurTeam() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);
      return (
            <>
                  <main className="w-full h-auto overflow-hidden relative lg:mb-[250px] mb-[200px]">
                        <section className='w-full overflow-hidden flex lg:justify-end justify-normal relative z-[2]'>
                              <div className='w-full container_section grid grid-cols-10 items-center relative lg:gap-[20px] gap-[20px]'>
                                    <div className='w-full lg:h-[518px] md:h-[400px] h-[214px] overflow-hidden lg:col-span-4 col-span-10 relative'>
                                          <iframe className='w-full h-full lg:rounded-none rounded-[16px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4791.387785516313!2d106.89265288426435!3d-6.35695647721625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecc77559bab1%3A0xbd4d807ff4a434c!2sPT.%20Asia%20Aero%20Technology!5e1!3m2!1sid!2sid!4v1738118631816!5m2!1sid!2sid" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>

                                    <div className='w-full lg:max-w-none md:max-w-[696px] max-w-none lg:mx-0 mx-auto lg:col-span-6 col-span-10 lg:items-start lg:justify-start items-center justify-center flex flex-col p-5 lg:text-start text-center'>
                                          <LabelSectionDark title='Our Location' />
                                          <h2 className='font-bold lg:text-[48px] text-[36px] leading-tight text-theme-donker mt-[14px] lg:mb-[50px] mb-6'>
                                                Connecting <span className='text-theme-red'>Near and Far</span>
                                          </h2>
                                          <div className='w-full flex flex-col lg:items-start lg:justify-start lg:text-start text-center lg:mb-[50px] mb-6'>
                                                <h2 className='font-semibold lg:text-[24px] text-sm mb-6'>
                                                      Head Quarters
                                                </h2>
                                                <div className='lg:mx-0 mx-auto flex items-center gap-x-2 mb-[14px]'>
                                                      <Icon.mark className='lg:w-6 lg:h-6 w-4 h-4' />
                                                      <h2 className='font-semibold underline lg:text-base text-sm'>
                                                            Wiladatika Private Airport
                                                      </h2>
                                                </div>
                                                <p className='w-full md:max-w-[500px] max-w-none font-normal lg:text-base text-sm text-slate-400'>
                                                      Komplek Bumi Perkemahan BUPERTA, Cibubur, Cipayung, Jakarta Timur Indonesia - 13850
                                                </p>
                                          </div>
                                          <ButtonTextIcon link={'https://www.google.com/maps?ll=-6.356956,106.897524&z=16&t=h&hl=id&gl=ID&mapclient=embed&cid=852543758339294028'} className='w-max flex items-center gap-x-[14px]'>
                                                <h2 className='font-medium lg:text-sm text-xs'>
                                                      See location on map
                                                </h2>
                                                <Icon.arrowRight className='w-6 h-6 text-white toRight' />
                                          </ButtonTextIcon>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
