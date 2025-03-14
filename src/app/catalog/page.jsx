"use client";
import React, { useState, useEffect } from "react";
import { useProducts } from "@/hooks";
import ProductsFilter from "@/components/product/ProductsFilter";
import { LoaderCircle } from 'lucide-react';
import ProductCard from "@/components/product/ProductCard";

const Catalog = () => {
  const { data, loading, error, getProducts } = useProducts();
  const [queries, setQueries] = useState({ featured: true });

  useEffect(() => {
    getProducts(queries);
  }, [queries]);

  return (
    <div className="px-20 h-full">
      <p>Catálogo</p>
      <div className="flex gap-10 justify-center">
        <ProductsFilter queries={queries} setQueries={setQueries} />
        <div className="flex w-4/5 justify-around gap-6 bg-slate-800 p-2">
          {loading && <LoaderCircle className="animate-spin" />}
          {error && <p>{error.message}</p>}
          {!loading && !error && (
            <>
              {data.map((product) => (
                <ProductCard  key={product.id} product={product}/>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
