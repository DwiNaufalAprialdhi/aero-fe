import React from 'react'

type Props = {
      className: string
}

export default function IconMark(props: Props) {
      return (
            <>
                  <svg className={props.className} viewBox="0 0 60 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_109_100)">
                              <path d="M30 58.75C27.5 58.75 30.4575 54.8025 18.1325 48.6625C17.4573 48.3255 16.802 47.9499 16.17 47.5375C10.0375 43.5475 6.25 36.25 6.25 28.395C6.25 15.475 16.8825 5 30 5C43.1175 5 53.75 15.475 53.75 28.3925C53.75 37.0475 49.14 45.035 41.8875 48.6525C29.55 54.8 32.5 58.75 30 58.75ZM30 37.775C35.2775 37.775 39.5 33.595 39.5 28.5125C39.5 23.43 35.2775 19.25 30 19.25C24.7225 19.25 20.5 23.43 20.5 28.5125C20.5 33.595 24.7225 37.775 30 37.775Z" fill="currentColor" />
                        </g>
                        <defs>
                              <filter id="filter0_d_109_100" x="-4" y="0" width="68" height="74" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="10" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_109_100" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_109_100" result="shape" />
                              </filter>
                        </defs>
                  </svg>
            </>
      )
}
