import React from "react";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import SuprapixelSponsorVideos from "@/components/home/SuprapixelSponsorVideos";
import FechuSponsorVideos from "@/components/home/FechuSponsorVideos";

export default function Home() {
    return (
    <div className="flex min-h-screen flex-col items-center bg-primary-background py-4 sm:py-6 lg:py-8">
      <FeaturedProductsSection />


      <SuprapixelSponsorVideos />

      <FechuSponsorVideos />
    </div>
  );
}
