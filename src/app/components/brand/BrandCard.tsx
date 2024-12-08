import React from 'react'
import { CardProps } from '../../../../types/Types'

function BrandCard(props:CardProps) {
  return (
    <div className='flex flex-col h-[124px] p-5 m-auto mb-7 gap-[16px]'>

     <span className='flex justify-start text-[20px] md:text-[24px]'>{props.icon}</span>
      <h2 className='md:text-[20px] text-[16px] font-clash font-400 '>{props.heading}</h2>
      <p className='font-satoshi text-[16px] md:text-[16px] font-400 '>{props.description}</p>
    
    </div>
  )
}

export default BrandCard