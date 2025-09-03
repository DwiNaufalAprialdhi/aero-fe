import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";
import Icon from '@/components/icon/Icon';
import LabelSectionLight from '@/components/material/LabelSectionLight';

export default function OurMission() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative z-[2] text-slate-50'>
                        <section className='container_section flex flex-col items-center justify-center'>
                              <LabelSectionLight title='Our Mission' />
                              <h2 className='w-full md:max-w-[500px] max-w-none mx-auto text-center font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                    Commitment to <span className='font-bold'>Aviation</span> <span className='font-bold text-theme-red'>Excellence</span>
                              </h2>
                              {/* Card Slide */}
                              <div className='w-full h-auto md:max-w-[750px] max-w-none mx-auto bg-[#BC1328] p-5 grid grid-cols-1 relative'>
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
                                          <SwiperSlide>
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
                                                                  src="/assets/images/excellence-2.svg"
                                                                  alt='excellence'
                                                                  width={268}
                                                                  height={268}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </div>
                                                      {/* Text */}
                                                      <div className='w-full h-auto lg:col-span-7 col-span-12'>
                                                            <p className='font-normal lg:text-[20px] leading-normal text-sm text-slate-100 lg:line-clamp-[7] line-clamp-none'>
                                                                  Providing aviation product, spare parts, and maintenance service for the Indonesia Aviation Industry.
                                                            </p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                          <SwiperSlide className='pb-10 md:pb-11 lg:pb-0'>
                                                <div className="w-full h-auto grid grid-cols-12 lg:gap-x-[25px] gap-3">
                                                      {/* Image */}
                                                      <div className='w-full lg:h-[268px] h-[250px] lg:col-span-5 col-span-12 lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/excellence-3.svg"
                                                                  alt='excellence'
                                                                  width={268}
                                                                  height={268}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </div>
                                                      {/* Text */}
                                                      <div className='w-full h-auto lg:col-span-7 col-span-12'>
                                                            <p className='font-normal lg:text-[20px] leading-normal text-sm text-slate-100 lg:line-clamp-[7] line-clamp-none'>
                                                                  Ensuring flight and aviation safety as a core concern in every aspect of our company operation
                                                            </p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>

                                          <SwiperSlide className='pb-10 md:pb-11 lg:pb-0'>
                                                <div className="w-full h-auto grid grid-cols-12 lg:gap-x-[25px] gap-3">
                                                      {/* Image */}
                                                      <div className='w-full lg:h-[268px] h-[250px] lg:col-span-5 col-span-12 lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/excellence-4.svg"
                                                                  alt='excellence'
                                                                  width={268}
                                                                  height={268}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </div>
                                                      {/* Text */}
                                                      <div className='w-full h-auto lg:col-span-7 col-span-12'>
                                                            <p className='font-normal lg:text-[20px] leading-normal text-sm text-slate-100 lg:line-clamp-[7] line-clamp-none'>
                                                                  Enhancing and maximizing Stakeholder Value by streamlining business process, mechanization and automation to achieve efficient operation, minimized cost, and deliver quality services and products above its customer expectation.
                                                            </p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>

                                          <SwiperSlide className='pb-10 md:pb-11 lg:pb-0'>
                                                <div className="w-full h-auto grid grid-cols-12 lg:gap-x-[25px] gap-3">
                                                      {/* Image */}
                                                      <div className='w-full lg:h-[268px] h-[250px] lg:col-span-5 col-span-12 lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                                            <Image
                                                                  src="/assets/images/excellence-5.svg"
                                                                  alt='excellence'
                                                                  width={268}
                                                                  height={268}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </div>
                                                      {/* Text */}
                                                      <div className='w-full h-auto lg:col-span-7 col-span-12'>
                                                            <p className='font-normal lg:text-[20px] leading-normal text-sm text-slate-100 lg:line-clamp-[7] line-clamp-none'>
                                                                  Continuous Improvement, innovation, and adaptation to the dynamic aviation industry market
                                                            </p>
                                                      </div>
                                                </div>
                                          </SwiperSlide>
                                    </Swiper>
                                    <div className='w-auto h-auto absolute bottom-5 right-5 flex items-center gap-x-5 z-[1]'>
                                          <button className='excellence-swiper-button-prev lg:w-[36px] w-5 h-5 lg:h-[36px] rounded-full bg-[#F9F400]/10 flex items-center justify-center'>
                                                <Icon.chevronLeft className='lg:w-2 w-1 h-auto text-[#F9F400]' />
                                          </button>
                                          <button className='excellence-swiper-button-next lg:w-[36px] w-5 h-5 lg:h-[36px] rounded-full bg-[#F9F400]/10 flex items-center justify-center'>
                                                <Icon.chevronRight className='lg:w-2 w-1 h-auto text-[#F9F400]' />
                                          </button>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
