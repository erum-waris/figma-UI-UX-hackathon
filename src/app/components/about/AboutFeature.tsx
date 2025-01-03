import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutFeature() {
  return (
    <div className='relative sm:bottom-[12rem] md:h-[598px] h-[628px] flex lg:flex-row justify-center items-center flex-col gap-[24px] mx-4'>
        <div className='w-full bg-[#2A254B] sm:h-[340px]  md:h-[478px] h-[281px] flex flex-col md:justify-start justify-center  '>
  <div className=' md:h-[99px] md:ml-[64px] ml-[36px] md:mt-[64px]  h-[103px] mt-[16px] ' >
  <h2 className=" md:text-[32px] sm:text-[28px] text-[20px] text-[#FFFFFF] font-clash px-3">It started with a small idea</h2>
  <p className=" text-[#FFFFFF] md:text-[18px] text-[14px] sm:text-[18px] font-satoshi px-3">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
  </div>


    <Link
            href="/productlisting"
            className="bg-[#F9F9F926] text-[#fff] md:px-4 md:py-4 py-4 text-center  text-[16px] md:text-[18px] font-medium hover:bg-slate-400 hover:text-black md:w-[170px] 
            w-[278px] h-[56px]
            md:ml-[64px] ml-[32px] mx-auto
             md:mt-[180px] mt-[40px] "
          >
            View Collection
          </Link>
        </div>
        <div className='w-full md:h-[478px] h-[259px] '> 
              <Image
                          src="/images/sofa-img.png"
                          alt="chair"
                          layout="responsive" 
                          width={700}
                          height={600} 
                          className="object-cover"
                        />
        </div>
    </div>
  )
}

export default AboutFeature