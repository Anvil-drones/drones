"use client";
import Image from "next/image";
import { useState } from "react";

export const DroneGallery = ({
  images,
  slug,
}: {
  images: string[];
  slug: string;
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="w-[32%] max-w-[426px] pc:w-[33%]">
      <div className="mb-2 flex aspect-[426/338] w-full items-center justify-center overflow-hidden bg-slate-50">
        <Image
          src={images[selectedImage]}
          alt={slug}
          width={426}
          height={338}
          className="h-auto max-h-full w-auto max-w-full object-contain"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto pc:justify-center">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(index)}
            className={`relative flex h-[72px] w-[90px] shrink-0 items-center justify-center overflow-hidden border p-1 transition-all duration-300 ease-in-out ${
              selectedImage === index ? "border-accent" : "border-text/45"
            }`}
          >
            <Image
              src={image}
              alt={`${slug} ${index + 1}`}
              width={90}
              height={72}
              className="h-auto max-h-full w-auto max-w-full bg-slate-50 object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
