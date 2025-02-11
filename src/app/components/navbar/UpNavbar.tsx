"use client";
import React, { useState, useEffect } from "react";
import { GrSearch } from "react-icons/gr";
 import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import Link from "next/link";
import { useWishlist } from "@/app/context/WishlistContext";
import { useCart } from "@/app/context/CartContext";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Product } from "../../../../types/Types";
import { useUser, SignOutButton, SignUpButton } from "@clerk/nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/Avatar";

function UpNavbar() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const { user } = useUser();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [productData, setProductData] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Toggle search box visibility
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await client.fetch(
          `*[_type == "product"]{
            name,
            description,
            "slug": slug.current,
            price,
            "image": image.asset->url
          }`
        );
        setProductData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
    } else {
      const results = productData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchQuery, productData]);

  return (
    <div className="w-full p-6 bg-white hidden md:block">
      <div className="flex justify-between items-center">
        {/* Left Side: Search Icon */}
        <button
          onClick={toggleSearch}
          aria-label="Search"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200"
        >
          <GrSearch className="text-2xl" />
        </button>

        {/* Center: Brand Name */}
        <h1 className="text-3xl font-bold font-satoshi">Avion</h1>

        {/* Right Side: Wishlist, Cart, and User Avatar */}
        <div className="flex items-center gap-6 text-3xl">
          <Link href="/wishlist">
            <button className="relative">
              <FaRegHeart />
              {wishlist?.length > 0 && (
                <span className="absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full px-2">
                  {wishlist.length}
                </span>
              )}
            </button>
          </Link>
          <Link href="/cart">
            <button className="relative">
              <PiShoppingCartBold />
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full px-2">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>

          {/* User Avatar with Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="p-0">
                <Avatar className="w-9 h-9 border border-gray-300">
                  <AvatarImage
                    src={user ? user.imageUrl : "/images/User--avatar.svg"}
                    alt="User Avatar"
                  />
                  <AvatarFallback><FaRegUserCircle className="text-xl" /></AvatarFallback>
                </Avatar>
              </Button>
            </PopoverTrigger>

            {/* Popover Content */}
            <PopoverContent className="p-4 bg-white shadow-lg rounded-md w-56">
              {user ? (
                <div className="text-center">
                  <Avatar className="w-12 h-12 mx-auto mb-2">
                    <AvatarImage src={user.imageUrl} alt="User Avatar" />
                    <AvatarFallback><FaRegUserCircle /></AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">{user.fullName}</p>
                  <p className="text-xs text-gray-500">
                    {user.primaryEmailAddress?.emailAddress}
                  </p>

                  <div className="mt-3 flex flex-col gap-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/profile">View Profile</Link>
                    </Button>

                    <SignOutButton>
                      <Button variant="destructive" className="w-full">
                        Sign Out
                      </Button>
                    </SignOutButton>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    You are not signed in
                  </p>
                  <SignUpButton>
                    <Button variant="default" className="w-full">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Search Box */}
      {isSearchOpen && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 bg-gray-100 text-black rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
          {/* Display filtered products */}
          {filteredProducts.length > 0 ? (
            <ul className="bg-white border border-gray-200 rounded-md shadow-md mt-2">
              {filteredProducts.map((product) => (
                <li
                  key={product.slug}
                  className="p-4 flex items-center justify-between border-b last:border-none"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="rounded-md"
                    />
                    <div>
                      <p className="font-medium text-darkBlue">{product.name}</p>
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                  </div>
                  <Link href={`/productlisting/${product.slug}`}>
                    <button className="text-white bg-blue-950 px-4 py-2 rounded-md hover:bg-gray-200 hover:text-blue-950 hover:border-black hover:border-2">
                      Details
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            searchQuery && (
              <p className="mt-2 text-gray-500">No products found.</p>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default UpNavbar;
