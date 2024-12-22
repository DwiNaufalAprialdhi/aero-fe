import Image from 'next/image'
import React from 'react'

export default function OrnamentTopMobile() {
      return (
            <>
                  {/* Layer */}
                  <div className='absolute top-0 inset-x-0 z-[2] w-full h-full bg-gradient-to-b from-transparent to-white'></div>

                  {/* Line */}
                  <svg className='absolute top-0 inset-x-0 z-[1] w-full h-full object-cover' viewBox="0 0 399 289" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_166_1037" mask-type="alpha" maskUnits="userSpaceOnUse" x="-221" y="0" width="620" height="289">
                              <rect x="-221" width="619.783" height="289" fill="url(#paint0_radial_166_1037)" />
                        </mask>
                        <g mask="url(#mask0_166_1037)">
                              <circle cx="90.3838" cy="372.566" r="233.789" fill="url(#paint1_radial_166_1037)" stroke="black" stroke-dasharray="10 10" />
                              <circle cx="90.1351" cy="372.318" r="285.272" fill="url(#paint2_radial_166_1037)" stroke="black" stroke-dasharray="10 10" />
                              <circle cx="90.1351" cy="372.318" r="337.998" fill="url(#paint3_radial_166_1037)" stroke="black" stroke-dasharray="10 10" />
                        </g>
                        <defs>
                              <radialGradient id="paint0_radial_166_1037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(91.3787 151.215) rotate(-90) scale(204.19 437.902)">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                              </radialGradient>
                              <radialGradient id="paint1_radial_166_1037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(92.2561 383.408) rotate(-90) scale(329.656)">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                              </radialGradient>
                              <radialGradient id="paint2_radial_166_1037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(92.4206 385.551) rotate(-90) scale(402.406)">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                              </radialGradient>
                              <radialGradient id="paint3_radial_166_1037" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(92.8437 388.002) rotate(-90) scale(476.912)">
                                    <stop stop-color="white" />
                                    <stop offset="1" stop-color="white" stop-opacity="0" />
                              </radialGradient>
                        </defs>
                  </svg>
                  <div className='absolute left-[100px] top-[100px] z-[3] lg:w-[100px] w-[48px] h-[48px] lg:h-[100px] rounded-full overflow-hidden animate-pulse'>
                        <Image src='/assets/images/testimoni-1.svg' alt='testimoni 1' width={100} height={100} className='w-full h-full object-cover' />
                  </div>
                  <div className='absolute left-[50px] top-[10px] z-[3] lg:w-[100px] w-[48px] h-[48px] lg:h-[100px] rounded-full overflow-hidden animate-pulse'>
                        <Image src='/assets/images/testimoni-2.svg' alt='testimoni 1' width={100} height={100} className='w-full h-full object-cover' />
                  </div>

            </>
      )
}
