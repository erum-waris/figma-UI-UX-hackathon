"use client"; 
import { FaHeart } from "react-icons/fa";
import { Product } from "../../../types/Types";
import { useWishlist } from "../context/WishlistContext";





export default function WishlistButton({ product }: { product: Product }) {
  const { wishlist, addToWishlist } = useWishlist();
  const isInWishlist = wishlist.some((item) => item.slug === product.slug);

  return (
    <button
      className={`p-2 rounded-full transition ${
        isInWishlist ? "text-red-500 hover:text-blue-500" : "text-blue-500 hover:text-red-500"
      }`}
      onClick={() =>  addToWishlist(product)}
    >
       <FaHeart size={30} /> 
    </button>
  );
}