import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ThumbnailCarousel = ({ images, emblaMain, setEmblaThumbs, selectedIndex, }) => {
  const basisClass = `basis-1/${images.length}`
  return (
    <Carousel
      className="mt-4"
      setApi={setEmblaThumbs}
      opts={{ align: "start" }}
    >
      <CarouselContent>
        {images.map((imageUrl, index) => (
          <CarouselItem
            key={index}
            className={`${basisClass} cursor-pointer`}
            onClick={() => emblaMain && emblaMain.scrollTo(index)}
          >
            <div
              className={`h-20 w-20 mx-auto rounded-lg border-2 transition-all duration-300 ${
                selectedIndex === index
                  ? "border-blue-500 shadow-lg"
                  : "border-transparent"
              }`}
            >
              <img
                src={imageUrl}
                alt={`Miniatura ${index + 1}`}
                className="h-full w-full rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ThumbnailCarousel;
