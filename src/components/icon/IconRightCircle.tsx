import React from 'react'

type Props = {
      className: string
}

export default function IconRightCircle(props: Props) {
      return (
            <>
                  <svg className={props.className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M6 24C6 33.9412 14.0588 42 24 42C33.9411 42 42 33.9412 42 24C42 14.0589 33.9411 6 24 6C14.0588 6 6 14.0589 6 24Z" fill="#1E293B" />
                        <path d="M22 18L27.475 23.475C27.765 23.765 27.765 24.235 27.475 24.525L22 30" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </>
      )
}
