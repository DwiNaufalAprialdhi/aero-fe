import React, { useEffect } from 'react';
import BadgeCategory from '../ui/BadgeCategory';
import Image from 'next/image';
import AOS from "aos";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


export default function OurClient() {

      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);

      const clients = [
            { id: 1, image: '/assets/images/client-1.svg', link: 'http://puspenerbad-tniad.mil.id/' },
            { id: 2, image: '/assets/images/client-2.svg', link: 'https://www.lionair.co.id/' },
            { id: 3, image: '/assets/images/client-3.svg', link: 'https://dephub.go.id/' },
            { id: 4, image: '/assets/images/client-4.svg', link: 'https://www.airbus.com/en' },
            { id: 5, image: '/assets/images/client-5.svg', link: 'https://www.gmf-aeroasia.co.id/' },
            { id: 6, image: '/assets/images/client-6.svg', link: 'https://www.tni-au.mil.id/' },
            { id: 7, image: '/assets/images/client-7.svg', link: 'https://www.kemhan.go.id/' },
            { id: 8, image: '/assets/images/client-8.svg', link: 'https://genesaacademy.com/' },
            { id: 9, image: '/assets/images/client-9.svg', link: 'https://www.instagram.com/asiaaeroflyingclub/' },
            { id: 10, image: '/assets/images/client-10.svg', link: 'https://airbpakr.com/' },
            { id: 11, image: '/assets/images/client-11.svg', link: 'https://www.mja-tech.com/' },
            { id: 12, image: '/assets/images/client-12.svg', link: 'http://www.flypremiair.com/' },
            { id: 13, image: '/assets/images/client-13.svg', link: 'https://www.linkedin.com/in/burung-besi-berjaya-03242621a/?originalSubdomain=id' },
            { id: 14, image: '/assets/images/client-14.svg', link: 'https://www.gustisaktimandiri.com/' },
            { id: 15, image: '/assets/images/client-15.svg', link: 'https://www.airfastindonesia.com/' },
            { id: 16, image: '/assets/images/client-16.svg', link: 'https://www.pelita-air.com/' },
            { id: 17, image: '/assets/images/client-17.svg', link: 'https://www.wiseair.co.id/' },
            { id: 18, image: '/assets/images/client-18.svg', link: 'https://osogroup.co.id/' },
            { id: 19, image: '/assets/images/client-19.svg', link: 'https://www.globalniagaindotama.com/' },
            { id: 20, image: '/assets/images/client-20.svg', link: 'https://www.menlhk.go.id/' },
            { id: 21, image: '/assets/images/client-21.svg', link: 'https://www.indonesian-aerospace.com/en/' },
            { id: 22, image: '/assets/images/client-22.svg', link: 'https://kalimasadapusaka.com/' },
      ];

      return (
            <>
                  <main className='w-full mt-[100px] lg:mb-[150px] mb-[100px] overflow-hidden'>
                        <section className='container_section grid grid-cols-12 items-center lg:gap-[50px] gap-6'>
                              <div data-aos='fade-right' className='w-full lg:col-span-5 col-span-12 flex flex-col gap-y-[14px]'>
                                    <BadgeCategory>Our Clients</BadgeCategory>
                                    <h2 className='font-normal lg:text-[43px] text-[32px] text-theme-brand'>
                                          Trusted by <span className='font-bold'>Leading </span><span className='font-bold text-theme-red'>Aviation Companies</span>
                                    </h2>
                              </div>
                              <div data-aos='fade-left' className='w-full lg:col-span-7 col-span-12 grid grid-cols-1 overflow-hidden'>
                                    <Swiper
                                          loop={true}
                                          autoplay={{
                                                delay: 1500,
                                                disableOnInteraction: false,
                                          }}
                                          modules={[Autoplay]}
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          pagination={{
                                                clickable: true,
                                          }}
                                          breakpoints={{
                                                0: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                                320: {
                                                      slidesPerView: 3,
                                                      spaceBetween: 24,
                                                },
                                                640: {
                                                      slidesPerView: 4,
                                                      spaceBetween: 24,
                                                },
                                                768: {
                                                      slidesPerView: 4,
                                                      spaceBetween: 24,
                                                },
                                                1024: {
                                                      slidesPerView: 4,
                                                      spaceBetween: 24,
                                                },
                                                1280: {
                                                      slidesPerView: 4,
                                                      spaceBetween: 24,
                                                },
                                          }}
                                          className="w-full col-span-1"
                                    >
                                          {clients.concat(clients).map((client, index) => (
                                                <SwiperSlide key={index}>
                                                      <Link href={client.link} className='w-full h-auto' target='_blank'>
                                                            <Image
                                                                  src={client.image}
                                                                  alt='Client Logo'
                                                                  width={150}
                                                                  height={85}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </Link>
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>
                              </div>
                        </section>
                  </main>
            </>
      );
}
