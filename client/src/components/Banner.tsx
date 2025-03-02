
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BannerImage {
  src: string;
  alt: string;
}

interface BannerProps {
  images: BannerImage[];
  className?: string;
}

export function Banner({ images, className }: BannerProps) {
  const [api, setApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;

    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className={`w-full ${className}`}>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
