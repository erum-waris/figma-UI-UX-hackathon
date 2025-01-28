import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";


type FooterLinksProps = {
  name: string | null | undefined;
};

const FooterLinks: React.FC<FooterLinksProps> = ({ name }) => {
  if (!name) return null; // Handle undefined or null gracefully
  return (
    <p className="font-satoshi font-normal leading-[18.9px] text-white hover:underline py-2 md:py-4 md:text-xl">
      {name}
    </p>
  );
};


const FooterHeading = ({ name }: { name: string }) => {
  return (
    <h5 className="font-clash text-lg tracking-wide text-white font leading-[19.68px] pb-1 md:pb-2 md:text-2xl">
      {name}
    </h5>
  );
};




const Footer = () => {
  return (
    <div className="mx-auto sticky bottom-0 w-full h-[800px] bg-[#2A254B] gap-8 md:pt-[3rem] md:pb-[3rem] md:px-[2rem]">
      <div className="flex flex-col md:flex-wrap lg:flex-row md:border-b md:border-[#4e4d93] ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-6 py-10 md:gap-[4rem]">
          <div>
            <FooterHeading name="Categories" />
            <FooterLinks name="Crockery" />
            <FooterLinks name="Furniture" />
            <FooterLinks name="Homeware" />
            <FooterLinks name="Plant post" />
            <FooterLinks name="Chairs" />
            <FooterLinks name="Crockery" />
          </div>
          <div>
            <FooterHeading name="Menu" />
            <FooterLinks name="New arrivals" />
            <FooterLinks name="Best sellers" />
            <FooterLinks name="Recently viewed" />
            <FooterLinks name="Popular this week" />
            <FooterLinks name="All products" />
          </div>
          <div>
            <FooterHeading name="Our Company" />
            <FooterLinks name="About us" />
            <FooterLinks name="Vacancies" />
            <FooterLinks name="Contact us" />
            <FooterLinks name="Privacy" />
            <FooterLinks name="Returns policy" />
          </div>
        </div>

        <div className=" md:flex md:flex-col md:relative md:left-[4rem] md:top-[1rem] lg:top-[3rem] m-4">
          <span className=" md:ml-0 lg:mb-[2rem]">
            <FooterHeading name="Join our mailing list" />
          </span>
          <div className="mt-4 flex justify-start ">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white bg-opacity-[15%] hover:border-white hover:border-2 placeholder:font-satoshi focus:outline-none py-2 px-3 md:py-4 md:px-5 placeholder:text-white sm:w-[300px] md:w-[400px]"
            />
            <button className="px-3 sm:px-[32px] py-[16px] bg-white text-[#2A254B] font-satoshi font-normal md:text-xl leading-6 hover:bg-[#7dcae8]  hover:text-[#291b1b]">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:flex-row md:justify-between md:mr-5 md:pt-6 lg:flex-row lg:justify-between mt-5 ">
  <p className="text-center font-satoshi font-normal leading-[18.9px] text-white md:text-lg md:mt-8">
    Copyright 2022 Avion LTD
  </p>
  <div className="hidden md:flex mt-10 md:ml-4 gap-3 justify-center lg:justify-between items-center">
    <Link href="/"><FaLinkedin className="w-[24px] h-[24px] text-white" /></Link>
    <Link href="/"><FaFacebookSquare className="w-[24px] h-[24px] text-white" /></Link>
    <Link href="/"><FaInstagram className="w-[24px] h-[24px] text-white" /></Link>
    <Link href="/"><FaSkype className="w-[24px] h-[24px] text-white" /></Link>
    <Link href="/"><FaTwitter className="w-[24px] h-[24px] text-white" /></Link>
    <Link href="/"><FaPinterest className="w-[24px] h-[24px] text-white" /></Link>
  </div>
</div>

    </div>
  );
};

export default Footer;