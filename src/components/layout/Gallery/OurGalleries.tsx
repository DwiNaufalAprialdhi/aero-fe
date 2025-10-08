/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLangContext } from '@/components/hooks/LangContext'
import Icon from '@/components/icon/Icon'
import LabelSectionDark from '@/components/material/LabelSectionDark'
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
      const { lang } = useLangContext()
      return (
            <>
                  <main className='w-full h-auto lg:mb-[150px] mb-[100px]'>
                        <section className='container_section flex flex-col lg:gap-y-[0px] gap-y-6'>
                              {/* Text */}
                              <div className='w-full flex flex-col mx-auto'>
                                    <LabelSectionDark title={lang === 'ID' ? 'Galeri Kami' : 'Our Gallery'} />
                                    <h2 className='w-full md:max-w-[500px] max-w-none font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold text-slate-800'>
                                                {lang === 'ID' ? 'Lebih Banyak' : 'More'}
                                          </span>{' '}
                                          <span className='font-bold text-theme-red'>
                                                {lang === 'ID' ? 'Foto' : 'Photos'}
                                          </span>
                                    </h2>
                              </div>
                              {/* Column Image */}
                              <div className='w-full h-max grid md:grid-cols-4 grid-cols-2 gap-6'>
                                    {galleries.map((gallery, index) => (
                                          <div key={index} className='w-full col-span-1 lg:h-[268px] h-[150px] overflow-hidden'>
                                                <Image
                                                      src={gallery.src}
                                                      alt={gallery.alt}
                                                      layout='responsive'
                                                      width={268}
                                                      height={268}
                                                      className='w-full h-full object-cover scale-110'
                                                />
                                          </div>
                                    ))}
                              </div>
                        </section>
                  </main>
            </>
      )
}
