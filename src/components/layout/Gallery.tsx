import React, { useRef } from 'react';
import BadgeCategory from '../ui/BadgeCategory';
import Link from 'next/link';
import IconRight from '../icon/IconRight';
import Image from 'next/image';

export default function Gallery() {
      const scrollContainerRef = useRef<HTMLDivElement>(null);
      return (
            <>
                  <main className="w-full overflow-hidden lg:mb-[150px] mb-[100px]">
                        <section data-aos='fade-right' className="container_section">
                              <div className="flex flex-col gap-y-[14px] mb-[24px]">
                                    <BadgeCategory>Gallery</BadgeCategory>
                                    <div className="flex items-end justify-between">
                                          <h2 className="w-full max-w-[419px] font-jakarta font-normal lg:text-[48px] text-[32px] text-theme-brand">
                                                Visual Tour of Our <span className='font-bold'>Aviation Solutions</span>
                                          </h2>
                                          <Link href={'#'} className="hidden lg:flex items-center gap-x-2">
                                                <h2 className="font-normal text-base">See More</h2>
                                                <IconRight className="w-6 h-6 text-theme-donker" />
                                          </Link>
                                    </div>
                              </div>
                        </section>
                        <section className="w-full flex items-center justify-end">
                              <div data-aos='fade-left'
                                    ref={scrollContainerRef}
                                    className="w-full max-w-[1440px] pl-[30px] lg:pl-0 flex items-center gap-x-6 overflow-x-auto scroll-smooth custom-scrollbar pb-3"
                              >
                                    <div className="item__gallery min-w-[676px] min-h-[438px] rounded-[16px] overflow-hidden">
                                          <Image src="/assets/images/gallery-1.png" width={676} height={438} alt="Gallery" className='w-full h-full object-cover' />
                                    </div>
                                    <div className="item__gallery min-w-[356px] min-h-[438px] rounded-[16px] overflow-hidden">
                                          <Image src="/assets/images/gallery-2.png" width={356} height={438} alt="Gallery" className='w-full h-full object-cover' />
                                    </div>
                                    <div className="item__gallery min-w-[356px] min-h-[438px] rounded-[16px] overflow-hidden">
                                          <Image src="/assets/images/gallery-3.png" width={356} height={438} alt="Gallery" className='w-full h-full object-cover' />
                                    </div>
                                    <div className="item__gallery min-w-[356px] min-h-[438px] rounded-[16px] overflow-hidden">
                                          <Image src="/assets/images/gallery-4.png" width={356} height={438} alt="Gallery" className='w-full h-full object-cover' />
                                    </div>
                              </div>
                        </section>
                        <section className='container_section flex lg:hidden items-center justify-end mt-[6]'>
                              <Link href={'#'} className="flex items-center gap-x-2">
                                    <h2 className="font-normal text-base">See More</h2>
                                    <IconRight className="w-6 h-6 text-theme-donker" />
                              </Link>
                        </section>
                  </main>
            </>
      );
}
