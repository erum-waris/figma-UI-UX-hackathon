import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FeaturesSection() {
    return (
        <section className="flex justify-center items-center">
        <div className="w-full h-auto md:mt-12 mt-14 flex lg:flex-row flex-col">
          {/* Left Section */}
          <div className="lg:w-1/2 bg-white shadow-lg flex items-center flex-col">
            <h2 className="font-clash text-[20px] md:text-[28px] leading-[28px] md:leading-[36px] py-10 px-6">
            Our service is not just personal, it is actually hyper personally exquisite
            </h2>
            <p className="font-satoshi leading-[21px] font-normal text-[#505977] text-[14px] md:text-lg md:mt-3 mx-5">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.Handmade, and lovingly crafted furniture and homeware is what
          we live, breathe and design so our Chelsea boutique become the hotbed
          for the London interior design community.
        </p>
        <div className="relative md:top-[1rem] flex justify-start">
          <Link href="/contact">
          <button className=" mt-[6rem] md:mt-[20px] mb-8  py-[16px] px-[4rem] bg-[#F9F9F9] shadow-lg leading-6 text-[#2a254b] font-satoshi font-normal hover:bg-[#2A254B] hover:text-white transition-all duration-300 ease-in-out text-lg">
            Get in touch
          </button>
          </Link>
        </div>
          </div>
  
          {/* Right Section */}
          <div className="lg:w-1/2 h-auto">
            <Image
              src="/images/about-sec.png"
              alt="chair"
              layout="responsive" 
              width={700}
              height={603} 
              className="  object-cover"
            />
          </div>
        </div>
      </section>
  )
}

export default FeaturesSection