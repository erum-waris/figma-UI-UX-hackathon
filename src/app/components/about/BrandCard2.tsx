import React from 'react'
import { CardProps } from '../../../../types/Types'

function BrandCard2(props:CardProps) {
  return (
    <div className='flex flex-col h-[248px] mx-5  m-auto mb-7 gap-[16px] bg-[#F9F9F9] px-[30px] py-[10px] pb-1 hover:bg-gray-200 hover:border-2 hover:border-black  hover:scale-105 hover:translate-y-2 '>

     <span className='flex justify-start text-[24px] md:text-[24px]'>{props.icon}</span>
      <h2 className='md:text-[20px] text-[20px] font-clash font-400 '>{props.heading}</h2>
      <p className='font-satoshi text-[16px] md:text-[14px] font-400 md:pb-2 '>{props.description}</p>
    
    </div>
  )
}

export default BrandCard2