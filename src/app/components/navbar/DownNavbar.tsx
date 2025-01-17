"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";


import { useCart } from "@/app/context/CartContext";


function DownNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const {cart}:any = useCart()


  return (
    <div className="w-full bg-white ">
      {/* Desktop Navbar */} 
      <div className="mx-auto hidden md:flex md:justify-center md:items-center">
        {/* Centered Links */}
        
        <ul className="md:grid md:grid-cols-5 lg:flex gap-8 text-[#726E8D]  text-[1.2rem] font-400">
        
        <li>
            <NavbarLinks href="/" title="Home" />
          </li>
          <li>
            <NavbarLinks href="/about" title="About" />
          </li>
          <li>
            <NavbarLinks href="/productlisting" title="Products" />
          </li>
        
          <li>
            <NavbarLinks href="/" title="Plant pots" />
          </li>
          <li>
            <NavbarLinks href="/" title="Ceramics" />
          </li>
          <li>
            <NavbarLinks href="/" title="Tables" />
          </li>
          <li>
            <NavbarLinks href="/" title="Chairs" />
          </li>
          <li>
            <NavbarLinks href="/" title="Crockery" />
          </li>
          <li>
            <NavbarLinks href="/" title="Tableware" />
          </li>
          <li>
            <NavbarLinks href="/" title="Cutlery" />
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="font-satoshi text-[#22202E] text-[24px] font-bold">Avion</div>

        {/* Hamburger and Search */}
        <div className="flex items-center gap-5">

          <span className="text-[24px] text-black cursor-pointer">
            <CiSearch />
          </span>
          <div
            className="flex flex-col justify-between w-8 h-[20px]  cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <Image
                src="/images/cross.png"
                alt="Close Menu"
                height={30}
                width={30}
                className="rounded-md"
              />
            ) : (
              <>
                <div className="w-full h-0.5 bg-black rounded"></div>
                <div className="w-full h-0.5 bg-black rounded"></div>
                <div className="w-full h-0.5 bg-black rounded"></div>
                <div className="w-full h-0.5 bg-black rounded"></div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        
        <ul className="flex flex-col items-center bg-white text-black text-xl py-6 gap-5 md:hidden">
          <span className='flex gap-[24px] text-[2rem] mb-[20px]'>
            
          <Link href="/cart">
          <button className="relative">
            <IoCartOutline />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-2">
                {cart.length}
              </span>
            )}
          </button>
        </Link> 
          <Link href="/" ><FaRegUserCircle /></Link> </span>
           
          <li>
            <NavbarLinks href="/" title="Home" />
          </li>
          <li>
            <NavbarLinks href="/about" title="About" />
          </li>
          <li>
            <NavbarLinks href="/productlisting" title="ProductsListing" />
          </li>
        
        <li>
            <NavbarLinks href="/home" title="Plant pots" />
          </li>
          <li>
            <NavbarLinks href="/" title="Ceramics" />
          </li>
          <li>
            <NavbarLinks href="/" title="Tables" />
          </li>
          <li>
            <NavbarLinks href="/" title="Chairs" />
          </li>
          <li>
            <NavbarLinks href="/" title="Crockery" />
          </li>
          <li>
            <NavbarLinks href="/" title="Tableware" />
          </li>
          <li>
            <NavbarLinks href="/" title="Cutlery" />
          </li>
        </ul>
      )}
    </div>
  );
}

export default DownNavbar;






