import Link from 'next/link'
import React from 'react'

type ButtonTextIconProps = {
      link: string
      className?: string
      children: React.ReactNode
}

export default function ButtonTextIcon(props: ButtonTextIconProps) {
      return (
            <>
                  <Link href={props.link} className={`lg:py-[15px] py-3 lg:px-[30px] px-[15px] bg-theme-brand text-white rounded-[8px] hover:bg-opacity-80 duration-300 ${props.className}`}>
                        {props.children}
                  </Link>
            </>
      )
}
