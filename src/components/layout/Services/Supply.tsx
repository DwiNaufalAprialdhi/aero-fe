import LabelSectionDark from '@/components/material/LabelSectionDark'
import Image from 'next/image'
import React from 'react'

export default function Supply() {
      return (
            <>
                  <main className="w-full overflow-hidden lg:mb-[250px] mb-[200px]">
                        <section className='container_section grid grid-cols-10 items-center lg:gap-[50px] gap-[14px]'>
                              {/* Text */}
                              <div className='w-full lg:col-span-6 col-span-10 flex flex-col items-start'>
                                    <LabelSectionDark title='Other Service' />
                                    <h2 className='w-full text-start font-normal lg:text-[48px] text-[24px] leading-normal lg:my-[14px]'>
                                          <span className='font-bold text-slate-800'>Supply </span> <span className='font-bold text-theme-red'>Aircraft GSE
                                          </span>
                                    </h2>
                                    {/* Desc */}
                                    <p className='w-full font-normal lg:text-base text-sm text-slate-600'>
                                          We provides design and support manufacturing service to supply aircraft GSE (standard and customized models)
                                    </p>
                              </div>
                              {/* Image */}
                              <div className='w-full h-auto col-span-4 border border-slate-800/30 bg-transparent overflow-hidden'>
                                    <Image
                                          src='/assets/images/supply.svg'
                                          alt='Supply'
                                          width={449} height={291}
                                          className='w-full h-auto object-cover scale-110'
                                    />
                              </div>
                        </section>
                  </main>
            </>
      )
}
