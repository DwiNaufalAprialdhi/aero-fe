import { useLangContext } from '@/components/hooks/LangContext'
import LabelSectionLight from '@/components/material/LabelSectionLight'
import Image from 'next/image'
import React from 'react'

export default function OurVision() {

      const { lang } = useLangContext();

      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative z-[2] text-slate-50'>
                        <section className='container_section grid lg:grid-cols-2 md:gap-[50px] gap-6 grid-cols-1 items-center justify-center'>
                              {/* LEFT */}
                              <div className='w-full col-span-1 flex flex-col lg:order-1 order-2'>
                                    <LabelSectionLight title={`${lang === 'ID' ? 'Visi' : 'Our Vision'}`} />
                                    <div className='w-full flex flex-col lg:mt-[50px] mt-6'>
                                          <h2 className='font-bold lg:text-[128px] text-[32px] leading-none'>“</h2>
                                          <p className=' font-normal lg:text-[32px] text-base leading-normal text-start lg:-translate-y-12'>
                                                {lang === 'ID' ? <>
                                                      &quot;Menjadi penyedia ekosistem aviasi terkemuka di Indonesia dengan memberikan layanan menyeluruh, yang meliputi infrastruktur penerbangan, operasi pesawat udara, dan pemeliharaan pesawat udara&quot;
                                                </> : <>
                                                      &quot;to become the leading Aviation Ecosystem Enabler in Indonesia by delivering comprehensive, end-to-end services across aviation infrastructure, aircraft operations, and aircraft maintenance&quot;
                                                </>}
                                          </p>
                                          <h2 className='font-bold lg:text-[128px] text-[32px] leading-none text-end lg:-translate-y-12'>“</h2>
                                    </div>
                              </div>
                              {/* RIGHT */}
                              <div className='w-full col-span-1 md:h-[550px] h-[280px] relative overflow-hidden lg:order-2 order-1'>
                                    <Image
                                          src='/assets/images/shaping.svg'
                                          alt='about'
                                          width={500} height={500}
                                          className='w-full absolute h-full object-cover z-[2] top-[-20px] right-[-20px]'
                                    />
                                    <div className='w-full h-full absolute bottom-[-20px] left-[-20px] z-[1] bg-[#F9F400]'>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
