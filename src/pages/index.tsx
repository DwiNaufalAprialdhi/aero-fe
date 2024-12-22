import Contact from '@/components/layout/Contact'
import Faq from '@/components/layout/Faq'
import Footer from '@/components/layout/Footer'
import Gallery from '@/components/layout/Gallery'
import Hero from '@/components/layout/Hero'
import Navbar from '@/components/layout/Navbar'
import OurClient from '@/components/layout/OurClient'
import OurProduct from '@/components/layout/OurProduct'
import ShortStory from '@/components/layout/ShortStory'
import Subscribe from '@/components/layout/Subscribe'
import Testimonial from '@/components/layout/Testimonial'
import Vendor from '@/components/layout/Vendor'
import React from 'react'

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vendor />
      <ShortStory />
      <Testimonial />
      <OurClient />
      <OurProduct />
      <Faq />
      <Contact />
      <Gallery />
      <Subscribe />
      <Footer />
    </>
  )
}
