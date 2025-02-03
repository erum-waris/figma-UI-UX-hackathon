"use client";

import {  useMemo } from "react";
import { useWishlist } from "../context/WishlistContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { urlFor } from "@/sanity/lib/image";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const router = useRouter();

  // Memoize the wishlist to avoid unnecessary re-renders
  const FavouriteItems = useMemo(() => wishlist || [], [wishlist]);

  // Function to handle navigation
  const handleNavigation = () => {
    router.push("/productlisting"); // Navigate to the product listing page
  };

  return (
    <section className="px-6 md:px-12 py-16 text-[#2A254B]">
      {FavouriteItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6">
          {/* Products Section */}
          <div className="w-full">
            <h1 className="text-3xl font-bold text-center md:text-4xl mb-10">
              Favourite Products Are Here:
            </h1>
            <ul className="list-none space-y-4">
              {FavouriteItems.map((item) => (
                <li
                  key={item.slug}
                  className="grid grid-cols-1 md:grid-cols-2 items-center sm:gap-8 p-4 border rounded-md bg-white"
                >
                  {/* Product Image */}
                  {item.image ? (
                    <Image
                      src={urlFor(item.image).url()}
                      height={400}
                      width={400}
                      alt={item.name || "Product Image"}
                      quality={75}
                      priority
                      className="rounded-md w-full h-[400px] md:ml-6 lg:ml-[50px] lg:w-[400px] lg:h-80 object-cover"
                    />
                  ) : (
                    <div className="w-full h-[200px] md:h-[400px] bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Image Not Available</p>
                    </div>
                  )}

                  <div className="text-center mt-5">
                    <h1 className="sm:text-2xl text-xl font-bold font-satoshi">
                      {item.name}
                    </h1>
                    <h2 className="sm:text-xl text-lg font-satoshi">
                      Price: £{item.price}
                    </h2>
                    <h1 className="sm:text-2xl text-xl font-bold font-satoshi">
                      Description
                    </h1>
                    <p className="sm:text-lg text-md font-clash font-semibold">
                      {item.description}
                    </p>

                    {/* Remove Button */}
                    <button
                      className="mx-auto px-6 py-2 text-center bg-blue-950 text-white rounded-md mt-4 hover:bg-[#F9F9F9] hover:text-black hover:border-black transition w-full sm:w-auto flex items-center justify-center gap-2"
                      onClick={() => removeFromWishlist(item.slug)}
                    >
                      <AiOutlineDelete size={30} />
                    
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
       <div>
         <h2 className="text-white text-xl md:text-2xl bg-blue-950 h-20 font-clash flex justify-center items-center hover:bg-white hover:border-black hover:border-2 hover:text-black w-full rounded-full">
          Wishlist is Empty <span className="text-red-500">💕</span>
         </h2>
          <button
          onClick={handleNavigation}
          className="mx-auto md:w-1/4 font-clash block text-center mb-2 bg-blue-500 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 ml-5 mt-2"
        >
          Select Products
        </button>
       </div>
      )}
    </section>
  );
}
