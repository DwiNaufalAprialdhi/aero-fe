import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Subscribe() {
      return (
            <>
                  <main className='w-full h-auto mb-[50px]'>
                        <section className='container_section'>
                              <div data-aos='fade-up' className='w-full bg-[#F8FAFC] p-[30px] rounded-[16px] flex flex-col relative'>
                                    {/* Ornament */}
                                    <div className='hidden lg:block w-[300px] h-auto absolute bottom-0 right-20 z-[1]'>
                                          <Image
                                                src={'/assets/ornaments/ornament-banner-1.svg'}
                                                alt='ornament'
                                                width={300} height={300}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    <div className='hidden lg:block w-[300px] h-auto absolute top-0 right-10 z-[2]'>
                                          <Image
                                                src={'/assets/ornaments/ornament-banner-2.svg'}
                                                alt='ornament'
                                                width={300} height={300}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    <div className='py-[20px] flex flex-col gap-y-[14px] mb-[14px] relative z-[3]'>
                                          <h2 className='font-semibold text-[24px] text-center lg:text-start'>Join our weekly newsletter</h2>
                                          <p className='font-normal text-base text-theme-secondary text-center lg:text-start'>Stay up to date with the lastest news, announcements, and articles.</p>
                                    </div>
                                    <div className='w-full max-w-[367px] relative z-[3]'>
                                          <input type="email" className='w-full p-[10px] pr-[150px] rounded-[8px] font-normal text-sm text-input-label placeholder:text-input-form border border-input-form outline-none' placeholder='Enter your email' />
                                          <Link href={''} className={`absolute top-1/2 -translate-y-1/2 right-[3px] py-2 lg:px-[30px] px-[15px] bg-theme-brand text-white rounded-[8px] hover:bg-opacity-80 duration-300`}>
                                                <h2 className='font-medium lg:text-sm text-xs'>Subscribe</h2>
                                          </Link>
                                    </div>
                                    <div className='absolute hidden lg:block bottom-0 right-[100px] z-[5]'>
                                          <Image src='/assets/images/subscribe-1.svg' width={304} height={281} alt='Subscribe' className='w-[304px] h-auto object-cover' />
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
