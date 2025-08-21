import Link from 'next/link'
import React from 'react'

type ButtonProps = {
      link: string
      className?: string
      children: React.ReactNode
      icon?: React.ReactNode
}

export default function Button(props: ButtonProps) {
      return (
            <>
                  <Link href={props.link} className={`lg:py-[15px] py-3 lg:px-[30px] px-[15px] bg-[#F9F400] text-slate-800 hover:bg-opacity-80 duration-300 ${props.className}`}>
                        <h2 className='font-medium lg:text-sm text-xs'>{props.children}</h2>
                        {props.icon}
                  </Link>
            </>
      )
}
