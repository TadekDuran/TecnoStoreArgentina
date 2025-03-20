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
    <Carousel className="mx-auto max-w-[400px] sm:max-w-[500px] md:max-w-[600px]" setApi={setEmblaMain}>
      <CarouselContent>
        {selectedColor &&
          product.colors
            .find((color) => Object.keys(color)[0] === selectedColor)
            [selectedColor].map((imageUrl, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <img
                  src={imageUrl}
                  alt={`Imagen ${index + 1} del color ${selectedColor}`}
                  className="h-auto w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px] rounded-lg shadow-lg"
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
