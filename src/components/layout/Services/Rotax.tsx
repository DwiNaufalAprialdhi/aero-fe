import BadgeCategory from '@/components/ui/BadgeCategory'
import Image from 'next/image'
import React from 'react'

export default function Rotax() {
      return (
            <>
                  <main className="w-full overflow-hidden lg:mb-[150px] mb-[50px]">
                        <section className='container_section grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-5'>
                              <div className='w-full col-span-1 flex flex-col'>
                                    {/* Text */}
                                    <div data-aos="fade-right" className='w-full flex flex-col items-start'>
                                          <BadgeCategory>
                                                Our Strategic Partners
                                          </BadgeCategory>
                                          <h2 className='w-full text-start font-normal lg:text-[48px] text-[24px] leading-normal lg:my-[14px]'>
                                                <span className='font-bold text-slate-800'>Approved Maintenance
                                                      Service Centre </span> <span className='font-bold text-theme-red'>Rotax of Indonesia
                                                </span>
                                          </h2>
                                    </div>
                                    {/* Image */}
                                    <div className='w-full lg:h-[205px] h-[200px] rounded-[8px] overflow-hidden mb-[14px]'>
                                          <Image
                                                src='/assets/images/rotax.svg'
                                                alt='Rotax'
                                                width={598} height={205}
                                                className='w-fulll h-full object-cover'
                                          />
                                    </div>
                                    {/* Desc */}
                                    <p className='w-full font-normal lg:text-base text-sm text-slate-600'>
                                          Rotax Service Center is an authorized service facility that provides maintenance, repairs, and technical support for Rotax engines. Rotax engines are widely used in various applications, including recreational vehicles like go-karts, light aircraft (microlight), ATVs (All-Terrain Vehicles), and two-wheel vehicles such as scooters or sport motorcycles.
                                    </p>
                              </div>
                        </section>
                  </main>
            </>
      )
}
