import Banner from '@/components/layout/Contact/Banner'
import OurTeam from '@/components/layout/Contact/OurTeam'
import ContactLight from '@/components/layout/ContactLight'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Contact - Asia Aero Technology</title>
                  </Head>
                  <Navbar />
                  <Banner />
                  <ContactLight className={'lg:mb-[150px] mb-[100px]'} />
                  <OurTeam />
                  <Footer />
            </>
      )
}