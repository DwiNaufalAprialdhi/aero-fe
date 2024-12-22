import React from 'react'

type ServicesProps = {
      children: React.ReactNode
      title: string
}

export default function Services(props: ServicesProps) {
      return (
            <>
                  <div className='p-5 flex items-center justify-start gap-x-6'>
                        {props.children}
                        <h2 className='font-semibold lg:text-[20px] text-base'>{props.title}</h2>
                  </div>
            </>
      )
}
