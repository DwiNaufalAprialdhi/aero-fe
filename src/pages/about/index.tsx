import AboutSection from '@/components/layout/About/AboutSection'
import Certificate from '@/components/layout/About/Certificate'
import CompanyMilestones from '@/components/layout/About/CompanyMilestones'
import Dedicated from '@/components/layout/About/Dedicated'
import OurMission from '@/components/layout/About/OurMission'
import OurValues from '@/components/layout/About/OurValues'
import OurVision from '@/components/layout/About/OurVision'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Subscribe from '@/components/layout/Subscribe'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export default function index() {
      return (
            <>
                  <Head>
                        <title>About - Asia Aero Technology</title>
                  </Head>
                  <Navbar />
                  <Dedicated />
                  <AboutSection />
                  <OurVision />
                  <OurMission />
                  <div className='main_short w-full h-auto overflow-hidden relative'>
                        {/* Ornament */}
                        <div className="w-full h-auto absolute top-0 left-0">
                              <Image
                                    src="/assets/ornaments/ornament-short.svg"
                                    alt="Ornament"
                                    width={1000}
                                    height={1000}
                                    className='w-full h-auto object-cover'
                              />
                        </div>
                        <div className='w-full h-auto relative z-[2]'>
                              <OurValues />
                              <CompanyMilestones />
                        </div>
                  </div>
                  <Certificate />
                  <Contact />
                  <Subscribe />
                  <Footer />
            </>
      )
}
