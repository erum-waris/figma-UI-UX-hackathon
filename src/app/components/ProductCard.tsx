import Image from "next/image";
import { ProductCardProps } from "../../../types/Types";



const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  height,
  width,
  title,
  price,
}) => {
  return (
    <div className="w-full h-auto">
      <Image
        src={imageSrc}
        height={height}
        width={width}
        alt={title}
        className="w-full h-[80%] object-cover"
      />
      <div className="mt-4 text-[#2A254B]">
        <p className="py-2 font-clash">{title}</p>
        <p className="font-satoshi">&pound;{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
