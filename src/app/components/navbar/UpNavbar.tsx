

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

function UpNavbar() {
  const { wishlist } = useWishlist();
  const { cart } = useCart();
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
        setProductData(products); // Save fetched products to state
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

        {/* Right Side: Wishlist, Cart, and User Icons */}
        <div className="flex gap-6 text-3xl">
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
          <Link href="/profile">
            <FaRegUserCircle />
          </Link>
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
            className="w-full border placeholder:text-black bg-black/10 text-black border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black"
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
                    <button className="text-white border border-black bg-blue-950 px-4 py-2 rounded-md hover:bg-gray-200 hover:text-blue-950 hover:border-black hover:border-2">
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
