import AboutSection from '@/components/layout/About/AboutSection'
import Dedicated from '@/components/layout/About/Dedicated'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

export default function index() {
      return (
            <>
                  <Navbar />
                  <Dedicated />
                  <AboutSection />
            </>
      )
}
