import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const firstImage = product.image_list[0];

  return (
    <div className="flex w-full flex-col items-center justify-between gap-2 rounded-lg bg-tertiary-background p-4 shadow-lg hover:bg-tertiary-background-hover">
      <Link
        href={`/catalog/${product.id}`}
        className="flex w-full flex-col items-center"
      >
        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-md">
          <img
            className="h-full w-full object-contain"
            src={firstImage}
            alt={product.model}
          />
        </div>
        <div className="mt-3 text-center">
          <p className="text-xl font-bold text-primary-text">{product.model}</p>
          <p className="text-lg font-semibold text-secondary-text">
            {product.price} USD
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
