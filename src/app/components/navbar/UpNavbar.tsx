import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
function UpNavbar() {
  return (
    <div className='hidden md:flex md:justify-between text-[#2A254B] mt-[26px] mx-12'>
        <span className='text-[2rem]'><CiSearch /></span>
        <span className='font-satoshi text-[30px]'>Avion</span>
        <span className='flex gap-[24px] text-[2rem] '> <IoCartOutline /> <FaRegUserCircle />  </span>

    </div>
  )
}

export default UpNavbar