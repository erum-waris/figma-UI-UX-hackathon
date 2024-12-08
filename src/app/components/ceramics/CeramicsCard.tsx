import Image from 'next/image'
import React from 'react'
import { CeramicsCardProps } from '../../../../types/Types'

const CeramicsCard: React.FC<CeramicsCardProps> = ({ image, title, price }) => {
  return (
    <div className='md:w-[305px] md:h-[462px] md:absolute md:top-[152px] md:left-[405px] gap-[24px] w-[163px] h-[288px] absolute top-[400px] left-[203px]'>
          <Image 
              src={`/images/${image}.png`} 
              alt={image} 
              width={200} 
              height={200} 
              className="w-[163px] h-[201px] md:w-[305px] md:h-[375px]"  
          />
          <h3 className='font-clash text-[20px] leading-7'>{title}</h3>
          <p className='font-satoshi text-[18px] leading-6' >&pound;{price}</p>
      </div>
  )
}

export default CeramicsCard

