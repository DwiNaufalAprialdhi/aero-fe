import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AccordionDesign from '@/components/layout/Services/AccordionDesign'
import AccordionService from '@/components/layout/Services/AccordionService'
import Banner from '@/components/layout/Services/Banner'
import BannerService from '@/components/layout/Services/BannerService'
import FullService from '@/components/layout/Services/FullService'
import Logistics from '@/components/layout/Services/Logistics'
import OurStrategic from '@/components/layout/Services/OurStrategic'
import Rotax from '@/components/layout/Services/Rotax'
import Supply from '@/components/layout/Services/Supply'
import VendorService from '@/components/layout/Services/VendorService'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Services - Asia Aero Technology</title>
                  </Head>
                  <Navbar />
                  <Banner />
                  <VendorService />
                  <FullService />
                  <div className='w-full overflow-hidden relative'>
                        <BannerService />
                        {/* ORNAMENT */}
                        <div className='absolute w-full lg:h-[200px] h-[100px] bottom-0 inset-x-0 pointer-events-none z-[-1]'>
                              <Image
                                    src="/assets/images/ornament-background.svg"
                                    alt="Ornament"
                                    width={1000}
                                    height={1000}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                  </div>
                  <main className='w-full h-max lg:pt-[262px] lg:pb-[262px] pt-[100px] pb-[100px] relative bg-[#1E293B] flex flex-col lg:gap-[150px] gap-[100px] lg:mb-[150px] mb-[100px]'>
                        {/* ORNAMENT */}
                        <div className='w-full h-full absolute top-0 inset-x-0 pointer-events-none z-[1]'>
                              <Image
                                    src="/assets/images/ornament-background.svg"
                                    alt="Ornament"
                                    width={1000}
                                    height={1000}
                                    className='w-full h-full object-cover'
                              />
                        </div>
                        <AccordionService />
                        <AccordionDesign />
                        <OurStrategic />
                        <Rotax />
                        <Contact />
                        {/* LAYER BOTTOM */}
                        <div className='lg:w-[672px] w-[300px] h-[60px] lg:h-[100px] absolute bottom-[-5px] right-0 bg-white py-4 pr-4 pl-20 flex items-center lg:gap-6 gap-3 z-[2]'
                              style={{ clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%)" }}
                        >
                        </div>
                  </main>
                  <Logistics />
                  <Supply />
                  <Footer />
            </ >
      )
}
