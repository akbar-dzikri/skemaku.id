import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface MobileCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function MobileCarousel({ images }: MobileCarouselProps) {
  return (
    <Carousel
      className="relative mx-auto w-full max-w-xs md:hidden"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => {
          return (
            <CarouselItem key={index}>
              <div className="h-64 w-full rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2" />
      <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2" />
    </Carousel>
  );
}
