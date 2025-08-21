import Link from 'next/link'
import React from 'react'

type ButtonOutlineProps = {
      link: string
      className?: string
      children: React.ReactNode
}

export default function ButtonOutline(props: ButtonOutlineProps) {
      return (
            <>
                  <Link href={props.link} className={`lg:py-[15px] py-3 lg:px-[30px] px-[15px] bg-transparent text-slate-50 border border-slate-50 hover:opacity-80 duration-200 flex items-center justify-center ${props.className}`}>
                        <h2 className='font-medium lg:text-sm text-xs'>{props.children}</h2>
                  </Link>
            </>
      )
}
