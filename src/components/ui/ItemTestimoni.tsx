import Image from 'next/image'
import React from 'react'

type ItemTestimoniProps = {
      text: string
      logo: string
      company: string
      category: string
}

export default function ItemTestimoni(props: ItemTestimoniProps) {
      return (
            <>
                  <div className='flex flex-col relative'>
                        <h2 className='absolute top-0 left-0 font-jakarta font-bold text-[128px] leading-none'>“</h2>
                        <h2 className='font-jakarta foont-normal lg:text-[32px] text-[24px] lg:mb-[50px] mb-[24px] pt-[75px]'>{props.text}</h2>
                        <div className='flex items-center space-x-[24px]'>
                              <div className='lg:w-[60px] w-[48px] lg:h-[60px] h-[48px] rounded-full overflow-hidden'>
                                    <Image src={props.logo} alt='Testimoni 1' width={60} height={60} className='w-full h-full object-cover' />
                              </div>
                              <div className='flex flex-col'>
                                    <h2 className='font-semibold lg:text-[24px] text-base text-theme-brand'>{props.company}</h2>
                                    <h2 className='font-normal lg:text-base text-sm text-theme-secondary'>{props.category}</h2>
                              </div>
                        </div>
                  </div>
            </>
      )
}
