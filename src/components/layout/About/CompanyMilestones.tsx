/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import CardMilestones from './CardMilestones';
import Icon from '@/components/icon/Icon';
import LabelSectionLight from '@/components/material/LabelSectionLight';

export default function CompanyMilestones() {
      const swiperRef = useRef<any>(null);
      const [progress, setProgress] = useState(0);

      const handlePrev = () => {
            swiperRef.current?.slidePrev();
      };

      const handleNext = () => {
            swiperRef.current?.slideNext();
      };
      return (
            <>
                  <main className="w-full overflow-hidden relative z-[2] text-slate-50">
                        <section className='container_section'>
                              {/* Text */}
                              <div className='w-full flex flex-col'>
                                    <LabelSectionLight title='Company Milestones' />
                                    <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold'>History and</span> <span className='font-bold text-theme-red'>Achivment</span>
                                    </h2>
                              </div>
                        </section>
                        <section className='container_section_slider grid grid-cols-1'>
                              <Swiper
                                    loop={false}
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    onSlideChange={(swiper) => {
                                          // pastikan slidesPerView number
                                          const slidesPerView =
                                                typeof swiper.params.slidesPerView === "number"
                                                      ? swiper.params.slidesPerView
                                                      : 1;

                                          const total = swiper.slides.length - slidesPerView;
                                          const current = swiper.activeIndex;

                                          // cegah pembagian 0 kalau total <= 0
                                          const percent = total > 0 ? (current / total) * 100 : 100;

                                          setProgress(percent);
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
                                    className="product-swiper w-full col-span-1 cursor-grab"
                              >
                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <CardMilestones
                                                year={'2007'}
                                                description={'AAT established as a Rotax Engine Supplier.'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <CardMilestones
                                                year={'2010'}
                                                description={'AAT acquire Airport Registered Certificate for Wiladatika Airport and enter to Aircraft Engine Maintenance Business.'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <CardMilestones
                                                year={'2014'}
                                                description={'Yayasan Pusdirga is established.'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <CardMilestones
                                                year={'2021'}
                                                description={'OC 91 Pusdirga as aircraft operator established.'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <CardMilestones
                                                year={'2022'}
                                                description={'AAT listed as vendor in Military and several Large MRO Companies.'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <CardMilestones
                                                year={'2023'}
                                                description={'AAT as the leader of Aviation Cluster in Satuhari Group, including with our DOA & MRO Company.'}
                                          />
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <CardMilestones
                                                year={'2024'}
                                                description={'AAT acquire ADARS Certicate from Ministry of Defence.'}
                                          />
                                    </SwiperSlide>
                              </Swiper>
                        </section>
                        {/* PROGRESSBAR & ARROW LEFT RIGHT */}
                        <section className="container_section flex items-center md:gap-[50px] gap-6">
                              {/* PROGRESSBAR */}
                              <div className="flex-grow w-full h-[6px] rounded-full bg-zinc-200 relative overflow-hidden">
                                    <div
                                          className="absolute left-0 top-0 h-full bg-[#F9F400] rounded-full transition-all duration-300"
                                          style={{ width: `${progress}%` }}
                                    ></div>
                              </div>
                              {/* BUTTONS */}
                              <div className="flex-shrink-0 flex items-center justify-center gap-[14px]">
                                    <button
                                          onClick={handlePrev}
                                          className="md:w-[36px] md:h-[36px] w-7 h-7 hover:scale-105 duration-200 overflow-hidden rounded-full flex items-center justify-center bg-[#F9F400]/10"
                                    >
                                          <Icon.arrowSwiper className="w-[6px] h-max" />
                                    </button>
                                    <button
                                          onClick={handleNext}
                                          className="md:w-[36px] md:h-[36px] w-7 h-7 hover:scale-105 duration-200 overflow-hidden rounded-full flex items-center justify-center bg-[#F9F400]/10"
                                    >
                                          <Icon.arrowSwiper className="w-[6px] h-max rotate-180" />
                                    </button>
                              </div>
                        </section>
                  </main>
            </>
      )
}
