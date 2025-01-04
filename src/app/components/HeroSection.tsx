import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" relative mx-auto h-[502px] md:h-[470px] lg:h-[584px]  justify-center items-center md:my-[3rem] flex flex-col md:flex-row lg:gap-0 md:gap-0 gap-[2rem] md:mx-[1.5rem] lg:mx-[3rem]">
      <div className="bg-[#2A254B] h-[502px] md:h-[470px]  lg:h-[584px]">
        <div className="relative px-10 md:px-4 lg:px-[3.5rem]">
          <h2 className="px-[3.2rem] font-clash font-normal  leading-[44.8px] text-white text-3xl lg:text-4xl pt-[6rem] md:pt-[4rem]">
            The furniture brand for the future, with timeless designs
          </h2>
        </div>
        <div className="px-[3.2rem] font-satoshi font-normal flex flex-col gap-10">
          <p className="leading-[27px] md:relative lg:w-[602px] md:w-full text-white text-lg md:pt-[8rem] lg:pt-[20rem]">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
         <Link href="/productlisting">
         <button className="w-full md:relative md:w-[188px] md:bottom-[22rem] lg:bottom-[29rem] py-[16px] px-[32px] bg-[#f9f9f9] bg-opacity-[15%] leading-6 text-white font-satoshi font-normal hover:bg-gray-400 hover:text-black transition-all duration-300 ease-in-out sm:mt-[6rem]">
            View collection
          </button>
          </Link>
        </div>
      </div>
      <div className="relative h-[502px] lg:h-[584px] md:block hidden">
        <Image
          src="/images/hero-img.png"
          alt="Chair"
          width={200}
          height={200}
          className="w-full h-[502px] md:w-[640px] md:mt-4 md:h-[470px]  lg:w-[520px] lg:h-[584px]"
        />
      </div>
    </div>
  );
};

export default Hero;