import React from 'react'

type Props = {
      title: string
}

export default function LabelSectionDark(props: Props) {
      return (
            <>
                  <div className='w-max h-max py-[6px] pl-[42px] relative border-b border-slate-800 overflow-hidden'>
                        {/* BOX */}
                        <div className='w-[32px] h-full bg-slate-800 absolute top-0 left-0 pointer-events-none' style={{ clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0% 100%)" }}
                        >
                        </div>
                        {/* TEXT */}
                        <h2 className='font-normal lg:text-base text-sm text-slate-800'>
                              {props.title}
                        </h2>
                  </div>
            </>
      )
}
