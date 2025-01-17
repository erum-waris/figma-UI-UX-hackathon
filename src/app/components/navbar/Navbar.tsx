import React from 'react'
import UpNavbar from './UpNavbar'
import DownNavbar from './DownNavbar'

function Navbar() {
  return (
       <nav className='md:mb-[2rem]'>
    <UpNavbar/>
    <div className='w-[390px] md:w-[1440px]  border-b-2 border-black opacity-[10%]'></div>
    <DownNavbar />
    
   </nav>
  )
}

export default Navbar