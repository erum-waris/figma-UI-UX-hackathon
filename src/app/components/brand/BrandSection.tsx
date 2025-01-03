import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";
import { RiSeedlingLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa6";
import BrandCard from './BrandCard';
function FeaturesSection() {
    const details = [
        {
        icon:<TbTruckDelivery />,
        heading:"Next day as standard",
        description: "Order before 3pm and get your order the next day as standard"
    },
    {
        icon:<CiCircleCheck />,
        heading:"Made by true artisans",
        description: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
        icon: <FaRegCreditCard />,
        heading:"Unbeatable prices",
        description: "For our materials and quality you won’t find better prices anywhere"
    },
    {
        icon: <RiSeedlingLine />,
        heading:"Recycled packaging",
        description: "We use 100% recycled packaging to ensure our footprint is manageable"
    },
]
  return (
    <section>
       
      <h1 className='md:text-center ml-9 text-[24px] font-400 font-clash relative top-[48px] md:top-[120px]'>What makes our brand different</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative top-[100px] md:top-[145px]">
    {details.map((detail, index) => (
        <BrandCard
            key={index} 
            icon={detail.icon} 
            heading={detail.heading} 
            description={detail.description} 
        />
    ))}
</div>  
        
    </section>
  )
}

export default FeaturesSection