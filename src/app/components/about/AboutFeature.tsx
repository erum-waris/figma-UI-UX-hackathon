import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutFeature() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center h-auto md:h-[478px] mx-4 mb-4">
      {/* Left Section */}
      <div className="bg-[#2A254B] h-[400px] text-white flex flex-col justify-center p-6 md:pl-10 rounded-lg mt-[-80px]">
        <h2 className="font-clash text-lg md:text-2xl leading-6 md:leading-8 mb-4">
          It started with a small idea
        </h2>
        <p className="font-satoshi text-sm md:text-base leading-5 md:leading-6 mb-6">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
        <Link
          href="/productlisting"
          className="bg-[#F9F9F926] text-white text-center font-medium text-sm md:text-base hover:bg-slate-400 hover:text-black
          max-w-max py-3 px-6 rounded-lg transition-all duration-300"
        >
          View Collection
        </Link>
      </div>

      {/* Right Section */}
      <div className="relative h-full rounded-lg">
        <Image
          src="/images/sofa-img.png"
          alt="chair"
   
          width={700}
          height={600}
          className="h-[400px] rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default AboutFeature;
