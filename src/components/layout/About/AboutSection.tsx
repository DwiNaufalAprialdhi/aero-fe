/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLangContext } from '@/components/hooks/LangContext';
import Icon from '@/components/icon/Icon';
import LabelSectionDark from '@/components/material/LabelSectionDark'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// dummy data slider
const sliderData = [
      {
            id: 1,
            image: '/assets/images/about.svg',
            bg: '#F9F400',
      },
      {
            id: 2,
            image: '/assets/images/gallery-1.svg',
            bg: '#F9F400',
      },
      {
            id: 3,
            image: '/assets/images/gallery-2.svg',
            bg: '#F9F400',
      },
      {
            id: 4,
            image: '/assets/images/gallery-3.svg',
            bg: '#F9F400',
      },
      {
            id: 5,
            image: '/assets/images/gallery-4.svg',
            bg: '#F9F400',
      },
      {
            id: 6,
            image: '/assets/images/gallery-6.svg',
            bg: '#F9F400',
      },
      {
            id: 7,
            image: '/assets/images/gallery-7.svg',
            bg: '#F9F400',
      },
];

export default function AboutSection() {
      const swiperRef = useRef<any>(null);
      const [progress, setProgress] = useState(0);
      const { lang } = useLangContext()

      const handlePrev = () => {
            swiperRef.current?.slidePrev();
      };

      const handleNext = () => {
            swiperRef.current?.slideNext();
      };
      return (
            <>
                  <main className='w-full h-auto overflow-hidden relative lg:mb-[150px] mb-[50px]'>
                        <section className='container_section grid md:items-start items-start lg:grid-cols-2 grid-cols-1 lg:gap-[60px] gap-[50px]'>
                              {/* LEFT SLIDER */}
                              <section className="container_section grid grid-cols-1 order-2 lg:order-1">
                                    <Swiper
                                          loop={false}
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          pagination={{
                                                clickable: true,
                                          }}
                                          onSwiper={(swiper) => (swiperRef.current = swiper)}
                                          onSlideChange={(swiper) => {
                                                const slidesPerView =
                                                      typeof swiper.params.slidesPerView === 'number'
                                                            ? swiper.params.slidesPerView
                                                            : 1;

                                                const total = swiper.slides.length - slidesPerView;
                                                const current = swiper.activeIndex;
                                                const percent = total > 0 ? (current / total) * 100 : 100;

                                                setProgress(percent);
                                          }}
                                          className="w-full col-span-1 cursor-grab"
                                    >
                                          {sliderData.map((item) => (
                                                <SwiperSlide key={item.id} className="md:pb-5 pb-2">
                                                      <div className="w-full md:h-[550px] h-[280px] relative overflow-hidden">
                                                            <div className='w-full absolute h-full z-[2] top-[-20px] right-[-20px] rounded-none overflow-hidden'>
                                                                  <Image
                                                                        src={item.image}
                                                                        alt={`about-${item.id}`}
                                                                        width={500}
                                                                        height={500}
                                                                        className="w-full h-full object-cover scale-110"
                                                                  />
                                                            </div>
                                                            <div
                                                                  className="w-full h-full absolute bottom-[-20px] left-[-20px] z-[1]"
                                                                  style={{ backgroundColor: item.bg }}
                                                            />
                                                      </div>
                                                </SwiperSlide>
                                          ))}
                                    </Swiper>

                                    {/* PROGRESSBAR & ARROW LEFT RIGHT */}
                                    <section className="w-full flex items-center md:gap-[50px] gap-6 mt-4">
                                          {/* PROGRESSBAR */}
                                          <div className="flex-grow w-full h-[6px] rounded-full bg-zinc-200 relative overflow-hidden">
                                                <div
                                                      className="absolute left-0 top-0 h-full bg-[#1e293b] rounded-full transition-all duration-300"
                                                      style={{ width: `${progress}%` }}
                                                ></div>
                                          </div>

                                          {/* BUTTONS */}
                                          <div className="flex-shrink-0 flex items-center justify-center gap-[14px]">
                                                <button
                                                      onClick={handlePrev}
                                                      className="md:w-[36px] md:h-[36px] w-7 h-7 hover:scale-105 duration-200 overflow-hidden rounded-full flex items-center justify-center bg-[#1e293b]/10"
                                                >
                                                      <Icon.arrowSwiper2 className="w-[6px] h-max" />
                                                </button>
                                                <button
                                                      onClick={handleNext}
                                                      className="md:w-[36px] md:h-[36px] w-7 h-7 hover:scale-105 duration-200 overflow-hidden rounded-full flex items-center justify-center bg-[#1e293b]/10"
                                                >
                                                      <Icon.arrowSwiper2 className="w-[6px] h-max rotate-180" />
                                                </button>
                                          </div>
                                    </section>

                              </section>
                              {/* Right */}
                              <div className="w-full col-span-1 flex flex-col order-1 lg:order-2">
                                    <LabelSectionDark title={'Overview'} />
                                    {/* <h2 className="font-normal lg:text-[48px] text-[24px] text-slate-800 block lg:my-[14px] my-3">
                                          Overview <span className='font-bold'>Asia Aero</span>
                                    </h2> */}
                                    <div className='flex flex-col font-normal lg:text-base text-sm text-slate-800 lg:gap-y-[14px] gap-y-3 lg:mt-[14px] mt-3'>
                                          {lang === 'ID' ? <>
                                                <span>
                                                      PT. Asia Aero Technology (AAT) adalah perusahaan swasta yang bergerak di sektor penerbangan, didirikan pada tahun 2007 sebagai perwakilan resmi Rotax di Indonesia. Pada tahun 2010, untuk mendukung operasi kami yang terus berkembang, kami mengakuisisi, membangun, dan mulai mengoperasikan Bandara Wiladatika di Cibubur, Jakarta. Langkah strategis ini memungkinkan kami mengembangkan pusat Maintenance, Repair, and Overhaul (MRO) yang mengkhususkan diri pada helikopter dan general aviation.
                                                </span>
                                                <span>
                                                      Seiring pertumbuhan kami, kami berkomitmen menjadi penyedia rantai pasok penerbangan terkemuka di Indonesia. Jaringan dan kapabilitas kami yang terus berkembang memungkinkan kami mendukung militer Indonesia, operator pesawat, dan MRO di seluruh negeri. Pada tahun 2022, kami memperkuat posisi melalui merger dan akuisisi dengan beberapa perusahaan penerbangan terkemuka di Indonesia. Saat ini, kapabilitas grup kami Satuhari Lingkar Angkasa (SLA) group mencakup Design Organization Approval (DOA), Aircraft Maintenance Organization (AMO 145), Operator Certificate (OC91), dan operasional Flying Club.
                                                </span>
                                                <span>
                                                      Ke depan, kami ingin membangun ekosistem industri penerbangan yang komprehensif untuk mendukung pertumbuhan dinamis sektor penerbangan Indonesia.
                                                </span>
                                          </> : <>
                                                <span>
                                                      PT. Asia Aero Technology (AAT) is a privately held company operating in the aviation sector, established in 2007 as the official representative for Rotax in Indonesia. In 2010, to support our growing operations, we acquired, built, and began operating Wiladatika Airport in Cibubur, Jakarta. This strategic move enabled us to successfully develop a Maintenance, Repair, and Overhaul (MRO) center specializing in helicopters and general aviation.
                                                </span>
                                                <span>
                                                      As we continue to grow, we are committed to becoming Indonesia’s leading aviation supply chain provider. Our expanding network and capabilities allow us to support the Indonesian military, aircraft operators, and MROs across the country. In 2022, we strengthened our position through mergers and acquisitions with several prominent Indonesian aviation companies. Today, our group’s capabilities include Design Organization Approval (DOA), Aircraft Maintenance Organization (AMO 145), Operator Certificate (OC91), and Flying Club operations.
                                                </span>
                                                <span>
                                                      Looking ahead, our vision is to build a comprehensive aviation industry ecosystem that supports the dynamic growth of Indonesia’s aviation sector.
                                                </span>
                                          </>}



                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      )
}
