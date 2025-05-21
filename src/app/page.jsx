import React from "react";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import FeaturedBrands from "@/components/home/FeaturedBrands";
import SuprapixelSponsorVideos from "@/components/home/SuprapixelSponsorVideos";
import FechuSponsorVideos from "@/components/home/FechuSponsorVideos";

export default function Home() {
    return (
    <div className="flex min-h-screen flex-col items-center bg-primary-background">
      <FeaturedProductsSection />

        <FeaturedBrands />

      <SuprapixelSponsorVideos />

      <FechuSponsorVideos />
    </div>
  );
}
