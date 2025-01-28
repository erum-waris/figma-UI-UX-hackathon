import Link from 'next/link'
import React from 'react'

function SignUp() {
  return (
    <section>
    <div className='flex justify-center items-center  h-[292px] md:h-[481px] leading-[50.4px] md:bg-[#F9F9F9]'>
        <div className='bg-white md:w-[1273px] md:h-[364px] flex flex-col pt-[70px] '> 
    <h1 className='md:text-[36px] text-[32px] text-[#2A254B] font-clash text-center '> Join the club and get the benefits</h1>
     
     <p className='text-[18px]  text-[#2A254B] text-center leading-[24px] font-satoshi p-4'> Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more</p> 
     <div className='md:w-[472px] flex items-center md:relative md:top-[5rem] mx-auto'>
<input type="email" placeholder="your@email.com" className='md:w-[354px] md:h-[56px] hover:border-2 hover:border-black bg-[#F9F9F9] text-center'/>
<button className='md:w-[118px] md:h-[56px] bg-[#2A254B] text-white text-[16px] placeholder:font-satoshi text-center px-3 md:px-2 hover:bg-white hover:text-blue-950 hover:border-2 hover:border-black' ><Link href="/" >Sign Up</Link> </button>
</div>
 </div>


    </div>
    </section>
  )
}

export default SignUp