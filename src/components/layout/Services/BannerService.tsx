import Image from 'next/image'
import React from 'react'

export default function BannerService() {
      return (
            <>
                  <Image src={'/assets/images/banner-service.svg'} alt='banner' width={1440} height={413} className='w-full h-max object-cover border-none translate-y-[-3px]' />
            </>
      )
}
