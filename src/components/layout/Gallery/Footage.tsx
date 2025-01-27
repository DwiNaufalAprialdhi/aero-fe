import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Footage() {
      return (
            <>
                  <main className='w-full h-auto lg:mt-[100px] mt-[50px] lg:mb-[150px] mb-[50px]'>
                        <section data-aos="fade-left" className='container_section hidden lg:block'>
                              <div className='w-full h-auto relative grid lg:grid-cols-3 grid-cols-1 gap-5'>
                                    <div className='hidden lg:block w-[500px] h-[500px] absolute z-[1] shadow-lg rounded-2xl -top-[50px] left-[50%] -translate-x-[50%] overflow-hidden'>
                                          <Image
                                                src='/assets/images/footage-2.svg'
                                                alt='Footage'
                                                width={400} height={400}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    {/* Column 1 */}
                                    <div className='w-full col-span-1 lg:h-[400px] lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                          <Image
                                                src='/assets/images/footage-1.svg'
                                                alt='Footage'
                                                width={400} height={400}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    {/* Column 2 */}
                                    <div className='w-full col-span-1 lg:h-[400px] lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                          <Image
                                                src='/assets/images/footage-2.svg'
                                                alt='Footage'
                                                width={400} height={400}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                                    {/* Column 3 */}
                                    <div className='w-full col-span-1 lg:h-[400px] lg:rounded-[16px] rounded-[8px] overflow-hidden'>
                                          <Image
                                                src='/assets/images/footage-3.svg'
                                                alt='Footage'
                                                width={400} height={400}
                                                className='w-full h-full object-cover'
                                          />
                                    </div>
                              </div>
                        </section>
                        <section data-aos="fade-left" className='lg:hidden container_section_slider ourValuesSlider grid grid-cols-1'>
                              <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
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
                                                slidesPerView: 1.2,
                                                spaceBetween: 24,
                                          },
                                          768: {
                                                slidesPerView: 1.2,
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
                                          <div className='w-full h-[300px] rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/footage-1.svg'
                                                      alt='Footage'
                                                      width={400} height={400}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="pb-10">
                                          <div className='w-full h-[300px] rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/footage-2.svg'
                                                      alt='Footage'
                                                      width={400} height={400}
                                                      className='w-full h-full object-cover'
                                                />
                                          </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="pb-10">
                                          <div className='w-full h-[300px] rounded-[8px] overflow-hidden'>
                                                <Image
                                                      src='/assets/images/footage-3.svg'
                                                      alt='Footage'
                                                      width={400} height={400}
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
