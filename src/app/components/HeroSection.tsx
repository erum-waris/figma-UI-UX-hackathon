import React from "react";
import Link from "next/link";
import Image from "next/image";



function HeroSection() {
  return (
    <>
    
      <section className="flex md:flex-row md:relative md:top-[60px] md:bottom-[60px]">
      {/* Text Section */}
      <div className="md:w-[1280px] md:h-[584px] max-w-full h-[502px] bg-[#2A254B] flex items-center md:mb-10 ">
        <div className="mt-[40px] md:ml-24 px-10 py-10 md:py-[5rem] md:px-[2rem]">
          <p className="font-clash font-400 text-[#FFFFFF] md:text-[40px]  text-[32px]  leading-[36px] md:leading-[44.8px] mb-6">
            The furniture brand for the  <br />
            future, with timeless designs
          </p>
     <div className="flex flex-col-reverse md:flex-col">
          <Link
            href="/"
            className="bg-[#F9F9F926] text-[#fff] md:px-4 md:py-4 py-2 text-center  text-[16px] md:text-[18px] font-medium hover:bg-slate-400 hover:text-black md:w-[170px] 
            md:h-[56px]"
          >
            View Collection
          </Link>
          <p className="font-satoshi font-400 mt-20 text-[18px] text-white md:w-[602px] mb-4 md:mb-0">
          A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies. 
          </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block w-auto">
        <Image
          src="/images/hero-img.png"
          alt="hero image"
          width={520}
          height={584}
          className=" md:w-[750px] md:h-[584px]"
        />
      </div>
    </section></>
   
  );
}

export default HeroSection;
