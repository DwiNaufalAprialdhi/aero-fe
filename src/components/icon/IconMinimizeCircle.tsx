import React from 'react'

type Props = {
      className: string
}

export default function IconMinimizeCircle(props: Props) {
      return (
            <div>
                  <svg className={props.className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M16 29.3332C23.3637 29.3332 29.3333 23.3636 29.3333 15.9998C29.3333 8.63604 23.3637 2.6665 16 2.6665C8.63619 2.6665 2.66666 8.63604 2.66666 15.9998C2.66666 23.3636 8.63619 29.3332 16 29.3332Z" fill="#475569" />
                        <path d="M21.2265 17H10.5599C10.0132 17 9.55991 16.5467 9.55991 16C9.55991 15.4533 10.0132 15 10.5599 15H21.2265C21.7732 15 22.2265 15.4533 22.2265 16C22.2265 16.5467 21.7865 17 21.2265 17Z" fill="#475569" />
                  </svg>
            </div>
      )
}
