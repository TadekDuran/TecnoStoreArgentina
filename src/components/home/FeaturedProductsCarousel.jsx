import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/catalog/ProductCard";

const FeaturedProductsCarousel = ({ data }) => {
  const fewItems = data.length < 4;

  return (
    <div className="flex justify-center px-4">
      <Carousel
        className="w-full max-w-[75vw]"
        opts={{
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent
          className={`-ml-4 ${fewItems ? "lg:justify-center" : ""}`}
        >
          {data.map((product) => (
            <CarouselItem
              key={product.id}
              className={`basis-full pl-4 sm:basis-1/2 md:basis-1/3 ${fewItems ? "lg:basis-auto" : "lg:basis-1/4"}`}
            >
              <div className="mx-auto w-full max-w-sm">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {data.length > 1 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default FeaturedProductsCarousel;
