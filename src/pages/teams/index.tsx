import OurTeams from '@/components/layout/About/OurTeams'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import HeroTeams from '@/components/layout/Teams/Hero'
import React from 'react'

export default function index() {
      return (
            <>
                  <Navbar />
                  <HeroTeams />
                  <OurTeams />
                  <Footer />
            </>
      )
}
