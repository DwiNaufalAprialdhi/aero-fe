import Icon from '@/components/icon/Icon'
import React from 'react'

type CardMilestonesProps = {
      year: string
      description: string
}

export default function CardMilestones(props: CardMilestonesProps) {
      return (
            <>
                  <div className='w-full h-max flex flex-col items-center justify-center'>
                        <h2 className='font-bold lg:text-[24px] text-base text-center lg:mb-6 mb-3'>
                              {props.year}
                        </h2>
                        <Icon.history className='w-full h-auto lg:mb-6 mb-3' />
                        <h2 className='font-semibold lg:text-[24px] text-base lg:leading-[30px] leading-normal text-center'>
                              {props.description}
                        </h2>
                  </div>
            </>
      )
}
