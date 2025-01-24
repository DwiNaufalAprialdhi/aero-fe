import React, { useEffect } from 'react';
import BadgeCategory from '../ui/BadgeCategory';
import ItemProduct from '../ui/ItemProduct';
import AOS from "aos";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



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
                  <main className="w-full lg:mb-[150px] mb-[100px] overflow-hidden">
                        <section data-aos="fade-right" className="container_section flex flex-col mb-[50px]">
                              <BadgeCategory>Our Product and Service</BadgeCategory>
                              <h2 className="w-full max-w-[651px] font-bold lg:text-[48px] text-[32px] mt-[14px]">
                                    Advanced Aviation Services, Management, and Hangar Leasing
                              </h2>
                        </section>
                        <section data-aos="fade-left" className="mb-[50px]">
                              <div className='container_section_slider ourValuesSlider grid grid-cols-1'>
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          pagination={{
                                                clickable: true,
                                          }}
                                          loop={true}
                                          breakpoints={{
                                                320: {
                                                      slidesPerView: 1.1,
                                                      spaceBetween: 10,
                                                },
                                                640: {
                                                      slidesPerView: 2.1,
                                                      spaceBetween: 10,
                                                },
                                                768: {
                                                      slidesPerView: 2.1,
                                                      spaceBetween: 10,
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
