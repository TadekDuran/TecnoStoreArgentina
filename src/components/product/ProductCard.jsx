import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col">
      <Link href={`/catalog/${product.id}`}>
        <p>{product.model}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
