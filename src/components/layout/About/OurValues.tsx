import BadgeCategory from '@/components/ui/BadgeCategory'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CardOurValues from './CardOurValues';
import Icon from '@/components/icon/Icon';

export default function OurValues() {
      return (
            <>
                  <main className='w-full overflow-hidden lg:pt-[100px] pt-[25px] lg:mb-[150px] mb-[50px]'>
                        <section className='container_section grid grid-cols-10 lg:gap-[50px] gap-0 lg:mb-[0px] mb-6'>
                              {/* Text */}
                              <div data-aos="fade-right" className='w-full lg:col-span-4 col-span-10 flex flex-col'>
                                    <BadgeCategory>
                                          Our Values
                                    </BadgeCategory>
                                    <h2 className='w-full md:max-w-[500px] max-w-none mx-auto font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold text-slate-800'>Principles Behind Our</span> <span className='font-bold text-theme-red'>Success</span>
                                    </h2>
                              </div>
                              {/* Image */}
                              <div data-aos="fade-left" className='w-full lg:col-span-6 col-span-10'>
                                    <Image
                                          src="/assets/images/our-values.svg"
                                          alt="ourvalues"
                                          width={802}
                                          height={205}
                                          className='w-fulll h-auto object-cover rotate-180'
                                    />
                              </div>
                        </section>
                        {/* Desktop */}
                        <section data-aos="fade-left" className="container_section hidden md:grid lg:grid-cols-3 grid-cols-2 gap-6">
                              <CardOurValues title={'Solutions Provider'} className="col-span-1">
                                    <Icon.lamp className="lg:w-[32px] w-5 h-auto text-slate-50" />
                              </CardOurValues>
                              <CardOurValues title={'Trustworthy'} className="col-span-1">
                                    <Icon.handShake className="lg:w-[32px] w-5 h-auto text-slate-50" />
                              </CardOurValues>
                              <CardOurValues title={'Reliable'} className="col-span-1">
                                    <Icon.safety className="lg:w-[32px] w-5 h-auto text-slate-50" />
                              </CardOurValues>
                              <CardOurValues title={'Sustainable Development'} className="col-span-1">
                                    <Icon.ecologic className="lg:w-[20px] w-5 h-auto text-slate-50" />
                              </CardOurValues>
                              <CardOurValues title={'Teamwork'} className="col-span-1">
                                    <Icon.teamwork className="lg:w-[20px] w-5 h-auto text-slate-50" />
                              </CardOurValues>
                              <CardOurValues title={'Social Responsibility'} className="col-span-1">
                                    <Icon.social className="lg:w-[20px] w-5 h-auto text-slate-50" />
                              </CardOurValues>
                        </section>
                        {/* Mobile */}
                        <section data-aos="fade-left" className='md:hidden container_section_slider ourValuesSlider grid grid-cols-1'>
                              <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                          clickable: true,
                                    }}
                                    breakpoints={{
                                          0: {
                                                slidesPerView: 1.2,
                                                spaceBetween: 10,
                                          },
                                          320: {
                                                slidesPerView: 1.2,
                                                spaceBetween: 10,
                                          },
                                          640: {
                                                slidesPerView: 3.2,
                                                spaceBetween: 24,
                                          },
                                          768: {
                                                slidesPerView: 3.2,
                                                spaceBetween: 24,
                                          },
                                          1024: {
                                                slidesPerView: 3.2,
                                                spaceBetween: 24,
                                          },
                                          1280: {
                                                slidesPerView: 3.2,
                                                spaceBetween: 24,
                                          },
                                    }}
                                    modules={[Pagination]}
                                    className="our-values-swiper w-full col-span-1 cursor-grab"
                              >
                                    <SwiperSlide className="pb-10">
                                          <CardOurValues title={'Solutions Provider'}>
                                                <Icon.lamp className="lg:w-[32px] w-5 h-auto text-slate-50" />
                                          </CardOurValues>
                                    </SwiperSlide>
                                    <SwiperSlide className="pb-10">
                                          <CardOurValues title={'Trustworthy'}>
                                                <Icon.handShake className="lg:w-[32px] w-5 h-auto text-slate-50" />
                                          </CardOurValues>
                                    </SwiperSlide>
                                    <SwiperSlide className="pb-10">
                                          <CardOurValues title={'Reliable'}>
                                                <Icon.safety className="lg:w-[32px] w-5 h-auto text-slate-50" />
                                          </CardOurValues>
                                    </SwiperSlide>
                                    <SwiperSlide className="pb-10">
                                          <CardOurValues title={'Sustainable Development'}>
                                                <Icon.ecologic className="lg:w-[20px] w-3 h-auto text-slate-50" />
                                          </CardOurValues>
                                    </SwiperSlide>
                                    <SwiperSlide className="pb-10">
                                          <CardOurValues title={'Teamwork'}>
                                                <Icon.teamwork className="lg:w-[20px] w-3 h-auto text-slate-50" />
                                          </CardOurValues>
                                    </SwiperSlide>
                                    <SwiperSlide className="pb-10">
                                          <CardOurValues title={'Social Responsibility'}>
                                                <Icon.social className="lg:w-[20px] w-3 h-auto text-slate-50" />
                                          </CardOurValues>
                                    </SwiperSlide>
                              </Swiper>
                        </section>
                  </main>
            </>
      )
}
