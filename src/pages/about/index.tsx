import AboutSection from '@/components/layout/About/AboutSection'
import Certificate from '@/components/layout/About/Certificate'
import CompanyInformation from '@/components/layout/About/CompanyInformation'
import CompanyMilestones from '@/components/layout/About/CompanyMilestones'
import Dedicated from '@/components/layout/About/Dedicated'
import OurMission from '@/components/layout/About/OurMission'
import OurValues from '@/components/layout/About/OurValues'
import OurVision from '@/components/layout/About/OurVision'
import Contact from '@/components/layout/Contact'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
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
                  <main className='w-full h-max lg:pt-[262px] lg:pb-[262px] pt-[100px] pb-[100px] relative bg-[#1E293B] flex flex-col lg:gap-[150px] gap-[100px] lg:mb-[150px] mb-[100px]'>
                        {/* LAYER TOP */}
                        <div
                              className='lg:w-[672px] w-[300px] h-[60px] lg:h-[100px] absolute top-[-5px] left-0 bg-white py-4 pr-4 pl-20 flex items-center lg:gap-6 gap-3 z-[2]'
                              style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 80px) 100%, 0 100%)" }}
                        >
                        </div>
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
                        <OurVision />
                        <OurMission />
                        <OurValues />
                        <CompanyMilestones />
                        <CompanyInformation />
                        {/* LAYER BOTTOM */}
                        <div className='lg:w-[672px] w-[300px] h-[60px] lg:h-[100px] absolute bottom-[-5px] right-0 bg-white py-4 pr-4 pl-20 flex items-center lg:gap-6 gap-3 z-[2]'
                              style={{ clipPath: "polygon(80px 0, 100% 0, 100% 100%, 0 100%)" }}
                        >
                        </div>
                  </main>
                  <Certificate />
                  <Contact />
                  <Footer />
            </>
      )
}
