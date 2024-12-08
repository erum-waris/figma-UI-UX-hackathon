import Image from "next/image";
import React from "react";

function Products() {
  return (
    <div className="flex flex-col ">
      <h1 className="font-clash text-2xl font-semibold mb-8"> Our Popular Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div  className="md:w-full w-[390px]">
          <Image
            src={"/images/sofa.png"}
            height={462}
            width={630}
            alt="lamp"
            className="w-full h-[80%] object-cover"
          />
           <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-clash">The Lucky Lamp</p>
                <p className='font-satoshi'>&pound;980</p>
            </div>
        </div>
        <div className="flex  gap-[24px]">
        <div className="w-full h-auto">
              <Image
                src={'/images/Dandychair.png'}
                height={305}
                width={375}
                alt="lamp"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-clash">The Dandy Chair</p>
                <p className='font-satoshi'>&pound;250</p>
              </div>
            </div>
            <div className="w-full h-auto">
              <Image
                src={'/images/DarkChair.png'}
                height={305}
                width={375}
                alt="lamp"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
              <p className="py-2 font-clash">The Dandy Chair</p>
              <p className='font-satoshi'>&pound;250</p>
              </div>
            </div>
        </div>
      </div>
      <div className="my-10 flex justify-center items-center">
            <button className="font-satoshi bg-[#F9F9F9] py-4 px-6 rounded-[5px] hover:bg-[#2A254B] hover:text-white text-[#2A254B]">
              View collection
            </button>
          </div>
    </div>
  );
}

export default Products;
