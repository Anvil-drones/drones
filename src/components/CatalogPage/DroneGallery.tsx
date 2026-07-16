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
    <div className="w-[32%] pc:w-[33%] max-w-[426px]">
      <Image
        src={images[selectedImage]}
        alt={slug}
        width={426}
        height={338}
        className="w-full h-auto object-cover mb-2"
      />
      <div className="flex gap-2 overflow-x-auto pc:justify-center">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(index)}
            className={`relative w-[90px] h-[72px] p-1 shrink-0 overflow-hidden border transition-all duration-300 ease-in-out ${
              selectedImage === index ? "border-accent" : "border-text/45"
            }`}
          >
            <Image
              src={image}
              alt={`${slug} ${index + 1}`}
              width={90}
              height={72}
              className=" object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
