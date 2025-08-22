import Image from 'next/image'
import React from 'react'

export default function Banner() {
      return (
            <>
                  <Image src={'/assets/images/banner.svg'} alt='banner' width={1440} height={413} className='w-full h-max object-cover' />
            </>
      )
}
