import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";


import WishlistButton  from "./WishListButton";
import { Product } from "../../../types/Types";
 


const ProductCard = ({ product }: { product: Product }) => {
  
  return (
    <div className="w-full h-auto border-2 rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
      {/* Product Image */}
      {product.image ? (
       
        <Image
          src={urlFor(product.image).url()}
          height={400}
          width={400}
          alt={product.name || "Product Image"}
          quality={75}
          priority
          className="w-full h-[350px] object-fit rounded-t-md"
        />
      
      ) : (
        <div className="w-full h-[200px] md:h-[400px] bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Image Not Available</p>
        </div>
      )}

      {/* Product Details */}
      <div className="w-full mt-4 flex flex-col mx-5 space-y-2 m-2">
        <p className="text-xl font-clash text-[#2A254B] truncate">
          {product.name || "Unknown Product"}
        </p>
        
        <p className="text-md font-satoshi text-gray-700">
       Price:£{product.price ? `${product.price}` : "Price Not Available"}
        </p>
        <p className="text-md font-satoshi text-gray-700">
        Stock:{product.quantity ? `${product.quantity }` : "quantity Not Available"}
        </p>
      </div>

      {/* Add to Cart Button */}
      <div className="w-full flex justify-between mt-4 mr-3">
        <button  className="w-auto font-clash block text-center mb-2 bg-blue-500 hover:bg-white hover:text-blue-950 hover:border-2 hover:border-black text-white font-bold py-2 px-4 sm:px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 ml-4">
        <Link href={`/productlisting/${product.slug}`}>
          View Details
        </Link>
        </button>
        <WishlistButton product={product} /> 
      
       
      </div>
    </div>
  );
};

export default ProductCard;
