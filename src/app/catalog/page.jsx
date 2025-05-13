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
  const defaultQueries = {
    featured: true,
    page: 1,
    limit: 10,
    sortBy: "price",
    order: "asc",
  };

  const [queries, setQueries] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const initialQueries = { ...defaultQueries };
    if ([...params.entries()].length > 0) {
      for (const [key, value] of params.entries()) {
        if (value === "true") initialQueries[key] = true;
        else if (value === "false") initialQueries[key] = false;
        else if (!isNaN(value)) initialQueries[key] = Number(value);
        else initialQueries[key] = value;
      }
    } else {
      const savedQueries = sessionStorage.getItem("catalogQueries");
      if (savedQueries) {
        try {
          const parsed = JSON.parse(savedQueries);
          return { ...initialQueries, ...parsed };
        } catch (e) {
          console.error("Error al parsear queries guardadas:", e);
        }
      }
    }
    return initialQueries;
  });

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('catalogQueries', JSON.stringify(queries));
      sessionStorage.setItem('catalogScrollY', window.scrollY.toString());
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handleBeforeUnload);
    return () => {
      handleBeforeUnload();
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handleBeforeUnload);
    };
  }, [queries]);

  useEffect(() => {
    const scrollY = sessionStorage.getItem('catalogScrollY');
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
    }
  }, []);

  const {
    data,
    loading,
    error,
    getProducts,
    totalPages,
    brandList
  } = useProducts();

  useEffect(() => {
    getProducts(queries);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(queries).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, value);
      }
    });
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
    getProducts(queries);
  }, [queries]);

  const handleSortChange = (value) => {
    let sortBy = "price";
    let order = "asc";
    if (value === "priceDesc") {
      order = "desc";
    }
    setQueries((prev) => ({ ...prev, sortBy, order, page: 1 }));
  };

  const selectValue = queries.order === "asc"
    ? "priceAsc"
    : "priceDesc"

  return (
    <div className="flex min-h-screen flex-col items-center bg-primary-background px-4 py-10 lg:px-20">
      <h1 className="mb-8 text-3xl font-bold text-primary-text">Catálogo</h1>
      <CatalogDrawerFilters
        handleSortChange={handleSortChange}
        selectValue={selectValue}
        queries={queries}
        setQueries={setQueries}
        brandList={brandList}
      />
      <div className="flex w-full max-w-screen-2xl gap-6">
        <div className="hidden w-1/5 rounded-lg bg-secondary-background p-5 shadow-lg md:block">
          <div className="text-primary-text">
            <p htmlFor="sort">
              Ordenar por:
            </p>
            <Select onValueChange={handleSortChange} value={selectValue}>
              <SelectTrigger className="bg-tertiary-background w-fit hover:bg-tertiary-background-hover border-none">
                <SelectValue placeholder="Selecciona orden" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Precio: Menor a mayor</SelectItem>
                <SelectItem value="priceDesc">Precio: Mayor a menor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ProductsFilter queries={queries} setQueries={setQueries} brandList={brandList} />
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
