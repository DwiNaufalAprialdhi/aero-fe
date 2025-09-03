import BadgeCategory from '@/components/ui/BadgeCategory'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CardMilestones from './CardMilestones';

export default function CompanyMilestones() {
      return (
            <>
                  <main className="w-full overflow-hidden relative z-[2] text-slate-50">
                        <section className='container_section'>
                              {/* Text */}
                              <div data-aos="fade-right" className='w-full flex flex-col'>
                                    <BadgeCategory>
                                          Company Milestones
                                    </BadgeCategory>
                                    <h2 className='w-full font-normal lg:text-[48px] text-[24px] leading-tight lg:mt-[14px] mt-2 lg:mb-[50px] mb-6'>
                                          <span className='font-bold'>History and</span> <span className='font-bold text-theme-red'>Achivment</span>
                                    </h2>
                              </div>
                        </section>
                        <section data-aos="fade-left" className='container_section_slider grid grid-cols-1'>
                              <Swiper
                                    loop={false}
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
                  </main>
            </>
      )
}
