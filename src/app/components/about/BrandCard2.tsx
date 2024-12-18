import React from 'react'
import { CardProps } from '../../../../types/Types'

function BrandCard2(props:CardProps) {
  return (
    <div className='flex flex-col h-[244px] mx-5  m-auto mb-7 gap-[16px] bg-[#F9F9F9] px-[30px] py-[50px] hover:bg-gray-200  hover:translate-x-2 hover:translate-y-2 '>

     <span className='flex justify-start text-[24px] md:text-[24px]'>{props.icon}</span>
      <h2 className='md:text-[20px] text-[20px] font-clash font-400 '>{props.heading}</h2>
      <p className='font-satoshi text-[16px] md:text-[16px] font-400 '>{props.description}</p>
    
    </div>
  )
}

export default BrandCard2