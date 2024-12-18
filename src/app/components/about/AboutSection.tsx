import Link from 'next/link'
import React from 'react'
import AboutFeature from './AboutFeature'
import AboutBrandSection from './AboutBrand'
import AboutGetInTouchSection from './AboutGetInTouch'
import SignUp from '../SignUp'

function AboutSection() {
  return (
    <section className='flex flex-col'>
        <div className="relative w-[390px] h-[385px] py-[32px] px-[24px] mt-[5rem] flex flex-col lg:flex-row lg:w-[1440px] md:w-[890px] lg:h-[277px] 
        md:left-[128px] lg:py-[2rem] lg:gap-[16rem] ">
      <h2 className="font-clash font-normal leading-10 text-[30px] lg:w-[704px] md:w-[520px] ">
        A brand built on the love of craftmanship, quality and outstanding
        customer service
      </h2>

      <button className="w-full md:relative lg:right-0 md:right-16 mt-[4rem] md:mt-4 lg:mt-2 md:w-[250px] md:h-[56px] py-[16px] px-[32px] bg-[#F9F9F9] leading-6 text-[#2A254B] font-satoshi font-normal hover:bg-[#2A254B] hover:text-white transition-all duration-300 ease-in-out">
        <Link href="/productlisting">View our products</Link>
      </button>
    </div>
           
      
        <AboutFeature/>
        <AboutGetInTouchSection/>
        <AboutBrandSection/>
        
        <SignUp/>

   
    </section>
  )
}

export default AboutSection