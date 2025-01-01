import Image from "next/image";

const Hero = () => {
  return (
    <div className=" relative mx-auto h-[502px] md:h-[584px] justify-center items-center md:my-[3rem] flex flex-col md:flex-row lg:gap-0 md:gap-0 gap-[2rem] md:mx-[2rem] lg:mx-[4rem] hero">
      <div className="bg-[#2A254B] h-[584px]">
        <div className="relative px-10 md:px-6 lg:px-[3.5rem]">
          <h2 className="font-clash font-normal  leading-[44.8px] text-white text-3xl lg:text-4xl md:pt-[4rem]">
            The furniture brand for the future, with timeless designs
          </h2>
        </div>
        <div className="px-[3.2rem] font-satoshi font-normal flex flex-col gap-10">
          <p className="leading-[27px] md:relative lg:w-[602px] md:w-full text-white text-lg md:pt-[20rem]">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <button className="w-full md:relative md:w-[188px] md:bottom-[25rem] py-[16px] px-[32px] bg-[#f9f9f9] bg-opacity-[15%] leading-6 text-white font-satoshi font-normal hover:bg-gray-400 hover:text-blue-600 transition-all duration-300 ease-in-out">
            View collection
          </button>
        </div>
      </div>
      <div className="relative  w-[900px] h-[584px] md:block hidden image">
        <Image
          src="/images/hero.png"
          alt="Chair"
          width={200}
          height={200}
          className="w-full lg:w-[520px] h-[584px]"
        />
      </div>
    </div>
  );
};

export default Hero;