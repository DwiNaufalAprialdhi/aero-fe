import React, { useEffect } from 'react';
import BadgeCategory from '../ui/BadgeCategory';
import Image from 'next/image';
import AOS from "aos";
import Link from 'next/link';


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
      ];

      return (
            <>
                  <main className='w-full mt-[100px] lg:mb-[150px] mb-[100px] overflow-hidden'>
                        <section className='container_section grid grid-cols-12 items-center lg:gap-[50px] gap-6'>
                              <div data-aos='fade-right' className='w-full lg:col-span-5 col-span-12 flex flex-col gap-y-[14px]'>
                                    <BadgeCategory>Our Clients</BadgeCategory>
                                    <h2 className='font-jakarta font-normal lg:text-[48px] text-[32px] text-theme-brand'>
                                          Trusted by <span className='font-bold'>Leading Aviation Companies</span>
                                    </h2>
                              </div>
                              <div data-aos='fade-left' className='w-full lg:col-span-7 col-span-12 overflow-hidden'>
                                    <div className='container_clients'>
                                          <div className='wrapper_clients'>
                                                {/* Duplikasikan elemen */}
                                                {clients.concat(clients).map((client, index) => (
                                                      <Link href={client.link} key={index} className='lg:w-[150px] w-[85px] lg:h-[85px] h-[48px] mr-6' target='_blank'>
                                                            {/* Placeholder untuk logo */}
                                                            <Image
                                                                  src={client.image}
                                                                  alt='Client Logo'
                                                                  width={150}
                                                                  height={85}
                                                                  className='w-full h-full object-cover'
                                                            />
                                                      </Link>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </main>
            </>
      );
}
