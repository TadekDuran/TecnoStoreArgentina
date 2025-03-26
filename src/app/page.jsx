"use client";
import React, { useEffect } from "react";
import { useProducts } from "@/hooks";
import { LoaderCircle } from "lucide-react";
import FeaturedProductsCarousel from "@/components/home/FeaturedProductsCarousel";
import SponsorVideos from "@/components/home/SponsorVideos";

export default function Home() {
  const queries = {
    featured: true,
    page: 1,
    limit: 10,
    sortBy: "price",
    order: "desc",
  };
  const { data, loading, error, getProducts } = useProducts();

  useEffect(() => {
    getProducts(queries);
  }, []);

  return (
    <div className="min-h-screen bg-background-primario px-4 py-12 sm:px-6 lg:px-8">
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
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary-text sm:text-4xl">
              Productos Destacados
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-text">
              Descubrí nuestras selecciones especiales cuidadosamente elegidas
              para vos
            </p>
          </div>

          <div className="px-4">
            <FeaturedProductsCarousel data={data} />
          </div>
        </div>
      )}

      <SponsorVideos/>
    </div>
  );
}
