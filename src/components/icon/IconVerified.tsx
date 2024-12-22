import React from 'react'

type IconVerifiedProps = {
      className?: string
}

export default function IconVerified(props: IconVerifiedProps) {
      return (
            <>
                  <svg className={props.className} viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37.0001" r="37" fill="currentColor" fill-opacity="0.5" />
                        <circle cx="37" cy="37.0001" r="32" fill="currentColor" />
                        <g clip-path="url(#clip0_101_1940)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M37 21.2501L32.5538 25.2839L26.5573 25.051L25.7449 30.9995L21 34.6759L24.2 39.7532L22.9289 45.6199L28.6445 47.4528L31.4427 52.763L37 50.4928L42.5573 52.763L45.3556 47.4528L51.0711 45.6199L49.8 39.7532L53 34.6759L48.2551 30.9995L47.4427 25.051L41.4445 25.2839L37 21.2501ZM42.8791 31.5239L45.3431 34.0875L35.3431 43.7088L28.6302 36.9959L31.144 34.4821L35.3929 38.7292L42.8791 31.5239Z" fill="#F8FAFC" />
                        </g>
                        <defs>
                              <clipPath id="clip0_101_1940">
                                    <rect width="32" height="32" fill="white" transform="translate(21 21.0001)" />
                              </clipPath>
                        </defs>
                  </svg>
            </>
      )
}
