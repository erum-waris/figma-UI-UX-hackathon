import { ReactNode } from "react";

export interface linksProps{
    href: string;
    title:string;
    height?:number;
    width?:number;
    bgColor?:string;
    color?:number;
}
export interface CardProps {
    icon: ReactNode;
    heading:string;
    description: string;
}
export interface  CeramicsCardProps {
    id?: string;
    image:string;
    title:string;
    price:string
}