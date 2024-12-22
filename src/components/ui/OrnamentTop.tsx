import Image from 'next/image'
import React from 'react'

export default function OrnamentTop() {
      return (
            <>
                  {/* Layer */}
                  <div className='absolute top-0 inset-x-0 z-[2] w-full h-full bg-gradient-to-b from-transparent to-white'></div>
                  {/* Line */}
                  <div className='absolute top-0 inset-x-0 z-[1] scaleInOut'>
                        <svg className='w-full h-full object-cover' viewBox="0 0 1246 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="626" cy="680" r="469.5" fill="url(#paint0_radial_107_40)" stroke="black" stroke-dasharray="10 10" />
                              <circle cx="625.5" cy="679.5" r="573" fill="url(#paint1_radial_107_40)" stroke="black" stroke-dasharray="10 10" />
                              <circle cx="625.5" cy="679.5" r="679" fill="url(#paint2_radial_107_40)" stroke="black" stroke-dasharray="10 10" />
                              <defs>
                                    <radialGradient id="paint0_radial_107_40" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(629.764 701.795) rotate(-90) scale(662.735)">
                                          <stop stop-color="white" />
                                          <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </radialGradient>
                                    <radialGradient id="paint1_radial_107_40" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(630.095 706.105) rotate(-90) scale(808.989)">
                                          <stop stop-color="white" />
                                          <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </radialGradient>
                                    <radialGradient id="paint2_radial_107_40" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(630.945 711.031) rotate(-90) scale(958.775)">
                                          <stop stop-color="white" />
                                          <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </radialGradient>
                              </defs>
                        </svg>
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
