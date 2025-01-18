import { ReactNode } from "react";

export interface linksProps{
    href: string;
    title:string;
   
}
export interface CardProps {
    icon: ReactNode;
    heading:string;
    description: string;
}
export interface ProductCardProps {
    id:string;  //product id 
    imageSrc: string; // Product image source
    height: number; // Height of the image
    width: number; // Width of the image
    title: string; // Product title
    price: number; // Product price in pounds
  }

  export interface Products {
    name: string; // Represents the name of the product
    price: string; // Price of the product
    image: string; // URL or path to the product image
    description?: string; // Optional detailed description of the product
    slug?: string; // Optional slug for the product (used for routing)
    quantity?: number; // Optional quantity of the product
    category?:string;
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