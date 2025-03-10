"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useProducts } from "@/hooks";
import ProductsFilter from "@/components/product/ProductsFilter";

const Catalog = () => {
  const { data, loading, error, getProducts } = useProducts();
  const searchParams = useSearchParams();
  const [queries, setQueries] = useState({});

  useEffect(() => {
    const category = searchParams.get("category");
    setQueries({ category });
  }, [searchParams]);

  useEffect(() => {
    if (Object.keys(queries).length > 0) {
      getProducts(queries);
    }
  }, [queries]);

  return (
    <div>
      <p>Catálogo</p>
      <ProductsFilter queries={queries} setQueries={setQueries} />
      <div className="flex w-full justify-between gap-6 px-20">
        {data.map((product) => (
          <div className="flex flex-col" key={product.id}>
            <p>{product.model}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
