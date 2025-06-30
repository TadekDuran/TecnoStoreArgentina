import React from "react";
import SectionFadeWrapper from "@/components/home/SectionFadeWrapper";
import Hero from "@/components/home/Hero";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import FeaturedBrands from "@/components/home/FeaturedBrands";
import SuprapixelSponsorVideos from "@/components/home/SuprapixelSponsorVideos";
import SponsorReels from "@/components/home/SponsorReels";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-primary-background">
      <SectionFadeWrapper>
        <Hero />
      </SectionFadeWrapper>

      <SectionFadeWrapper>
        <FeaturedProductsSection />
      </SectionFadeWrapper>

      <SectionFadeWrapper>
        <FeaturedBrands />
      </SectionFadeWrapper>

      <SectionFadeWrapper>
        <SuprapixelSponsorVideos />
      </SectionFadeWrapper>

      <SectionFadeWrapper>
        <SponsorReels />
      </SectionFadeWrapper>
    </div>
  );
}
