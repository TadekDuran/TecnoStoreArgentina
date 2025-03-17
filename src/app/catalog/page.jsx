"use client";
import React, { useState, useEffect } from "react";
import { useProducts } from "@/hooks";
import ProductsFilter from "@/components/product/ProductsFilter";
import { LoaderCircle } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";

const Catalog = () => {
  const { data, loading, error, getProducts } = useProducts();
  const [queries, setQueries] = useState({ featured: true });

  useEffect(() => {
    getProducts(queries);
  }, [queries]);

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#121212] px-20 py-10">
      <h1 className="mb-8 text-3xl font-bold text-white">Catálogo</h1>

      <div className="flex w-full max-w-screen-2xl gap-12">
        {/* Filtros (Altura independiente) */}
        <div className="w-1/4 self-start rounded-lg bg-[#1a1a1a] p-5 shadow-lg">
          <ProductsFilter queries={queries} setQueries={setQueries} />
        </div>

        {/* Contenedor de productos (No depende de los filtros) */}
        <div className="relative flex-grow overflow-hidden rounded-lg bg-[#1a1a1a] p-6 shadow-lg">
          {loading && (
            <LoaderCircle className="mx-auto animate-spin text-white" />
          )}
          {error && <p className="text-red-500 text-center">{error.message}</p>}
          {!loading && !error && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.map((product) => (
                <div
                  className="transition-transform duration-300 hover:scale-105"
                  key={product.id}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
