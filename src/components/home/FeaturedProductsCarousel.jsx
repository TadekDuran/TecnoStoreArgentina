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
  return (
    <div className="flex justify-center px-4">
      <Carousel
        className="w-full max-w-[90vw]"
        opts={{
          align: "start",
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="-ml-4">
          {data.map((product) => (
            <CarouselItem
              key={product.id}
              className="
                pl-4 
                basis-full
                max-[600px]:basis-full 
                max-[875px]:basis-1/2 
                max-[1175px]:basis-1/3 
                min-[1176px]:basis-1/4
              "
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedProductsCarousel;
