import OurTeam from '@/components/layout/Contact/OurTeam'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Subscribe from '@/components/layout/Subscribe'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Contact - Asia Aero Technology</title>
                  </Head>
                  <Navbar />
                  <OurTeam />
                  <Subscribe />
                  <Footer />
            </>
      )
}
