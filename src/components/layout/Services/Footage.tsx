import Image from 'next/image'
import React from 'react'

export default function Footage() {
      return (
            <>
                  <div className='container_section lg:mb-[80px] mb-[50px]'>
                        <main data-aos="fade-in" className="w-full lg:h-[500px] h-[238px] lg:rounded-[16px] rounded-[8px] overflow-hidden">
                              <Image
                                    src={'/assets/images/footage.svg'}
                                    alt='footage'
                                    width={1440}
                                    height={518}
                                    className='w-full h-full object-contain lg:object-cover lg:rounded-[16px] rounded-[8px]'
                              />
                        </main>
                  </div>
            </>
      )
}
