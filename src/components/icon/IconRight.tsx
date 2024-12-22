import React from 'react'

type IconProps = {
      className?: string
}

export default function IconRight(props: IconProps) {
      return (
            <>
                  <svg className={props.className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </>
      )
}
