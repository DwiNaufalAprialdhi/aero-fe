import React from 'react'

type Props = {
      className: string
}

export default function IconLeftCircle(props: Props) {
      return (
            <>
                  <svg className={props.className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" d="M42 24C42 33.9412 33.9412 42 24 42C14.0589 42 6 33.9412 6 24C6 14.0589 14.0589 6 24 6C33.9412 6 42 14.0589 42 24Z" fill="#1E293B" />
                        <path d="M26 18L20.525 23.475C20.235 23.765 20.235 24.235 20.525 24.525L26 30" stroke="#1E293B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </>
      )
}
