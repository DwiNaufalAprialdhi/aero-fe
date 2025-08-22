import React from 'react'

type Props = {
      className: string
}

export default function IconMinimizeCircle(props: Props) {
      return (
            <div>
                  <svg className={props.className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.4" d="M15.9993 29.3332C23.3631 29.3332 29.3327 23.3636 29.3327 15.9998C29.3327 8.63604 23.3631 2.6665 15.9993 2.6665C8.63555 2.6665 2.66602 8.63604 2.66602 15.9998C2.66602 23.3636 8.63555 29.3332 15.9993 29.3332Z" fill="#F8FAFC" />
                        <path d="M21.2272 17H10.5605C10.0139 17 9.56055 16.5467 9.56055 16C9.56055 15.4533 10.0139 15 10.5605 15H21.2272C21.7739 15 22.2272 15.4533 22.2272 16C22.2272 16.5467 21.7872 17 21.2272 17Z" fill="#F8FAFC" />
                  </svg>

            </div>
      )
}
