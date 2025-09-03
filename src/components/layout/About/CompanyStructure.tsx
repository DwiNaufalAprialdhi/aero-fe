import LabelSectionLight from '@/components/material/LabelSectionLight'
import Image from 'next/image'
import React from 'react'

export default function CompanyStructure() {
      return (
            <>
                  <main className='container_section relative z-[2] text-slate-50'>
                        {/* HEAD */}
                        <section className='w-full flex flex-col md:items-start md:justify-start items-center justify-center lg:mb-[50px] mb-6'>
                              <LabelSectionLight title='Company Structure ' />
                              <h2 className='w-full font-normal lg:text-[48px] md:text-start text-center text-[24px] leading-tight lg:mt-[14px] mt-2 '>
                                    <span className='font-bold'>Our</span> <span className='font-bold text-theme-red'>Structure</span>
                              </h2>
                        </section>
                        {/* BODY */}
                        <section className='w-full h-max overflow-hidden'>
                              <Image src={'/assets/images/our-structure.svg'} alt='images' width={500} height={500} className='w-full h-max object-contain md:block hidden' />
                              <Image src={'/assets/images/our-structure-mobile.svg'} alt='images' width={500} height={500} className='w-full max-w-[250px] md:mx-0 mx-auto h-max object-contain md:hidden block' />
                        </section>
                  </main>
            </>
      )
}
