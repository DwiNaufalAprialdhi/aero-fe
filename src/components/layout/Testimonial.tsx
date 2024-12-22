import React, { useEffect, useState } from 'react';
import BadgeCategory from '../ui/BadgeCategory';
import IconLeftCircle from '../icon/IconLeftCircle';
import IconRightCircle from '../icon/IconRightCircle';
import ItemTestimoni from '../ui/ItemTestimoni';
import OrnamentTop from '../ui/OrnamentTop';
import AOS from "aos";
import OrnamentTopMobile from '../ui/OrnamentTopMobile';


const testimonials = [
      {
            text: "Airbus Helicopters' customer center was established in 2008 to provide in-country support for both governmental and civil customers.",
            logo: '/assets/images/testimoni-1.svg',
            company: 'PT. Airbus Helicopter Indonesia',
            category: 'Aircraft Maintenance Organization',
      },
      {
            text: 'We provide full support for aviation systems to ensure safety and reliability.',
            logo: '/assets/images/testimoni-2.svg',
            company: 'PT. Aviation Systems',
            category: 'Aviation Services Provider',
      },
      {
            text: 'Our focus is on delivering high-quality aircraft maintenance services.',
            logo: '/assets/images/testimoni-3.svg',
            company: 'PT. Maintenance Solutions',
            category: 'Aircraft Maintenance Provider',
      },
];

export default function Testimonial() {

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
            <main className='w-full lg:mt-[100px] mt-[40px] lg:mb-[150px] mb-[100px] overflow-x-hidden'>
                  <section className='container_section'>
                        {/* Ornament Top Desktop & Tablet */}
                        <div data-aos='slide-up' className='hidden md:block w-full lg:h-[581px] md:h-[300px] relative overflow-hidden'>
                              <OrnamentTop />
                        </div>
                        {/* Ornament Top Desktop & Tablet */}
                        <div data-aos='slide-up' className='block md:hidden w-full h-[250px] relative overflow-hidden'>
                              <OrnamentTopMobile />
                        </div>

                        {/* Content */}
                        <div className='w-full h-auto grid grid-cols-3 items-center gap-x-[100px] gap-y-[24px]'>
                              {/* Left Section */}
                              <div data-aos='slide-right' className='w-full lg:col-span-1 col-span-3 flex flex-col'>
                                    <BadgeCategory>Testimonials</BadgeCategory>
                                    <h2 className='font-jakarta font-normal lg:text-[48px] text-[32px] my-[14px]'>
                                          Hear From <span className='font-bold'>Our Clients</span>
                                    </h2>
                                    <p className='font-normal lg:text-[24px] text-base lg:leading-[30px] leading-normal text-theme-secondary lg:mb-[50px] mb-[0px]'>
                                          &quot;We are committed to developing general aviation airport of Indonesia&quot;
                                    </p>
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
                              <div data-aos='slide-left' className='w-full lg:col-span-2 col-span-3 overflow-hidden'>
                                    <div className='flex transition-all duration-500 ease-in-out transform' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
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
                                    </div>
                                    <div className='flex lg:hidden items-center gap-x-[14px] mt-[50px]'>
                                          <div onClick={handlePrev} className='cursor-pointer hover:scale-105 duration-200'>
                                                <IconLeftCircle className='w-[48px] h-[48px]' />
                                          </div>
                                          <div onClick={handleNext} className='cursor-pointer hover:scale-105 duration-200'>
                                                <IconRightCircle className='w-[48px] h-[48px]' />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </main>
      );
}