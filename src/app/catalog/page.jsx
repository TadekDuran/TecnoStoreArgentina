"use client";
import React, { useState, useEffect } from "react";
import { useProducts } from "@/hooks";
import ProductsFilter from "@/components/catalog/ProductsFilter";
import { LoaderCircle } from "lucide-react";
import ProductCard from "@/components/catalog/ProductCard";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import ProductPagination from "@/components/ProductPagination";
import CatalogDrawerFilters from "@/components/catalog/CatalogDrawerFilters";

const Catalog = () => {
  const [queries, setQueries] = useState({
    featured: true,
    page: 1,
    limit: 3,
    sortBy: "price",
    order: "asc",
  });
  const { data, loading, error, getProducts, totalPages } = useProducts();

  useEffect(() => {
    getProducts(queries);
  }, [queries]);

  const handleSortChange = (value) => {
    let sortBy = "price";
    let order = "asc";
    if (value === "priceAsc") {
      sortBy = "price";
      order = "asc";
    } else if (value === "priceDesc") {
      sortBy = "price";
      order = "desc";
    } else if (value === "featured") {
      sortBy = "featured";
      order = "desc";
    }
    setQueries((prev) => ({ ...prev, sortBy, order, page: 1 }));
  };

  const selectValue =
    queries.sortBy === "price"
      ? queries.order === "asc"
        ? "priceAsc"
        : "priceDesc"
      : "featured";

  return (
    <div className="flex min-h-screen flex-col items-center bg-primary-background px-4 py-10 lg:px-20">
      <h1 className="mb-8 text-3xl font-bold text-primary-text">Catálogo</h1>

      <CatalogDrawerFilters
        handleSortChange={handleSortChange}
        selectValue={selectValue}
        queries={queries}
        setQueries={setQueries}
      />

      <div className="flex w-full max-w-screen-2xl gap-6">
        <div className="hidden w-1/4 self-start rounded-lg bg-secondary-background p-5 shadow-lg md:block">
          <div className="mt-4 text-primary-text">
            <label className="mr-2" htmlFor="sort">
              Ordenar por:
            </label>
            <Select onValueChange={handleSortChange} value={selectValue}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona orden" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Precio: Menor a mayor</SelectItem>
                <SelectItem value="priceDesc">Precio: Mayor a menor</SelectItem>
                <SelectItem value="featured">Destacados</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ProductsFilter queries={queries} setQueries={setQueries} />
        </div>

        <div className="relative flex-grow overflow-hidden rounded-lg bg-secondary-background p-6 shadow-lg">
          {loading && (
            <LoaderCircle className="mx-auto animate-spin text-primary-text" />
          )}
          {error && <p className="text-center text-red-500">{error.message}</p>}
          {!loading && !error && (
            <>
              <div
                className="grid justify-center gap-6"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                }}
              >
                {data.map((product) => (
                  <div
                    key={product.id}
                    className="mx-auto w-full max-w-sm transition-transform duration-300 hover:scale-105"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              <ProductPagination
                queries={queries}
                setQueries={setQueries}
                totalPages={totalPages}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
