import Banner from '@/components/layout/Banner'
import Contact from '@/components/layout/Contact'
import Faq from '@/components/layout/Faq'
import Footer from '@/components/layout/Footer'
import Gallery from '@/components/layout/Gallery'
import Hero from '@/components/layout/Hero'
import Navbar from '@/components/layout/Navbar'
import OurClient from '@/components/layout/OurClient'
import OurProduct from '@/components/layout/OurProduct'
import ShortStory from '@/components/layout/ShortStory'
import Testimonial from '@/components/layout/Testimonial'
import Vendor from '@/components/layout/Vendor'
import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vendor />
      <ShortStory />
      <OurClient />
      <div className='w-full overflow-hidden relative'>
        <Banner />
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
        <Testimonial />
        <OurProduct />
        <Faq />
        <Contact />
        {/* LAYER BOTTOM */}
        <div className='lg:w-[672px] w-[300px] h-[60px] lg:h-[100px] absolute bottom-[-5px] right-0 bg-white py-4 pr-4 pl-20 flex items-center lg:gap-6 gap-3 z-[2]'
          style={{ clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%)" }}
        >
        </div>
      </main>
      <Gallery />
      <Footer />
    </>
  )
}
