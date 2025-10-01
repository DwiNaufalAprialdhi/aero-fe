import React, { useEffect, useState } from 'react';
import IconLeftCircle from '../icon/IconLeftCircle';
import IconRightCircle from '../icon/IconRightCircle';
import ItemTestimoni from '../ui/ItemTestimoni';
import AOS from "aos";
import LabelSectionLight from '../material/LabelSectionLight';
import { useLangContext } from '../hooks/LangContext';


const testimonials = [
      {
            text: "Airbus Helicopters' customer center was established in 2008 to provide in-country support for both governmental and civil customers.",
            logo: '/assets/images/testimoni-1.svg',
            company: 'PT. Airbus Helicopter Indonesia',
            category: 'Aircraft Maintenance Organization',
      },
      {
            text: "One of Indonesian Air Charter Company (AOC135) with many General Aviation Fleets.",
            logo: '/assets/images/alfa-trans.svg',
            company: 'Alfa Trans Dirgantara',
            category: 'Air Operator',
      },
      {
            text: "A convenient air transportation for intracity and intercity flights with dozens of helistop.",
            logo: '/assets/images/white-sky.svg',
            company: 'White Sky Aviation',
            category: 'Air Operator',
      },
      {
            text: "Carpediem expand its business into the technology information, aviation, marine, and meteorological sector.",
            logo: '/assets/images/carpediem.svg',
            company: 'PT. Carpediem Aviasi Mandiri',
            category: 'Air Operator',
      },
      {
            text: "Graduates from Genesa Flight Academy are already prepared to fly multi engine aircrafts commonly used by commercial airlines.",
            logo: '/assets/images/ganesa.svg',
            company: 'Genesa Flight Academy',
            category: 'Flying School',
      },
      {
            text: "GSM supports the provision of parts through a modern supply system, with a large inventory of spare parts in stock.",
            logo: '/assets/images/gusti.svg',
            company: 'PT. Gusti Sakti Mandiri',
            category: 'Aircraft Maintenance Organization',
      },
      {
            text: "Approved Bell Helicopter CSF-Customer Support Facility in Indonesia, and a DGCA Indonesia approved facility.",
            logo: '/assets/images/kallimasda.svg',
            company: 'PT. Kalimasada Pusaka',
            category: 'Aircraft Maintenance Organization',
      },
];

const testimoni = [
      {
            text: "Pusat pelanggan Airbus Helicopters didirikan pada tahun 2008 untuk menyediakan dukungan di dalam negeri bagi pelanggan pemerintah dan sipil.",
            logo: '/assets/images/testimoni-1.svg',
            company: 'PT. Airbus Helicopter Indonesia',
            category: 'Organisasi Perawatan Pesawat',
      },
      {
            text: "Salah satu Perusahaan Carter Udara Indonesia (AOC135) dengan banyak Armada Penerbangan Umum.",
            logo: '/assets/images/alfa-trans.svg',
            company: 'Alfa Trans Dirgantara',
            category: 'Operator Udara',
      },
      {
            text: "Transportasi udara yang nyaman untuk penerbangan dalam dan antar kota dengan puluhan helistop.",
            logo: '/assets/images/white-sky.svg',
            company: 'White Sky Aviation',
            category: 'Operator Udara',
      },
      {
            text: "Carpediem memperluas bisnisnya ke sektor informasi teknologi, penerbangan, kelautan, dan meteorologi.",
            logo: '/assets/images/carpediem.svg',
            company: 'PT. Carpediem Aviasi Mandiri',
            category: 'Operator Udara',
      },
      {
            text: "Lulusan Genesa Flight Academy sudah siap menerbangkan pesawat multi-mesin yang umum digunakan oleh maskapai penerbangan komersial.",
            logo: '/assets/images/ganesa.svg',
            company: 'Genesa Flight Academy',
            category: 'Sekolah Penerbangan',
      },
      {
            text: "GSM mendukung penyediaan suku cadang melalui sistem pasokan modern, dengan inventaris suku cadang yang besar.",
            logo: '/assets/images/gusti.svg',
            company: 'PT. Gusti Sakti Mandiri',
            category: 'Organisasi Perawatan Pesawat',
      },
      {
            text: "Fasilitas Dukungan Pelanggan CSF Bell Helicopter yang Disetujui di Indonesia, dan fasilitas yang disetujui DGCA Indonesia.",
            logo: '/assets/images/kallimasda.svg',
            company: 'PT. Kalimasada Pusaka',
            category: 'Organisasi Perawatan Pesawat',
      },
];

export default function Testimonial() {
      const { lang } = useLangContext()

      useEffect(() => {
            AOS.init({
                  duration: 800,
                  once: true,
            });
      }, []);

      const [currentIndex, setCurrentIndex] = useState(0);

      const handlePrev = () => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      };

      const handleNext = () => {
            setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      };

      return (
            <main className='w-full overflow-x-hidden relative z-[3]'>
                  <section className='container_section'>
                        {/* Content */}
                        <div className='w-full h-auto grid grid-cols-3 items-center gap-x-[100px] gap-y-[24px]'>
                              {/* Left Section */}
                              <div className='w-full lg:col-span-1 col-span-3 flex flex-col'>
                                    <LabelSectionLight title={`${lang === 'ID' ? 'Testimoni' : 'Testimonials'}`} />
                                    {lang === 'ID' ? <>
                                          <h2 className='font-normal text-slate-50 lg:text-[48px] text-[24px] lg:leading-[60px] leading-[35px] my-[14px]'>
                                                Dengar Dari <span className='font-bold'>Klien </span><span className='text-theme-red font-bold'>Kami</span>
                                          </h2>
                                          <p className='font-normal lg:text-[24px] text-base lg:leading-[30px] leading-normal text-slate-200 lg:mb-[50px] mb-[0px]'>
                                                &quot;Kami berkomitmen untuk mengembangkan bandara penerbangan umum Indonesia&quot;
                                          </p>
                                    </> : <>
                                          <h2 className='font-normal text-slate-50 lg:text-[48px] text-[24px] lg:leading-[60px] leading-[35px] my-[14px]'>
                                                Hear From <span className='font-bold'>Our </span><span className='text-theme-red font-bold'>Clients</span>
                                          </h2>
                                          <p className='font-normal lg:text-[24px] text-base lg:leading-[30px] leading-normal text-slate-200 lg:mb-[50px] mb-[0px]'>
                                                &quot;We are committed to developing general aviation airport of Indonesia&quot;
                                          </p>
                                    </>}
                                    <div className='hidden lg:flex items-center gap-x-[14px]'>
                                          <div onClick={handlePrev} className='cursor-pointer hover:scale-105 duration-200'>
                                                <IconLeftCircle className='w-[48px] h-[48px]' />
                                          </div>
                                          <div onClick={handleNext} className='cursor-pointer hover:scale-105 duration-200'>
                                                <IconRightCircle className='w-[48px] h-[48px]' />
                                          </div>
                                    </div>
                              </div>

                              {/* Slider Section */}
                              <div className='w-full lg:col-span-2 col-span-3 overflow-hidden'>
                                    <div className='flex transition-all duration-500 ease-in-out transform' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                          {lang === 'ID' ? <>
                                                {testimoni.map((testimoni, index) => (
                                                      <div key={index} className='min-w-full'>
                                                            <ItemTestimoni
                                                                  text={testimoni.text}
                                                                  logo={testimoni.logo}
                                                                  company={testimoni.company}
                                                                  category={testimoni.category}
                                                            />
                                                      </div>
                                                ))}
                                          </> : <>
                                                {testimonials.map((testimoni, index) => (
                                                      <div key={index} className='min-w-full'>
                                                            <ItemTestimoni
                                                                  text={testimoni.text}
                                                                  logo={testimoni.logo}
                                                                  company={testimoni.company}
                                                                  category={testimoni.category}
                                                            />
                                                      </div>
                                                ))}
                                          </>}
                                    </div>
                                    <div className='flex lg:hidden items-center lg:gap-x-[14px] gap-x-2 lg:mt-[50px] mt-6'>
                                          <div onClick={handlePrev} className='cursor-pointer hover:scale-105 duration-200'>
                                                <IconLeftCircle className='lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]' />
                                          </div>
                                          <div onClick={handleNext} className='cursor-pointer hover:scale-105 duration-200'>
                                                <IconRightCircle className='lg:w-[48px] lg:h-[48px] w-[32px] h-[32px]' />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </main>
      );
}
