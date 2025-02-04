"use client";

import React, { createContext, useContext, useState } from "react";

// Define the structure of a cart item
export interface CartItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  features?:string[];
  
}

// Define the structure of the CartContext
interface CartContextType {
  cart: CartItem[];
  totalprice: number;
  totalQuantity: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
  grandTotal:number;
  showCart: boolean;
  setShowCart: (show: boolean) => void;
}

// Create a context with an undefined initial value
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap the app
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const totalprice = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.slug === item.slug);
      if (existingItem) {
        // Update quantity if item already exists in the cart
        return prevCart.map((cartItem) =>
          cartItem.slug === item.slug
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      // Add new item to the cart
      return [...prevCart, item];
    });
  };

  // Remove an item from the cart by its slug
  const removeFromCart = (slug: string) => {
    if (window.confirm("Are you sure you want to remove this item from cart?")) {
    setCart((prevCart) => prevCart.filter((item) => item.slug !== slug));
    }
    };
    const grandTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

  // Update the quantity of an item in the cart


  return (
    <CartContext.Provider
      value={{
        cart,
        totalprice,
        totalQuantity,
        addToCart,
        removeFromCart,
        grandTotal,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
