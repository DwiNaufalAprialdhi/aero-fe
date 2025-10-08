/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
import LabelSectionLight from '@/components/material/LabelSectionLight';
import Image from 'next/image';
import { useLangContext } from '@/components/hooks/LangContext';

export default function CompanyMilestones() {

      const { lang } = useLangContext()

      return (
            <>
                  <main className="w-full overflow-hidden relative z-[2] text-slate-50">
                        <section className='container_section'>
                              {lang === 'ID' ? <>
                                    {/* Text */}
                                    <div className='w-full flex flex-col'>
                                          <LabelSectionLight title='Tonggak Sejarah Perusahaan' />
                                          <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                                <span className='font-bold'>Sejarah dan</span> <span className='font-bold text-theme-red'>Prestasi</span>
                                          </h2>
                                    </div>
                              </> : <>
                                    {/* Text */}
                                    <div className='w-full flex flex-col'>
                                          <LabelSectionLight title='Company Milestones' />
                                          <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                                <span className='font-bold'>History and</span> <span className='font-bold text-theme-red'>Achivment</span>
                                          </h2>
                                    </div>
                              </>}
                        </section>
                        <section className='container_section overflow-hidden'>
                              {lang === 'ID' ? <>
                                    <Image
                                          src="/assets/images/struktur-id.svg"
                                          alt="Ornament"
                                          width={1000}
                                          height={1000}
                                          className='w-full h-full object-contain'
                                    />
                              </> : <>
                                    <Image
                                          src="/assets/images/struktur.svg"
                                          alt="Ornament"
                                          width={1000}
                                          height={1000}
                                          className='w-full h-full object-contain'
                                    />
                              </>}
                        </section>
                  </main>
            </>
      )
}
