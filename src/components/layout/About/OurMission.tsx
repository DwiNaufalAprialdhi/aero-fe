import BadgeCategory from '@/components/ui/BadgeCategory'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";
import Icon from '@/components/icon/Icon';

export default function OurMission() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden lg:mb-[50px] mb-[25px]'>
                        <section data-aos='fade-up' className='container_section flex flex-col items-center justify-center'>
                              <BadgeCategory>
                                    Our Mission
                              </BadgeCategory>
                              <h2 className='w-full md:max-w-[500px] max-w-none mx-auto text-center font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                    Commitment to <span className='font-bold text-slate-800'>Aviation</span> <span className='font-bold text-theme-red'>Excellence</span>
                              </h2>
                              {/* Card Slide */}
                              <div className='w-full h-auto md:max-w-[750px] max-w-none mx-auto bg-slate-800 p-5 lg:rounded-[16px] rounded-[10px] grid grid-cols-1 relative'>
                                    <Swiper
                                          pagination={{
                                                type: 'fraction',
                                          }}
                                          loop={true}
                                          navigation={{
                                                prevEl: ".excellence-swiper-button-prev",
                                                nextEl: ".excellence-swiper-button-next",
                                          }}
                                          modules={[Navigation, Pagination]}
                                          className="excellence-swiper w-full h-auto col-span-1 cursor-grab"
                                    >
                                          <SwiperSlide className='pb-10 md:pb-11 lg:pb-0'>
                                                <div className="w-full h-auto grid grid-cols-12 lg:gap-x-[25px] gap-3">
                                                      {/* Image */}
                                                      <div className='w-full lg:h-[268px] h-[250px] lg:col-span-5 col-span-12 lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/excellence-1.svg"
                                                                  alt='excellence'
                                                                  width={268}
                                                                  height={268}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </div>
                                                      {/* Text */}
                                                      <div className='w-full h-auto lg:col-span-7 col-span-12'>
                                                            <p className='font-normal lg:text-[20px] leading-normal text-sm text-slate-100 lg:line-clamp-[7] line-clamp-none'>
                                                                  Acted as an Aviation Industry growth catalysator by developing several Aviation infrastructures such as airport, aviation park, training facility, and other aviation related facility which is become the center of the aviation activities in the region.

                                                            </p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide className='pb-10 md:pb-11 lg:pb-0'>
                                                <div className="w-full h-auto grid grid-cols-12 lg:gap-x-[25px] gap-3">
                                                      {/* Image */}
                                                      <div className='w-full lg:h-[268px] h-[250px] lg:col-span-5 col-span-12 lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/excellence-1.svg"
                                                                  alt='excellence'
                                                                  width={268}
                                                                  height={268}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </div>
                                                      {/* Text */}
                                                      <div className='w-full h-auto lg:col-span-7 col-span-12'>
                                                            <p className='font-normal lg:text-[20px] leading-normal text-sm text-slate-100 lg:line-clamp-[7] line-clamp-none'>
                                                                  Acted as an Aviation Industry growth catalysator by developing several Aviation infrastructures such as airport, aviation park, training facility, and other aviation related facility which is become the center of the aviation activities in the region.

                                                            </p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide className='pb-10 md:pb-11 lg:pb-0'>
                                                <div className="w-full h-auto grid grid-cols-12 lg:gap-x-[25px] gap-3">
                                                      {/* Image */}
                                                      <div className='w-full lg:h-[268px] h-[250px] lg:col-span-5 col-span-12 lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/excellence-1.svg"
                                                                  alt='excellence'
                                                                  width={268}
                                                                  height={268}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </div>
                                                      {/* Text */}
                                                      <div className='w-full h-auto lg:col-span-7 col-span-12'>
                                                            <p className='font-normal lg:text-[20px] leading-normal text-sm text-slate-100 lg:line-clamp-[7] line-clamp-none'>
                                                                  Acted as an Aviation Industry growth catalysator by developing several Aviation infrastructures such as airport, aviation park, training facility, and other aviation related facility which is become the center of the aviation activities in the region.

                                                            </p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>

                                          <SwiperSlide className='pb-10 md:pb-11 lg:pb-0'>
                                                <div className="w-full h-auto grid grid-cols-12 lg:gap-x-[25px] gap-3">
                                                      {/* Image */}
                                                      <div className='w-full lg:h-[268px] h-[250px] lg:col-span-5 col-span-12 lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/excellence-1.svg"
                                                                  alt='excellence'
                                                                  width={268}
                                                                  height={268}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </div>
                                                      {/* Text */}
                                                      <div className='w-full h-auto lg:col-span-7 col-span-12'>
                                                            <p className='font-normal lg:text-[20px] leading-normal text-sm text-slate-100 lg:line-clamp-[7] line-clamp-none'>
                                                                  Acted as an Aviation Industry growth catalysator by developing several Aviation infrastructures such as airport, aviation park, training facility, and other aviation related facility which is become the center of the aviation activities in the region.

                                                            </p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    </Swiper>
                                    <div className='w-auto h-auto absolute bottom-5 right-5 flex items-center gap-x-5 z-[1]'>
                                          <button className='excellence-swiper-button-prev lg:w-[36px] w-5 h-5 lg:h-[36px] rounded-full bg-slate-50/10 flex items-center justify-center'>
                                                <Icon.chevronLeft className='lg:w-2 w-1 h-auto text-slate-50' />
                                          </button>
                                          <button className='excellence-swiper-button-next lg:w-[36px] w-5 h-5 lg:h-[36px] rounded-full bg-slate-50/10 flex items-center justify-center'>
                                                <Icon.chevronRight className='lg:w-2 w-1 h-auto text-slate-50' />
                                          </button>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
