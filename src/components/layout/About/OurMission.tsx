import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper/modules";
import Icon from '@/components/icon/Icon';
import LabelSectionLight from '@/components/material/LabelSectionLight';

export default function zOurMission() {
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
                                                                  Serve as an aviation-industry growth catalyst by developing and operating strategic infrastructure—airports, aviation parks, training centers, and related facilities—that become regional hubs for aviation activity.
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
                                                                  Provide high-quality aviation products, spare parts, and maintenance services to support both Indonesia’s civil and military aviation sectors.
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
                                                                  Uphold flight and aviation safety as our paramount priority in every aspect of our operations.
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
                                                                  Enhance and maximize stakeholder value by streamlining business processes through mechanization and automation, optimizing efficiency, reducing costs, and delivering services and products that consistently exceed customer expectations.
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
                                                                  Drive continuous improvement and innovation, adapting proactively to the evolving demands of the aviation market.
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
