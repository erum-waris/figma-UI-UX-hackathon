"use client";
import Image from "next/image";
import React from "react";
import Dropdown from "../Dropdown";


function ProductListingSection() {
  return (
    <section>
      {/* for large screens image and dropdown menu*/}
      <div className="hidden md:block md:mb-[2rem] ">
        <Image
          src="/images/product-bg.png"
          alt="product BG"
          height={209}
          width={1440}
          className="md:w-full xl:w-[1440px]"
        />
      </div>

      <div className="hidden md:flex md:flex-col lg:justify-between  mb-[28px]">
        {/*  left side Dropdown menu */}
        <div className="hidden md:flex md:justify-between space-x-4 p-4">
          <Dropdown label="Category" options={["Sofas","Chairs","Vase"]} />

          <Dropdown
            label="Product type"
            options={["Sofas", "Chairs", "Vase"]}
          />
          <Dropdown
            label="Price"
            options={["£100 - £250", "£250 - £400", "£1000"]}
          />

          <Dropdown label="Brand" options={["Sofas", "Chairs", "Vase"]} />
        </div>

        {/* right side Dropdown menu */}
        <div className="hidden md:flex md:justify-between space-x-4 p-4 md:mr-5 overflow-x-hidden z-1 md:mb-[3rem]">

          <span className="px-4 py-2 rounded-md font-satoshi text-[16px] font-400 text-[#2A254B] hover:pb-[2px] hover:bg-gray-50">
            Sorting by:
          </span>
          <Dropdown
            label="Date added"
            options={["1-3-2025", "2-4-2025", "2-5-2025"]}
          />
        </div>
      </div>


      {/* for small screens image and dropdown menu */}
      <div className="md:hidden block mb-[2rem]  ">
        <Image
          src="/images/mb-product-bg.png"
          alt="product BG"
          height={146}
          width={390}
        />
      </div>
      <div className="md:hidden flex justify-evenly">
        <Dropdown label="Filters" options={["Price", "Rating", "Category"]} />

        <Dropdown
          label="Sorting"
          options={["Price Low", "Price High", "Newest"]}
        />
      </div>
      {/* row 1 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:m-3">
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
               {/* row 2 */}

 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:mt-[3rem] md:m-3">
            {/* Product 1 */}         
            <div className="w-full h-auto">
              <Image
                src={'/images/lamps.png'}
                height={700}
                width={300}
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
                src={'/images/white-vase.png'}
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
                src={'/images/stool.png'}
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
                src={'/images/chairs.png'}
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



{/* row 3 */}

 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:mt-[3rem] md:m-3">
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

    
    </section>
  );
}

export default ProductListingSection;
