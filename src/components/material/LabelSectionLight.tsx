import React from 'react'

type Props = {
      title: string
}

export default function LabelSectionLight(props: Props) {
      return (
            <>
                  <div className='w-max h-max py-[6px] pl-[42px] relative border-b border-slate-50 overflow-hidden'>
                        {/* BOX */}
                        <div className='w-[32px] h-full bg-slate-50 absolute top-0 left-0 pointer-events-none' style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0% 100%)" }}
                        >
                        </div>
                        {/* TEXT */}
                        <h2 className='font-normal lg:text-base text-sm text-slate-50'>
                              {props.title}
                        </h2>
                  </div>
            </>
      )
}
