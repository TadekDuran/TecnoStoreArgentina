"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useProducts } from "@/hooks";

const Catalog = () => {
  const { data, loading, error, getProducts } = useProducts();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState({});

  useEffect(() => {
    const queries = {};
    for (const [key, value] of searchParams.entries()) {
      queries[key] = value;
    }
    setQuery(queries);
  }, [searchParams]);

  useEffect(() => {
    if (Object.keys(query).length > 0) {
      getProducts(query);
    }
  }, [query]);

  return (
    <div>
      <p>Catálogo</p>
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
