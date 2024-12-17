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
export interface  ProductsCardProps {
    id?: string;
    image:string;
    title:string;
    price:string
}

export interface DropdownProps {
    label: string;
    options: string[];
  }