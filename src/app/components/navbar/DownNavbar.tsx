

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavbarLinks from "./NavbarLinks";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { client } from "@/sanity/lib/client";
import { Category, Product } from "../../../../types/Types";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { PiShoppingCartBold } from "react-icons/pi";
import { useWishlist } from "@/app/context/WishlistContext";

function DownNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [productData, setProductData] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories from Sanity
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await client.fetch(
          `*[_type == "category"]{
           
            name,
            "slug": slug.current
          }`
        );
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

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

  // Toggle search bar visibility
  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setSearchQuery(""); // Clear search query when toggling
  };

  return (
    <div className="w-full bg-white">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center items-center mt-2">
        <ul className="md:grid md:grid-cols-5 lg:flex gap-8 text-[#726E8D] font-satoshi text-[1.5rem] font-400">
          
        <NavbarLinks href="/" title="Home" />
          <NavbarLinks href="/about" title="About" />
          <NavbarLinks href="/productlisting" title="Products" />
          
          {categories.map((category:Category) => (
            
            <li key={category.slug.current}>
              
              <NavbarLinks href={`/category/${category.slug}`} title={category.name} />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="font-satoshi text-[#22202E] text-[24px] font-bold">Avion</div>

        {/* Search and Hamburger Icon */}
        <div className="flex items-center gap-5">
          {/* Search Icon */}
          <span className="text-[24px] text-black cursor-pointer" onClick={toggleSearch}>
            <CiSearch />
          </span>

          {/* Hamburger Menu Icon */}
          <div className="flex flex-col justify-between w-8 h-[20px] cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <Image
                src="/images/cross.png"
                alt="Close Menu"
                width={50}
                height={50}
                className="rounded-md"
              />
            ) : (
              <>
                <div className="w-full h-0.5 bg-black rounded"></div>
                <div className="w-full h-0.5 bg-black rounded"></div>
                <div className="w-full h-0.5 bg-black rounded"></div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col bg-white w-full px-4 py-6">
          <ul className="flex flex-col items-center gap-5 text-black text-xl mb-4">
          
          <NavbarLinks href="/" title="Home" />
          <NavbarLinks href="/about" title="About" />
          <NavbarLinks href="/productlisting" title="Products" />
            {categories.map((category) => (
             
              <li key={category.slug.current}>
                <NavbarLinks href={`/category/${category.slug.current}`} title={category.name} />
      
              </li>
            ))}
          </ul>
           {/* Cart, Wishlist, and User Icons */}
          <div className="md:hidden flex justify-center items-center gap-6 text-2xl">
      <Link href="/wishlist">
        <button className="relative">
          <FaRegHeart />
          {wishlist?.length > 0 && (
            <span className="absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full px-1">
              {wishlist.length}
            </span>
          )}
        </button>
      </Link>
      <Link href="/cart">
        <button className="relative">
          <PiShoppingCartBold />
          {cart?.length > 0 && (
            <span className="absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full px-1">
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
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="mt-4 px-4">
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
                      <p className="font-medium">{product.name}</p>
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                  </div>
                  <Link href={`/productlisting/${product.slug}`}>
                    <button className="text-white bg-blue-950 px-4 py-2 rounded-md hover:bg-gray-200 hover:text-blue-950">
                      Details
                    </button>
                  </Link>
                </li>
                
              ))}
          
            </ul>
            
          ) : (
            searchQuery && <p className="mt-2 text-gray-500">No products found.</p>
          )}
        </div>
      )}

     
    </div>
  );
}

export default DownNavbar;