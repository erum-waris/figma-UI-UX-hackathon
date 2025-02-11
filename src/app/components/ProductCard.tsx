
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import WishlistButton from "./WishListButton";
import { Product } from "../../../types/Types";
import { FaStar } from "react-icons/fa"; // ⭐ Import Star Icon

const ProductCard = ({ product }: { product: Product }) => {
  const localStorageKey = `product-rating-${product.slug}`; // ✅ Unique key for each product
  const [rating, setRating] = useState<number>(0); // ⭐ User rating
  const [hover, setHover] = useState<number>(0); // ⭐ Hover effect for stars

  // ✅ Load rating from localStorage when component mounts
  useEffect(() => {
    const savedRating = localStorage.getItem(localStorageKey);
    if (savedRating) {
      setRating(Number(savedRating)); // Convert string to number
    }
  }, [localStorageKey]);

  // ✅ Function to set rating & save to localStorage
  const handleRating = (star: number) => {
    setRating(star);
    localStorage.setItem(localStorageKey, star.toString()); // Save rating
  };

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
          Price: £{product.price ? `${product.price}` : "Price Not Available"}
        </p>
        <p className="text-md font-satoshi text-gray-700">
          Stock: {product.quantity ? `${product.quantity}` : "Quantity Not Available"}
        </p>
        
        {/* ⭐ Persistent Star Rating System */}
        <div className="flex my-3 space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={24}
              className={`cursor-pointer transition-colors duration-300 ${
                star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
              }`}
              onClick={() => handleRating(star)} // ✅ Save rating on click
              onMouseEnter={() => setHover(star)} // 🌟 Hover Effect
              onMouseLeave={() => setHover(0)}
            />
          ))}
          <span className="text-md font-semibold text-gray-700 ml-2">
            {rating}/5
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex justify-between mt-4 mr-3">
        <button className="w-auto font-clash block text-center mb-2 bg-blue-500 hover:bg-white hover:text-blue-950 hover:border-2 hover:border-black text-white font-bold py-2 px-4 sm:px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 ml-4">
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
