import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const MainCarousel = ({ product, setEmblaMain }) => {
  return (
    <Carousel
      className="mx-auto max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
      setApi={setEmblaMain}
    >
      <CarouselContent>
        {product.image_list?.length > 0 ? (
          product.image_list.map((imageUrl, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-lg shadow-lg sm:max-w-[600px] md:max-w-[800px]">
                <img
                  src={`${imageUrl}?q=85&fm=webp&w=800`}
                  alt={`Imagen ${index + 1}`}
                  className="absolute h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))
        ) : (
          <CarouselItem className="flex justify-center">
            <div className="flex aspect-square w-full max-w-[400px] items-center justify-center rounded-lg bg-gray-100">
              <span className="text-gray-500">No hay imágenes disponibles</span>
            </div>
          </CarouselItem>
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default MainCarousel;
