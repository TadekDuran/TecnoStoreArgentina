import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../catalog/ProductCard";

const FeaturedProductsCarousel = ({ data }) => {
  return (
    <div className="flex justify-center px-4">
      <Carousel className="w-[90%] max-w-[90vw]">
        <CarouselContent className="flex">
          {data.map((product) => (
            <div key={product.id} className="px-2">
              <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div>
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedProductsCarousel;
