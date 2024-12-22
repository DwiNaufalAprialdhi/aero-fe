import React from 'react'

type Props = {
      className: string
}

export default function IconHamburger(props: Props) {
      return (
            <>
                  <svg className={props.className} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12.5H20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                        <path d="M5 17.5H20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                        <path d="M5 7.5H20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                  </svg>
            </>
      )
}
