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

export interface DropdownProps {
    label: string;
    options: string[];
  }