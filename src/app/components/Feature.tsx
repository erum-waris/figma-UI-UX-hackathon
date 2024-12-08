import Image from 'next/image'
import React from 'react'

function FeaturesSection() {
    return (
        <section className="flex justify-center items-center">
        <div className="md:max-w-[1440px] w-full h-auto md:mt-12 mt-14 flex md:flex-row flex-col">
          {/* Left Section */}
          <div className="md:w-1/2 bg-white shadow-lg flex items-center flex-col">
            <h2 className="font-clash text-[20px] md:text-[28px] leading-[28px] md:leading-[36px] py-10 px-6  md:w-[514px] ">
              From a studio in London to a global brand with over 400 outlets
            </h2>
            <p className="font-satoshi leading-[21px] font-normal text-[#505977] text-[14px] md:w-[570px] md:text-lg md:mt-3">
          When we started Avion, the idea was simple. Make high quality
          furniture affordable and available for the mass market. <br />
          <br /> Handmade, and lovingly crafted furniture and homeware is what
          we live, breathe and design so our Chelsea boutique become the hotbed
          for the London interior design community.
        </p>
        <div className="relative flex md:top-[4.5rem] justify-start">
          <button className=" mt-[6rem] mb-8 w-[309px] py-[16px] px-[32px] bg-[#F9F9F9] shadow-lg leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-[#2A254B] hover:text-white transition-all duration-300 ease-in-out text-lg">
            Get in touch
          </button>
        </div>
          </div>
  
          {/* Right Section */}
          <div className="md:w-1/2 h-auto">
            <Image
              src="/images/cushions.png"
              alt="chair"
              layout="responsive" 
              width={700}
              height={603} 
              className=" object-cover"
            />
          </div>
        </div>
      </section>
  )
}

export default FeaturesSection