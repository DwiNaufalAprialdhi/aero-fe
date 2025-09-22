/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react';
import ItemProduct from '../ui/ItemProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import LabelSectionLight from '../material/LabelSectionLight';
import Icon from '../icon/Icon';



const productItems = [
      { id: 1, title: 'Aviation Asset Management', image: '/assets/images/product-1.png' },
      { id: 2, title: 'Aircraft Maintenance', image: '/assets/images/product-2.png' },
      { id: 3, title: 'Aviation Supply Chain', image: '/assets/images/product-3.png' },
      { id: 4, title: 'Aviation  Consultant', image: '/assets/images/product-4.png' },
]

export default function OurProduct() {
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
                  <main className="w-full overflow-hidden relative z-[3] text-slate-50">
                        <section className="container_section flex flex-col mb-[50px]">
                              <LabelSectionLight title='Our Product and Service' />
                              <h2 className="w-full max-w-[700px] font-bold lg:text-[48px] leading-tight text-[24px] mt-[14px]">
                                    Advanced Aviation Services, Management, and <span className='font-bold text-theme-red'>Hangar Leasing</span>
                              </h2>
                        </section>
                        <section className='flex flex-col'>
                              <div className='container_section md:px-0 px-5 ourValuesSlider grid grid-cols-1'>
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          loop={false}
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
                                                320: {
                                                      slidesPerView: 1.1,
                                                      spaceBetween: 20,
                                                },
                                                640: {
                                                      slidesPerView: 2.1,
                                                      spaceBetween: 20,
                                                },
                                                768: {
                                                      slidesPerView: 2.1,
                                                      spaceBetween: 24,
                                                },
                                                1024: {
                                                      slidesPerView: 3.2,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          className="product-swiper w-full col-span-1 cursor-grab"
                                    >
                                          {productItems.map((item) => (
                                                <SwiperSlide className='pb-10' key={item.id}>
                                                      <ItemProduct title={item.title} image={item.image} />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                              {/* PROGRESSBAR & ARROW LEFT RIGHT */}
                              <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-0 flex items-center md:gap-[50px] gap-6">
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
                              </div>
                        </section>
                  </main>
            </>
      );
}
