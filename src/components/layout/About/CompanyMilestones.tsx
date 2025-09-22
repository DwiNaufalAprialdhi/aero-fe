/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import LabelSectionLight from '@/components/material/LabelSectionLight';
import Image from 'next/image';

export default function CompanyMilestones() {

      return (
            <>
                  <main className="w-full overflow-hidden relative z-[2] text-slate-50">
                        <section className='container_section'>
                              {/* Text */}
                              <div className='w-full flex flex-col'>
                                    <LabelSectionLight title='Company Milestones' />
                                    <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold'>History and</span> <span className='font-bold text-theme-red'>Achivment</span>
                                    </h2>
                              </div>
                        </section>
                        <section className='container_section overflow-hidden'>
                              <Image
                                    src="/assets/images/struktur.svg"
                                    alt="Ornament"
                                    width={1000}
                                    height={1000}
                                    className='w-full h-full object-contain'
                              />
                        </section>
                  </main>
            </>
      )
}
