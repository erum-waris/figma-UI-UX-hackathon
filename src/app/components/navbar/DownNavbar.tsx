"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";
import { CiSearch } from "react-icons/ci";

function DownNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full bg-white ">
      {/* Desktop Navbar */}
      <div className="hidden sm:p-3 md:flex md:justify-center md:items-center px-6 py-4">
        {/* Centered Links */}
        <ul className="flex gap-8 text-[#726E8D]  text-[1.5rem] font-400">
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
            className="flex flex-col justify-between w-8 h-[20px] cursor-pointer"
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
