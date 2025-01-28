import { ReactNode } from "react";

export interface linksProps{
    href: string;
    title:string;
   
}
export interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  slug: string;
  description: string; 
    quantity: number; // Optional quantity of the product
    category?:string;
    tags?:string;
    features?: string;
}
export interface CardProps {
    icon: ReactNode;
    heading:string;
    description: string;
}


  export interface Products {
    _id:string
    name: string; // Represents the name of the product
    price: number; // Price of the product
    image?: any; // URL or path to the product image
    description?: string; // Optional detailed description of the product
    slug?: string; // Optional slug for the product (used for routing)
    quantity?: number; // Optional quantity of the product
    category?:string;
    tags?:string;
    features?: string;
   

  }

  

export interface DropdownProps {
    label: string;
    options: string[];
  }
  export interface CartProps{
    id?: string;
    image: string;
    heading: string;
    para?: string;
    price?: string;
  }

  
 export interface Category {

    name: string;
    slug: string;
  }
