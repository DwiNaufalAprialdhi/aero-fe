import React from 'react'

type CardRotaxProps = {
      children?: React.ReactNode
      title: string
}

export default function CardRotax(props: CardRotaxProps) {
      return (
            <>
                  <div className='w-full h-auto col-span-1 lg:p-5 p-3 flex flex-col lg:gap-6 gap-3 bg-slate-100'>
                        {/* Icon */}
                        <div className='lg:w-[48px] lg:h-[48px] w-[30px] h-[30px] rounded-full lg:border-[5px] border-[4px] border-theme-[#334155]/50 bg-slate-700 flex items-center justify-center'>
                              {props.children}
                        </div>
                        {/* Text */}
                        <h2 className='font-bold lg:text-[24px] text-sm text-slate-800 leading-normal'>
                              {props.title}
                        </h2>
                  </div>
            </>
      )
}
