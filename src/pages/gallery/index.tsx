import Footer from '@/components/layout/Footer'
import Explore from '@/components/layout/Gallery/Explore'
import Footage from '@/components/layout/Gallery/Footage'
import OurGalleries from '@/components/layout/Gallery/OurGalleries'
import Navbar from '@/components/layout/Navbar'
import Subscribe from '@/components/layout/Subscribe'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Gallery - Asia Aero Technology</title>
                  </Head>
                  <Explore />
                  <Footage />
                  <Navbar />
                  <OurGalleries />
                  <Subscribe />
                  <Footer />
            </>
      )
}
