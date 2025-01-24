import Image from 'next/image'
import React from 'react'

export default function Footage() {
      return (
            <>
                  <main data-aos="fade-in" className="w-full lg:h-[500px] h-[238px] overflow-hidden group lg:mb-[150px] mb-[50px]">
                        <Image
                              src={'/assets/images/footage.svg'}
                              alt='footage'
                              width={1440}
                              height={518}
                              className='w-full h-full object-contain lg:object-cover'
                        />
                  </main>
            </>
      )
}
