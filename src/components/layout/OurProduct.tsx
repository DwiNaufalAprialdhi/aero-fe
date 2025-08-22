import React, { useEffect } from 'react';
import ItemProduct from '../ui/ItemProduct';
import AOS from "aos";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import LabelSectionLight from '../material/LabelSectionLight';



const productItems = [
      { id: 1, title: 'Aviation Asset Management', image: '/assets/images/product-1.png' },
      { id: 2, title: 'Aircraft Maintenance', image: '/assets/images/product-2.png' },
      { id: 3, title: 'Aviation Supply Chain', image: '/assets/images/product-3.png' },
      { id: 4, title: 'Aviation  Consultant', image: '/assets/images/product-4.png' },
]

export default function OurProduct() {
      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);

      return (
            <>
                  <main className="w-full overflow-hidden relative z-[3] text-slate-50">
                        <section className="container_section flex flex-col mb-[50px]">
                              <LabelSectionLight title='Our Product and Service' />
                              <h2 className="w-full max-w-[700px] font-bold lg:text-[48px] leading-tight text-[32px] mt-[14px]">
                                    Advanced Aviation Services, Management, and <span className='font-bold text-theme-red'>Hangar Leasing</span>
                              </h2>
                        </section>
                        <section>
                              <div className='container_section md:px-0 px-5 ourValuesSlider grid grid-cols-1'>
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          pagination={{
                                                clickable: true,
                                          }}
                                          loop={false}
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
                                          modules={[Pagination]}
                                          className="product-swiper w-full col-span-1 cursor-grab"
                                    >
                                          {productItems.map((item) => (
                                                <SwiperSlide className='pb-10' key={item.id}>
                                                      <ItemProduct title={item.title} image={item.image} />
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </section>
                  </main>
            </>
      );
}
