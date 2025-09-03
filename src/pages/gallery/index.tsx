import ContactLight from '@/components/layout/ContactLight'
import Footer from '@/components/layout/Footer'
import Banner from '@/components/layout/Gallery/Banner'
import Explore from '@/components/layout/Gallery/Explore'
import OurGalleries from '@/components/layout/Gallery/OurGalleries'
import Navbar from '@/components/layout/Navbar'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Gallery - Asia Aero Technology</title>
                  </Head>
                  <Navbar />
                  <Banner />
                  <Explore />
                  <OurGalleries />
                  <ContactLight className={'lg:mb-[250px] mb-[200px]'} />
                  <Footer />
            </>
      )
}
