import Image from 'next/image'
import React from 'react'

export default function OrnamentTop() {
      return (
            <>
                  {/* Layer */}
                  <div className='absolute top-0 inset-x-0 z-[2] w-full h-full bg-gradient-to-b from-transparent to-white'></div>
                  {/* Line */}
                  <div className='absolute -top-12 inset-x-0 z-[1] scaleInOut'>
                        <Image src='/assets/images/testimoni-1-new.svg' alt='testimoni 1' width={100} height={100} className='w-full h-full object-cover' />
                  </div>
                  <div className='absolute -top-5 inset-x-0 z-[1] scaleInOut'>
                        <Image src='/assets/images/testimoni-2-new.svg' alt='testimoni 1' width={100} height={100} className='w-full h-full object-cover' />
                  </div>
                  <div className='absolute -top-3 inset-x-0 z-[1] scaleInOut'>
                        <Image src='/assets/images/testimoni-3-new.svg' alt='testimoni 1' width={100} height={100} className='w-full h-full object-cover' />
                  </div>
                  {/* Images */}
                  <div className='absolute left-[60px] lg:left-[70px] bottom-[110px] z-[3] lg:w-[100px] w-[48px] h-[48px] lg:h-[100px] rounded-full overflow-hidden scaleInOut1'>
                        <Image src='/assets/images/testimoni-1.svg' alt='testimoni 1' width={100} height={100} className='w-full h-full object-cover' />
                  </div>
                  <div className='absolute lg:right-[325px] right-[160px] top-[0px] z-[3] lg:w-[100px] w-[48px] h-[48px] lg:h-[100px] rounded-full overflow-hidden scaleInOut2'>
                        <Image src='/assets/images/testimoni-2.svg' alt='testimoni 1' width={100} height={100} className='w-full h-full object-cover' />
                  </div>
                  <div className='absolute lg:right-[180px] right-[150px] bottom-[116px] z-[3] lg:w-[100px] w-[48px] h-[48px] lg:h-[100px] rounded-full overflow-hidden scaleInOut3'>
                        <Image src='/assets/images/testimoni-3.svg' alt='testimoni 1' width={100} height={100} className='w-full h-full object-cover' />
                  </div>
            </>
      )
}
