import React from 'react'
import { Category } from '../../../types/Types'
import Image from 'next/image'

import Link from 'next/link'
import { Loader } from 'lucide-react'


const CategoryCard = ({ product }: { product: Category }) => {
  return (
    <div className="w-full h-auto border-2 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
    {/* Product Image */}
    {product.image ? (
     
      <Image
        src={product.image}
        height={400}
        width={400}
        alt={product.name || "Product Image"}
        quality={75}
        priority
        className="w-full h-[350px] object-fit rounded-t-md"
      />
    
    ) : (
      <div className="w-full h-[200px] md:h-auto bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Image Not Available <Loader /></p>
      </div>
    )}

    {/* Product Details */}
    <div className="w-full mt-4 flex flex-col mx-2 space-y-2 ">
      <p className="text-xl font-clash text-[#2A254B] truncate">
        {product.name || "Unknown Product"}
      </p>
      
      <p className="text-md font-satoshi">
     Price:£{product.price ? `${product.price}` : "Price Not Available"}
      </p>
    
      <h2 className="text-lg font-clash text-[#2A254B]">Description</h2>
    <p className="text-base font-clash text-[#2A254B] pr-2">
        {product.description || "Unknown Product"}
      </p>
    </div>
    

  
  
  
    {/* Add to Cart Button */}
  <div className='flex justify-center items-center'>
      
  <button  className="w-3/4 font-clash block text-center mb-2 bg-blue-500 hover:bg-white hover:text-blue-950 hover:border-2 hover:border-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 my-4">
      <Link href={`/productlisting/${product.slug.current}`}>
  View Details
</Link>
 </button>
  </div>
      
    
     
  
  </div>
  )
}

export default CategoryCard