"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const DroneGalleryMob = ({
  images,
  slug,
}: {
  images: string[];
  slug: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative mb-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={slug + index}
              className="min-w-0 shrink-0 grow-0 basis-full"
            >
              <Image
                src={image}
                alt={`${slug}-${index + 1}`}
                width={426}
                height={338}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <span className="absolute bottom-1 right-1 flex min-w-[25px] justify-end bg-black30 px-1 py-0.5 font-exo text-[10px] font-medium text-title">
        {current + 1}/{images.length}
      </span>
    </div>
  );
};
