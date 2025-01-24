import Icon from '@/components/icon/Icon'
import React from 'react'

type AccordionProps = {
      title: string
      children: React.ReactNode
}

export default function Accordion(props: AccordionProps) {
      return (
            <>
                  <div className='w-full h-auto border-b overflow-hidden rounded-[2px] border-slate-200 relative'>
                        {/* Input */}
                        <input type="checkbox" name="accordionService" className="w-full lg:h-[120px] h-16 opacity-0 absolute cursor-pointer z-[1] peer" />
                        {/* Icon */}
                        <div className='absolute lg:top-[40px] top-4 right-5 lg:w-[52px] lg:h-[53px] w-[30px] h-[30px] rounded-full border border-slate-700 text-slate-700 bg-transparent flex items-center justify-center peer-checked:bg-slate-700 peer-checked:text-white transition-all duration-300 peer-checked:rotate-90'>
                              <Icon.arrowRight className='lg:w-[25px] w-[15px] h-auto' />
                        </div>
                        {/* Head */}
                        <div className="w-full bg-transparent peer-checked:bg-slate-100 lg:py-[50px] py-5 pl-5 pr-[60px] transition-all duration-300">
                              <h2 className="font-bold lg:text-[32px] text-sm text-slate-800">
                                    {props.title}
                              </h2>
                        </div>
                        {/* Body */}
                        <div className='w-full peer-checked:bg-slate-100 overflow-hidden px-5 peer-checked:lg:py-[50px] peer-checked:py-5 h-0 py-0 peer-checked:h-auto transition-all duration-300 transform'>
                              {props.children}
                        </div>
                  </div>
            </>
      )
}
