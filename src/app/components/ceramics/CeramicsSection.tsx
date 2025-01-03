import Image from 'next/image'
import React from 'react'


const CeramicsSection = () => {
  return (
    <>
      <section>
        <div className=" px-4 md:px-8 py-12 text-[#2A254B] mt-12 md:mt-[300px]">
          {/* Title */}
          <h1 className="text-2xl font-semibold font-clash">New Ceramics</h1>

          {/* Product Items */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Product 1 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/Dandychair.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-clash">The Dandy Chair</p>
                <p className='font-satoshi'>&pound;250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/threeVase.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-clash">Rustic Vase Set</p>
                <p className='font-satoshi'>&pound;155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/Vase.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-clash">The Silky Vase</p>
                <p className='font-satoshi'>&pound;125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/lamp.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-clash">The Lucky Lamp</p>
                <p className='font-satoshi'>&pound;399</p>
              </div>
            </div>
          </div>
      

          {/* View Collection Button */}
          <div className="my-10 flex justify-center items-center">
            <button className="font-satoshi bg-[#F9F9F9] py-4 px-6 rounded-[5px] hover:bg-[#2A254B] hover:text-white text-[#2A254B]">
              View collection
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default CeramicsSection;