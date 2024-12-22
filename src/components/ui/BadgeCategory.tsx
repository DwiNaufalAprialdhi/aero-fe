import React from 'react'

type BadgeCategoryProps = {
      children: React.ReactNode
}

export default function BadgeCategory(props: BadgeCategoryProps) {
      return (
            <>
                  <div className='max-w-max p-[10px] border border-theme-donker flex items-center justify-center rounded-full'>
                        <h2 className='font-normal lg:text-base text-xs'>
                              {props.children}
                        </h2>
                  </div>
            </>
      )
}
