/* eslint-disable @typescript-eslint/no-unused-vars */
import Icon from '@/components/icon/Icon'
import BadgeCategory from '@/components/ui/BadgeCategory'
import Image from 'next/image'
import React from 'react'

const galleries = [
      { id: 1, src: '/assets/images/gallery-1.svg', alt: 'gallery' },
      { id: 2, src: '/assets/images/gallery-2.svg', alt: 'gallery' },
      { id: 3, src: '/assets/images/gallery-3.svg', alt: 'gallery' },
      { id: 4, src: '/assets/images/gallery-4.svg', alt: 'gallery' },
      { id: 5, src: '/assets/images/gallery-5.svg', alt: 'gallery' },
      { id: 6, src: '/assets/images/gallery-6.svg', alt: 'gallery' },
      { id: 7, src: '/assets/images/gallery-7.svg', alt: 'gallery' },
      { id: 8, src: '/assets/images/gallery-8.svg', alt: 'gallery' },
      { id: 9, src: '/assets/images/gallery-9.svg', alt: 'gallery' },
      { id: 10, src: '/assets/images/gallery-10.svg', alt: 'gallery' },
      { id: 11, src: '/assets/images/gallery-11.svg', alt: 'gallery' },
      { id: 12, src: '/assets/images/gallery-12.svg', alt: 'gallery' },
]

export default function OurGalleries() {
      return (
            <>
                  <main className='w-full h-auto lg:mt-[100px] mt-[50px] lg:mb-[150px] mb-[50px]'>
                        <section className='container_section flex flex-col lg:gap-y-[0px] gap-y-6'>
                              {/* Text */}
                              <div data-aos="fade-up" className='w-full flex flex-col items-center justify-center mx-auto'>
                                    <BadgeCategory>
                                          Our Gallery
                                    </BadgeCategory>
                                    <h2 className='w-full md:max-w-[500px] max-w-none mx-auto font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6 text-center'>
                                          <span className='font-bold text-slate-800'>More</span> <span className='font-bold text-theme-red'>Photos</span>
                                    </h2>
                              </div>
                              {/* Column Image */}
                              <div className='w-full h-max grid md:grid-cols-4 grid-cols-2 gap-6'>
                                    {galleries.map((gallery, index) => (
                                          <div data-aos="fade-up" key={index} className='w-full col-span-1 lg:h-[268px] h-[150px] lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src={gallery.src}
                                                      alt={gallery.alt}
                                                      layout='responsive'
                                                      width={268}
                                                      height={268}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    ))}
                                    {/* Load More */}
                                    {/* <div className='cursor-pointer md:col-span-4 col-span-2 w-full h-max flex items-center justify-center mx-auto gap-x-2'>
                                          <h2 className='font-normal lg:text-base text-sm text-slate-800'>
                                                See More
                                          </h2>
                                          <Icon.arrowRight className="lg:w-4 w-3 h-auto text-slate-800 rotate-90" />
                                    </div> */}
                              </div>
                        </section>
                  </main>
            </>
      )
}
