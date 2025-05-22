"use client";
import React, { useEffect } from "react";
import { useProducts } from "@/hooks";
import { LoaderCircle } from "lucide-react";
import FeaturedProductsCarousel from "@/components/home/FeaturedProductsCarousel";

const FeaturedProductsSection = () => {
  const queries = {
    featured: true,
    page: 1,
    limit: 50,
    sortBy: "price",
    order: "desc",
  };
  const { data, loading, error, getProducts } = useProducts();

  useEffect(() => {
    getProducts(queries);
  }, []);

  return (
    <div className="py-8">
      {loading && (
        <div className="flex h-full items-center justify-center">
          <LoaderCircle className="h-12 w-12 animate-spin text-white" />
        </div>
      )}

      {error && (
        <div className="mx-auto max-w-2xl rounded-lg border border-red-500 bg-red-900/30 p-4 text-center">
          <p className="font-medium text-red-300">{error.message}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="mx-auto max-w-7xl">
          <div className="pb-4 text-center">
            <h2 className="pb-2 text-lg font-bold text-primary-text sm:text-4xl md:text-3xl">
              Productos Destacados
            </h2>
            <p className="text-md text-secondary-text md:text-lg">
              Descubrí nuestras selecciones especiales cuidadosamente elegidas
              para vos
            </p>
          </div>

          <div className="pb-8">
            <FeaturedProductsCarousel data={data} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProductsSection;
