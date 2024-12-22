import Image from 'next/image'
import React from 'react'

type ItemProductProps = {
      title: string
      image: string
}

export default function ItemProduct(props: ItemProductProps) {
      return (
            <>
                  <div className='lg:min-w-[356px] min-w-[306px] lg:min-h-[438px] min-h-[376px] rounded-[16px] overflow-hidden relative group'>
                        <div className='absolute top-0 inset-x-0 w-full h-full bg-gradient-to-b from-transparent to-black z-[1]'></div>
                        <Image
                              src={props.image}
                              alt='product'
                              width={356}
                              height={438}
                              className='w-full h-full object-cover group-hover:scale-110 duration-500'
                        />
                        <div className='absolute bottom-0 left-0 pb-[50px] px-[30px] z-[2]'>
                              <h2 className='font-jakarta font-bold text-white lg:text-[24px] text-[20px]'>
                                    {props.title}
                              </h2>
                        </div>
                  </div>
            </>
      )
}
