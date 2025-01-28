"use client"; // Because this is an interactive component

import { createContext, useContext, useEffect, useState } from "react";

interface WishlistItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  slug: string;
  description:string
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product: WishlistItem) => {
    if (!wishlist.some((item) => item.slug=== product.slug)) {
      alert(`Item added in wish list`)
      setWishlist([...wishlist, product]);
    }
  };

 
    const removeFromWishlist = (slug: string) => {
      if (window.confirm("Are you sure you want to remove this item from cart?")) {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.slug !== slug));
      }
      

  
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};