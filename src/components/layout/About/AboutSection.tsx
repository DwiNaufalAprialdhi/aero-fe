import BadgeCategory from '@/components/ui/BadgeCategory'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative lg:mb-[130px] mb-[50px]'>
                        <section className='container_section grid lg:grid-cols-2 grid-cols-1 lg:gap-[60px] gap-[50px]'>
                              {/* Left */}
                              <Image
                                    data-aos='fade-right'
                                    src='/assets/images/about.svg'
                                    alt='about'
                                    width={500} height={500}
                                    className='hidden lg:block w-full col-span-1 h-full object-cover rounded-[16px]'
                              />
                              <Image
                                    data-aos='fade-right'
                                    src='/assets/images/about.svg'
                                    alt='about'
                                    width={361} height={300}
                                    className='lg:hidden w-full col-span-1 h-full object-cover rounded-[16px]'
                              />
                              {/* Right */}
                              <div data-aos='fade-left' className="w-full col-span-1 flex flex-col">
                                    <BadgeCategory>
                                          About Us
                                    </BadgeCategory>
                                    <h2 className="font-normal lg:text-[48px] text-[24px] text-slate-800 block lg:my-[14px] my-3">
                                          About <span className='font-bold'>Asia Aero</span>
                                    </h2>
                                    <div className='flex flex-col font-normal lg:text-base text-sm text-slate-800 lg:gap-y-[14px] gap-y-3'>
                                          <span>
                                                PT. Asia Aero Technology (AAT) is a private company which is engaged in aviation sector founded in 2007 as Rotax  representative agent and service center for Indonesia. In 2010 to support our operation, we are acquire, built, and operate our own Airport,  Wiladatika Private Airport, Cibubur, Jakarta and succeed to developed MRO center for Helicopter and General Aviation in Indonesia.
                                          </span>

                                          <span>
                                                As We grow and develop, we are eager to become the best Aviation Supply Chain provider,  also we are still expanding our network and capability to able support Indonesian Military, aircraft operators, and MROs.
                                          </span>

                                          <span>
                                                In 2022, We expand our capabilty through merger and acquisition with several prominent Indonesian Aviation Company. Within our group capabilities including Design Organization Approval (DOA), Aircraft Maintenance Organization (AMO 145), Operator Certificate (OC91) and Flying Club.
                                          </span>

                                          <span>
                                                In the future, We are aiming to create complete aviation industry ecosystem to support the growing Indonesian Aviation industry.
                                          </span>

                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
