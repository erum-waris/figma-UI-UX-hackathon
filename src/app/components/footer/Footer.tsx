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
    <div className="relative md:w-[1440px] md:h-[300] w-[390px] h-[720px] bottom-4 bg-[#2A254B] gap-8 md:py-[6rem] md:px-[2rem]">
      <div className="flex flex-col lg:flex-row md:border-b md:border-[#4e4d93] ">
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

        <div className="md:relative md:left-[4rem] md:top-[3rem]">
          <div className="ml-8 md:ml-0">
            <FooterHeading name="Join our mailing list" />
          </div>
          <div className="mt-4 flex justify-center pb-6 border-b border-[#4e4d93] md:border-darkPrimary">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-white bg-opacity-[15%] placeholder:font-satoshi focus:outline-none py-4 px-5 placeholder:text-white md:w-[500px]"
            />
            <button className="px-[32px] py-[16px] bg-white text-[#2A254B] font-satoshi font-normal leading-6 hover:bg-navbarColor hover:text-lightGray">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between">
        <p className="text-center  font-satoshi font-normal leading-[18.9px] text-white mt-6 md:text-lg md:mt-8">
          Copyright 2022 Avion LTD
        </p>
        <div className="hidden md:flex mt-10 mr-4 gap-3">
          <FaLinkedin className="w-[24px] h-[24px] text-white" />
          <FaFacebookSquare className="w-[24px] h-[24px] text-white" />
          <FaInstagram className="w-[24px] h-[24px] text-white" />
          <FaSkype className="w-[24px] h-[24px] text-white" />
          <FaTwitter className="w-[24px] h-[24px] text-white" />
          <FaPinterest className="w-[24px] h-[24px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;