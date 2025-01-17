import Link from 'next/link'
import React from 'react'
import AboutFeature from './AboutFeature'
import AboutBrandSection from './AboutBrand'
import AboutGetInTouchSection from './AboutGetInTouch'
import SignUp from '../SignUp'

function AboutSection() {
  return (
    <section className='flex flex-col'>
      <div className='border-b border-gray-900 w-full lg:hidden'></div>
        <div className="relative h-[385px] py-[32px] px-[24px] mt-[2rem]  flex flex-col md:flex-row md:justify-around lg:h-[277px] lg:py-[2rem] lg:gap-[16rem] ">
      <h2 className="font-clash font-normal leading-10 text-[30px] lg:w-[704px] md:w-[520px] ">
        A brand built on the love of craftmanship, quality and outstanding
        customer service
      </h2>

      <button className="w-full md:relative lg:right-0 md:right-16 mt-[2rem] sm:mb-[4rem] lg:mb-[1rem] lg:mt-2 md:w-[250px] h-[56px] px-[32px] bg-[#F9F9F9] leading-6 text-[#2A254B] font-satoshi font-normal hover:bg-[#2A254B] hover:text-white transition-all duration-300 ease-in-out">
        <Link href="/productlisting">View our products</Link>
      </button>
    </div>
           
      
        <AboutFeature/>
        <AboutGetInTouchSection/>
        <AboutBrandSection/>
        
      <div className='mb-[80px] md:mb-0'>
      <SignUp/>
      </div>

   
    </section>
  )
}

export default AboutSection