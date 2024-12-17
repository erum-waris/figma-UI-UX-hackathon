import Link from 'next/link'
import React from 'react'

function AboutSection() {
  return (
    <section>
      <div className='md:max-w-[1440px] w-[390px]'>
        <div className='md:h-[277px] h-[385px] space-x-8 mt-[88px] flex md:flex-row flex-col md:ml-[128px] justify-center items-center'>
          <h1 className='font-clash text-[36px] text-[#2A254B] leading-[50.4px]'>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
          <button className="md:w-[192px] h-[56px] w-[342px] font-satoshi bg-[#F9F9F9] py-4 px-6 rounded-[5px] hover:bg-[#2A254B] hover:text-white text-[#2A254B] shadow-md">
          <Link href="/productlisting">   View Our Products     </Link>
       
           </button>
        </div>
        <div></div>

      </div>
    </section>
  )
}

export default AboutSection