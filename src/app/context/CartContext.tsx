
"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Define Cart Item Type
export type CartItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

// Define Context Type
type CartContextType = {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void; // ✅ Add setCart
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  grandTotal: number;
};

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load Cart from Local Storage on Mount
  useEffect(() => {
    const storedCart = localStorage.getItem("shoppingCart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update Local Storage when Cart Changes
  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  // Add Item to Cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.slug === item.slug);
      if (existingItem) {
        return prevCart.map((i) =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove Item from Cart
  const removeFromCart = (slug: string) => {
    if (window.confirm("Are you sure you want to remove this item from cart?")) {
    setCart((prevCart) => prevCart.filter((item) => item.slug !== slug));
    }
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate Grand Total
  const grandTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, clearCart, grandTotal }} // ✅ Now setCart is included
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to Use Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
