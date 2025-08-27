import React from 'react';
import Link from 'next/link';
import IconRight from '../icon/IconRight';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import LabelSectionDark from '../material/LabelSectionDark';

export default function Gallery() {
      return (
            <>
                  <main className="w-full overflow-hidden lg:mb-[270px] mb-[200px]">
                        <section className="container_section">
                              <div className="flex flex-col gap-y-[14px] mb-[24px]">
                                    <LabelSectionDark title='Gallery' />
                                    <div className="flex items-end justify-between">
                                          <h2 className="w-full lg:max-w-[500px] font-normal lg:text-[48px] leading-tight text-[32px] text-theme-brand">
                                                Visual Tour of Our <span className='font-bold text-theme-red'>Aviation Solutions</span>
                                          </h2>
                                          <Link href={'/gallery'} className="hidden lg:flex items-center gap-x-2">
                                                <h2 className="font-normal text-base">See More</h2>
                                                <IconRight className="w-6 h-6 text-theme-donker toRight" />
                                          </Link>
                                    </div>
                              </div>
                        </section>
                        <section>
                              <div className='container_section grid grid-cols-1'>
                                    <Swiper
                                          slidesPerView={1.2}
                                          spaceBetween={10}
                                          pagination={{
                                                clickable: true,
                                          }}
                                          loop={false}
                                          breakpoints={{
                                                320: {
                                                      slidesPerView: 1.1,
                                                      spaceBetween: 10,
                                                },
                                                640: {
                                                      slidesPerView: 2.1,
                                                      spaceBetween: 10,
                                                },
                                                768: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 10,
                                                },
                                                1024: {
                                                      slidesPerView: 2.2,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          modules={[Pagination]}
                                          className="product-swiper w-full col-span-1 cursor-grab"
                                    >
                                          <SwiperSlide className='pb-10'>
                                                <div className="item__gallery h-[450px] overflow-hidden group">
                                                      <Image src="/assets/images/gallery-1.png" width={676} height={438} alt="Gallery" className='w-full h-full object-cover duration-500' />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide className='pb-10'>
                                                <div className="item__gallery h-[450px] overflow-hidden group">
                                                      <Image src="/assets/images/gallery-2.png" width={356} height={438} alt="Gallery" className='w-full h-full object-cover duration-500' />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide className='pb-10'>
                                                <div className="item__gallery h-[450px] overflow-hidden group">
                                                      <Image src="/assets/images/gallery-3.png" width={356} height={438} alt="Gallery" className='w-full h-full object-cover duration-500' />
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide className='pb-10'>
                                                <div className="item__gallery h-[450px] overflow-hidden group">
                                                      <Image src="/assets/images/gallery-4.png" width={356} height={438} alt="Gallery" className='w-full h-full object-cover duration-500' />
                                                </div>
                                          </SwiperSlide>
                                    </Swiper>
                              </div>
                        </section>
                        <section className='container_section flex lg:hidden items-start justify-start mt-0'>
                              <Link href={'#'} className="flex items-center gap-x-2">
                                    <h2 className="font-normal text-xs">See More</h2>
                                    <IconRight className="w-4 h-4 text-theme-donker toRight" />
                              </Link>
                        </section>
                  </main>
            </>
      );
}
