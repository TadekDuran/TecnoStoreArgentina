import React from "react";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import SuprapixelSponsorVideos from "@/components/home/SuprapixelSponsorVideos";
import FechuSponsorVideos from "@/components/home/FechuSponsorVideos";

export default function Home() {
    return (
    <div className="flex min-h-screen flex-col items-center bg-primary-background">
      <FeaturedProductsSection />


      <SuprapixelSponsorVideos />

      <FechuSponsorVideos />
    </div>
  );
}
