import React from 'react'

type Props = {
      className?: string
      children?: React.ReactNode
      title: string
}

export default function CardOurValues({ className = '', children, title }: Props) {
      return (
            <div
                  className={`w-full h-max lg:p-5 p-3 bg-slate-200 flex items-center lg:gap-x-6 gap-x-3 ${className}`}
            >
                  {/* Icon */}
                  <div className="lg:w-[42px] lg:h-[42px] w-[30px] h-[30px] overflow-hidden flex items-center justify-center bg-slate-700 border-[5px] border-slate-500 animate-pulse">
                        {children}
                  </div>
                  {/* Title */}
                  <h2 className="font-semibold leading-normal lg:text-[20px] text-sm text-slate-800">
                        {title}
                  </h2>
            </div>
      )
}
