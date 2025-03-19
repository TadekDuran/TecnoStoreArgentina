import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ThumbnailCarousel = ({ images, emblaMain, setEmblaThumbs, selectedIndex, }) => {
  return (
    <Carousel
      className="relative mx-auto mt-4 max-w-md"
      setApi={setEmblaThumbs}
      opts={{ containScroll: false, align: "start" }}
    >
      <CarouselContent className="flex gap-2">
        {images.map((imageUrl, index) => (
          <CarouselItem
            key={index}
            className="basis-1/4 cursor-pointer"
            onClick={() => emblaMain && emblaMain.scrollTo(index)}
          >
            <div
              className={`h-20 w-20 rounded-lg border-2 transition-all duration-300 ${
                selectedIndex === index
                  ? "border-blue-500 shadow-lg"
                  : "border-transparent"
              }`}
            >
              <img
                src={imageUrl}
                alt={`Miniatura ${index + 1}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ThumbnailCarousel;
