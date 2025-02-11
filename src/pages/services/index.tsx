import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import AccordionDesign from '@/components/layout/Services/AccordionDesign'
import AccordionService from '@/components/layout/Services/AccordionService'
import Footage from '@/components/layout/Services/Footage'
import FullService from '@/components/layout/Services/FullService'
import Logistics from '@/components/layout/Services/Logistics'
import OurStrategic from '@/components/layout/Services/OurStrategic'
import Rotax from '@/components/layout/Services/Rotax'
import Supply from '@/components/layout/Services/Supply'
import VendorService from '@/components/layout/Services/VendorService'
import Subscribe from '@/components/layout/Subscribe'
import Head from 'next/head'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>Services - Asia Aero Technology</title>
                  </Head>
                  <FullService />
                  <Footage />
                  <AccordionService />
                  <VendorService />
                  <AccordionDesign />
                  <OurStrategic />
                  <Rotax />
                  <Logistics />
                  <Supply />
                  <Navbar />
                  <Subscribe />
                  <Footer />
            </>
      )
}
