import BadgeCategory from '@/components/ui/BadgeCategory'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Certificate() {
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative lg:mb-[150px] mb-[50px]'>
                        <section data-aos='fade-up' className='container_section flex flex-col items-center justify-center lg:mb-[50px] mb-6'>
                              <BadgeCategory>
                                    Certificates
                              </BadgeCategory>
                              <h2 className='w-full md:max-w-[750px] max-w-none mx-auto text-center font-normal lg:text-[48px] text-[24px] leading-normal lg:mt-[14px] mt-2'>
                                    Our Industry <span className='font-bold text-slate-800'>Certifications
                                          and </span> <span className='font-bold text-theme-red'>Achievements</span>
                              </h2>
                        </section>
                        <section data-aos="fade-left" className='container_section_slider ourValuesSlider grid grid-cols-1'>
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
                                                slidesPerView: 2.2,
                                                spaceBetween: 24,
                                          },
                                          768: {
                                                slidesPerView: 2.2,
                                                spaceBetween: 24,
                                          },
                                          1024: {
                                                slidesPerView: 2.2,
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
                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <div className='w-full lg:h-[438px] h-[400px] overflow-hidden rounded-[16px] border border-slate-400'>
                                                <Image
                                                      src="/assets/images/certificate-1.svg"
                                                      alt="Certificate 1"
                                                      width={356}
                                                      height={438}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <div className='w-full lg:h-[438px] h-[400px] overflow-hidden rounded-[16px] border border-slate-400'>
                                                <Image
                                                      src="/assets/images/certificate-2.svg"
                                                      alt="Certificate 2"
                                                      width={356}
                                                      height={438}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </SwiperSlide>

                                    <SwiperSlide className="lg:pb-20 pb-10">
                                          <div className='w-full lg:h-[438px] h-[400px] overflow-hidden rounded-[16px] border border-slate-400'>
                                                <Image
                                                      src="/assets/images/certificate-3.svg"
                                                      alt="Certificate 3"
                                                      width={356}
                                                      height={438}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </SwiperSlide> <SwiperSlide className="lg:pb-20 pb-10">
                                          <div className='w-full lg:h-[438px] h-[400px] overflow-hidden rounded-[16px] border border-slate-400'>
                                                <Image
                                                      src="/assets/images/certificate-4.svg"
                                                      alt="Certificate 4"
                                                      width={356}
                                                      height={438}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </SwiperSlide>
                              </Swiper>
                        </section>
                  </main>
            </>
      )
}
