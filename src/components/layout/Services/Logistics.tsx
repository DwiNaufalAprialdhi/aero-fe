import BadgeCategory from '@/components/ui/BadgeCategory'
import Image from 'next/image'
import React from 'react'

export default function Logistics() {
      return (
            <>
                  <main className="w-full overflow-hidden mb-[50px]">
                        <section data-aos="fade-right" className='container_section grid grid-cols-10 items-center lg:gap-[50px] gap-[14px]'>
                              {/* Text */}
                              <div className='w-full lg:col-span-6 col-span-10 flex flex-col items-start'>
                                    <BadgeCategory>
                                          Other Service
                                    </BadgeCategory>
                                    <h2 className='w-full text-start font-normal lg:text-[48px] text-[24px] leading-normal lg:my-[14px]'>
                                          <span className='font-bold text-slate-800'>Global Spare Parts and Aviation </span> <span className='font-bold text-theme-red'>Logistics Support
                                          </span>
                                    </h2>
                                    {/* Desc */}
                                    <p className='w-full font-normal lg:text-base text-sm text-slate-600'>
                                          We supplies Aircraft Standard Parts, consumable and expendable material
                                    </p>
                              </div>
                              {/* Image */}
                              <div className='w-full h-auto col-span-4 lg:rounded-[16px] border border-slate-200 rounded-[8px] bg-transparent overflow-hidden'>
                                    <Image
                                          src='/assets/images/logistics.svg'
                                          alt='Logistics'
                                          width={449} height={291}
                                          className='w-full h-auto object-cover'
                                    />
                              </div>
                        </section>
                  </main>
            </>
      )
}
