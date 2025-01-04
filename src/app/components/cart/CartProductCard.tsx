
import Image from 'next/image';
import React from 'react'
import { CartProps } from '../../../../types/Types';

const  CartProductCard: React.FC<CartProps> = ({image, heading, para}) => {
  return (
    <div className='lg:h-[134px] w-full h-[166px] flex gap-[22px]'>
        <Image
        src={`/images/${image}.png`}
        alt={`${heading} Image`}
        width={200}
        height={200}
        className=' w-[133px] h-[166px]'/>
        <div className=' md:h-[134px] h-[166px] flex md:flex-row flex-col'>
          <div className='md:pb-2'>
          <h5 className='font-clash font-normal leading-[22.4px] text-[#2A254B] text-[16px] md:text-[20px]'>{heading}</h5>
            <p className='py-1 font-satoshi font-normal leading-[21px] text-[#2A254B]  text-sm'>{para}</p>
            <p className='py-1 font-satoshi font-normal leading-6 text-[#2A254B] text-sm'> &#163; 85</p>
          </div>
            <p className='lg:pl-[28.5rem]  h-[30px] text-center px-[16px] py-[12]  font-satoshi font-normal leading-[21.6px] text-[#2A254B]  text-lg mt-2'> 1 </p>

            <p className='hidden lg:w-[100px] lg:block lg:pl-[20.5rem] md:py-0 py-1 font-satoshi font-normal leading-6 text-[#2A254B] text-lg'>&#163; 85</p>
        </div>
    </div>
    
  );
};

export default CartProductCard;