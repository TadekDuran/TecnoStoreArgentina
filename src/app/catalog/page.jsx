"use client";
import { useState, useEffect, useRef } from "react";
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
  const { data, loading, error, getProducts, totalPages, brandList } =
    useProducts();

  const defaultQueries = {
    featured: true,
    page: 1,
    limit: 8,
    sortBy: "price",
    order: "desc",
  };

  const parseQueriesFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    if (!params.toString()) return defaultQueries;

    const URLQueries = { ...defaultQueries };
    const hasFilterParams = Array.from(params.keys()).some(
      (key) =>
        key !== "page" &&
        key !== "limit" &&
        key !== "sortBy" &&
        key !== "order",
    );

    if (hasFilterParams && !params.has("featured")) {
      URLQueries.featured = false;
    }

    for (const [key, value] of params.entries()) {
      if (value === "true") URLQueries[key] = true;
      else if (value === "false") URLQueries[key] = false;
      else if (!isNaN(Number(value))) URLQueries[key] = Number(value);
      else URLQueries[key] = value;
    }
    return URLQueries;
  };

  const [queries, setQueries] = useState(defaultQueries);
  const [queriesReady, setQueriesReady] = useState(false);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initialQueries = parseQueriesFromURL();
    setQueries(initialQueries);
    setQueriesReady(true);
  }, []);

  useEffect(() => {
    if (!queriesReady) return;

    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      getProducts(queries); // Primera carga real
      return;
    }

    const params = new URLSearchParams();
    Object.entries(queries).forEach(([key, value]) => {
      if (!(key in defaultQueries)) {
        params.set(key, value);
      }
    });

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
    getProducts(queries);
  }, [queries, queriesReady]);

  const handleSortChange = (value) => {
    const sortBy = "price";
    let order = "asc";
    if (value === "priceDesc") {
      order = "desc";
    }
    setQueries((prev) => ({ ...prev, sortBy, order, page: 1 }));
  };

  const selectValue = queries?.order === "asc" ? "priceAsc" : "priceDesc";

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
            <p htmlFor="sort">Ordenar por:</p>
            <Select onValueChange={handleSortChange} value={selectValue}>
              <SelectTrigger className="w-fit border-none bg-tertiary-background hover:bg-tertiary-background-hover">
                <SelectValue placeholder="Selecciona orden" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">Precio: Menor a mayor</SelectItem>
                <SelectItem value="priceDesc">Precio: Mayor a menor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ProductsFilter
            queries={queries}
            setQueries={setQueries}
            brandList={brandList}
          />
        </div>
        <div className="relative flex-grow overflow-hidden rounded-lg bg-secondary-background p-6 shadow-lg">
          {error && <p className="text-center text-red-500">{error.message}</p>}
          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary-background bg-opacity-70">
              <LoaderCircle
                className="animate-spin text-primary-text"
                size={40}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
