"use client";
import React, { useState, useEffect } from "react";
import { useProducts } from "@/hooks";
import ProductsFilter from "@/components/catalog/ProductsFilter";
import { LoaderCircle } from "lucide-react";
import ProductCard from "@/components/catalog/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

const Catalog = () => {
  const [queries, setQueries] = useState({ featured: true, page: 1, limit: 8 });
  const { data, loading, error, getProducts, totalPages } = useProducts();

  useEffect(() => {
    getProducts(queries);
  }, [queries]);

  const handlePageChange = (page) => {
    setQueries((prev) => ({ ...prev, page }));
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#121212] px-20 py-10">
      <h1 className="mb-8 text-3xl font-bold text-white">Catálogo</h1>

      <div className="flex w-full max-w-screen-2xl gap-12">
        <div className="w-1/4 self-start rounded-lg bg-[#1a1a1a] p-5 shadow-lg">
          <ProductsFilter queries={queries} setQueries={setQueries} />
        </div>

        <div className="relative flex-grow overflow-hidden rounded-lg bg-[#1a1a1a] p-6 shadow-lg">
          {loading && (
            <LoaderCircle className="mx-auto animate-spin text-white" />
          )}
          {error && <p className="text-center text-red-500">{error.message}</p>}
          {!loading && !error && (
            <>
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
              <div className="mt-6 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationPrevious
                      disabled={queries.page === 1}
                      onClick={() => {
                        if (queries.page > 1) {
                          handlePageChange(queries.page - 1);
                        }
                      }}
                      className={`rounded-md px-3 py-1 ${
                        queries.page === 1
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer hover:bg-slate-700"
                      }`}
                    />
                    {Array.from({ length: totalPages }, (_, index) => {
                      const pageNumber = index + 1;
                      return (
                        <PaginationLink
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`rounded-md px-4 py-2 ${
                            queries.page === pageNumber
                              ? "cursor-default bg-slate-700 text-white hover:bg-slate-700"
                              : "cursor-pointer bg-slate-200 text-black hover:bg-slate-300"
                          }`}
                        >
                          {pageNumber}
                        </PaginationLink>
                      );
                    })}
                    <PaginationNext
                      disabled={queries.page === totalPages}
                      onClick={() => {
                        if (queries.page < totalPages) {
                          handlePageChange(queries.page + 1);
                        }
                      }}
                      className={`rounded-md px-3 py-1 ${
                        queries.page === totalPages
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer hover:bg-slate-700"
                      }`}
                    />
                  </PaginationContent>
                </Pagination>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
