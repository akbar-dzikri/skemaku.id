import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useBreakpointBelow } from "@/hooks/use-breakpoint";
import Autoplay from "embla-carousel-autoplay";
import { type AutoplayOptionsType } from "embla-carousel-autoplay";

interface MobileCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export function MobileCarousel({ images }: MobileCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [showCarouselProgress, setShowCarouselProgress] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useBreakpointBelow("md");
  const autoplayConfig: AutoplayOptionsType = {
    delay: 3000,
    playOnInit: true,
  };
  useEffect(() => {
    setShowCarouselProgress(isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (!api) {
      return;
    }
    const autoplayTime = api.plugins().autoplay.timeUntilNext();
    let timeToPercent = 0;

    const interval = setInterval(() => {
      if (autoplayTime)
        timeToPercent = (1 - autoplayTime / Number(autoplayConfig.delay)) * 100;
      setScrollProgress(timeToPercent);
    }, 100);
    return () => clearInterval(interval);
  });

  return (
    <Carousel
      className="relative mx-auto w-full max-w-xs md:hidden"
      opts={{
        align: "center",
        loop: true,
      }}
      setApi={setApi}
      plugins={[Autoplay(autoplayConfig)]}
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
      <div className="absolute flex w-full justify-center">
        <MobileCarouselProgress
          showProgress={showCarouselProgress}
          scrollProgress={scrollProgress}
        />
      </div>
      <CarouselPrevious className="absolute top-1/2 left-2 -translate-y-1/2" />
      <CarouselNext className="absolute top-1/2 right-2 -translate-y-1/2" />
    </Carousel>
  );
}

function MobileCarouselProgress({
  showProgress,
  scrollProgress,
}: {
  showProgress: boolean;
  scrollProgress: number;
}) {
  return (
    <>
      {showProgress ? (
        <Progress value={scrollProgress} className="w-full max-w-xs" />
      ) : null}
    </>
  );
}
