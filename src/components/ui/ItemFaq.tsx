import React from 'react'
import IconAddCircle from '../icon/IconAddCircle'
import IconMinimizeCircle from '../icon/IconMinimizeCircle'

type ItemFaqProps = {
      title: string;
      desc: string;
}

export default function ItemFaq(props: ItemFaqProps) {
      return (
            <>
                  <div className='w-full h-max overflow-hidden transform transition-all duration-300 ease-in-out relative'>
                        <input type="checkbox" className='absolute top-0 inset-x-0 w-full h-[70px] z-[3] cursor-pointer peer opacity-0' />
                        {/* Title */}
                        <div className='py-[24px] pl-[20px] pr-[40px] bg-slate-400 peer-checked:bg-slate-600 transition-all duration-300 relative'>
                              <h2 className='font-semibold lg:text-[20px] text-base'>{props.title}</h2>
                        </div>
                        <div className='absolute peer-checked:hidden top-6 right-5'>
                              <IconAddCircle className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px]' />
                        </div>
                        <div className='absolute hidden peer-checked:block top-6 right-5'>
                              <IconMinimizeCircle className='lg:w-[32px] w-[30px] lg:h-[32px] h-[30px]' />
                        </div>
                        {/* Desc */}
                        <div className='px-0 pb-0 peer-checked:px-5 peer-checked:pb-5 bg-slate-600 peer-checked:bg-slate-600 transition-all duration-300 h-0 peer-checked:h-auto overflow-hidden'>
                              <p className='font-normal lg:text-base text-sm text-theme-secondary'>{props.desc}</p>
                        </div>
                  </div>
            </>
      )
}
