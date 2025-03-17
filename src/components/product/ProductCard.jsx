import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const firstColorKey = Object.keys(product.colors[0])[0];
  const firstImage = product.colors[0][firstColorKey][0];

  return (
    <div className="flex h-80 w-64 transform cursor-pointer flex-col items-center justify-between rounded-lg bg-[#1a1a1a] p-4 shadow-lg hover:bg-[#252525]">
      <Link
        href={`/catalog/${product.id}`}
        className="flex w-full flex-col items-center"
      >
        <div className="flex h-48 w-full items-center justify-center overflow-hidden rounded-md">
          <img
            className="h-full w-full object-cover"
            src={firstImage}
            alt={product.model}
          />
        </div>
        <div className="mt-3 text-center">
          <p className="text-lg font-semibold text-white">{product.model}</p>
          <p className="text-md text-gray-400">{product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
