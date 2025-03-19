import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const MainCarousel = ({ selectedColor, product, setEmblaMain }) => {
  return (
    <Carousel className="mx-auto max-w-lg" setApi={setEmblaMain}>
      <CarouselContent>
        {selectedColor &&
          product.colors
            .find((color) => Object.keys(color)[0] === selectedColor)
            [selectedColor].map((imageUrl, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <img
                  src={imageUrl}
                  alt={`Imagen ${index + 1} del color ${selectedColor}`}
                  className="h-auto max-w-full rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MainCarousel;
