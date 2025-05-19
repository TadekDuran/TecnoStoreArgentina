import React from "react";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import SuprapixelSponsorVideos from "@/components/home/SuprapixelSponsorVideos";

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
    <div className="flex min-h-screen flex-col items-center bg-primary-background py-4 sm:py-6 lg:py-8">
      <FeaturedProductsSection />


      <SuprapixelSponsorVideos />
    </div>
  );
}
