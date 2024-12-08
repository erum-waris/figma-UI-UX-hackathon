import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className='px-6 md:px-12 py-12 bg-[#2A254B] mt-12'>
        <div className="flex flex-wrap md:flex-row gap-12 md:gap-[120px] ">
          {/* Menu Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className='space-y-2'>
              <p><Link href={'/'}>New Arrivals</Link></p>
              <p><Link href={'/'}>Best sellers</Link></p>
              <p><Link href={'/'}>Recently viewed</Link></p>
              <p><Link href={'/'}>Popular this week</Link></p>
              <p><Link href={'/'}>All Products</Link></p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className='space-y-2'>
              <p><Link href={'/'}>Crockery</Link></p>
              <p><Link href={'/'}>Furniture</Link></p>
              <p><Link href={'/'}>Homeware</Link></p>
              <p><Link href={'/'}>Plant pots</Link></p>
              <p><Link href={'/'}>Chairs</Link></p>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className='space-y-2'>
              <p><Link href={'/about'}>About us</Link></p>
              <p><Link href={'/'}>Vacancies</Link></p>
              <p><Link href={'/'}>Contact us</Link></p>
              <p><Link href={'/'}>Privacy</Link></p>
              <p><Link href={'/'}>Return policy</Link></p>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h3 className="text-lg md:text-xl font-bold">Join our mailing list</h3>
            <div className='md:w-[627px] flex items-center md:relative md:top-[5rem] mx-auto'>
<input type="email" placeholder="your@email.com" className='md:w-[354px] md:h-[56px] hover:border-2 hover:border-black bg-[#F9F9F9] text-center'/>
<Link href="/" className='md:w-[118px] md:h-[58px] bg-[#F9F9F926] text-white text-[16px] placeholder:font-satoshi text-center py-4 px-3 md:px-4 hover:bg-[#9a8df0] hover:text-white hover:border-2 hover:border-black'>Sign Up</Link> 
</div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className='flex gap-4'>
            <Link href={'/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            <Link href={'/'}><IoLogoSkype size={20} /></Link>
            <Link href={'/'}><FaTwitter size={20} /></Link>
            <Link href={'/'}><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;