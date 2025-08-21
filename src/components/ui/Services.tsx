import React from 'react'

type ServicesProps = {
      children: React.ReactNode
      title: string
}

export default function Services(props: ServicesProps) {
      return (
            <>
                  <div className='lg:p-5 p-3 flex items-center justify-start gap-x-6'>
                        {props.children}
                        <h2 className='font-semibold lg:text-base text-base text-slate-50'>{props.title}</h2>
                  </div>
            </>
      )
}
