import React from 'react'

type Props = {
      className: string
}

export default function IconPlane(props: Props) {
      return (
            <>
                  <svg className={props.className} viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37.0001" r="37" fill="currentColor" fill-opacity="0.5" />
                        <circle cx="37" cy="37.0001" r="32" fill="currentColor" />
                        <g clip-path="url(#clip0_101_1930)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M52.207 21.8202C50.961 20.5702 48.771 20.8631 47.518 22.1191L41.141 28.4811L29.313 24.0612C28.18 23.7682 27.039 23.3892 25.634 24.7982C24.917 25.5162 23.427 27.0102 25.634 29.2212L33.744 35.8611L28.467 41.1272L23.543 39.8961C22.813 39.7081 22.321 39.8552 21.946 40.2692C21.757 40.5052 20.386 41.5212 21.342 42.4792L27.067 46.9332L31.521 52.6581C32.213 53.3521 32.856 52.9192 33.735 52.0842C34.292 51.5262 34.172 51.2391 34.004 50.4261L32.892 45.5362L38.133 40.2772L44.763 48.3892C46.969 50.6002 48.46 49.1052 49.177 48.3892C50.583 46.9792 50.205 45.8371 49.912 44.7021L45.529 32.8542L51.88 26.4811C53.133 25.2261 53.454 23.0692 52.207 21.8202Z" fill="#F8FAFC" />
                        </g>
                        <defs>
                              <clipPath id="clip0_101_1930">
                                    <rect width="32" height="32" fill="white" transform="translate(21 21.0001)" />
                              </clipPath>
                        </defs>
                  </svg>

            </>
      )
}
