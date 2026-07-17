"use client";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./Slider/SliderButtons";
import { useDotButton } from "./Slider/SliderDots";
import { SliderSquareBox } from "./Slider/SliderSquareBox";

type ProjectWithImage = {
  title: string;
  imageURL: string;
  videoURL?: never;
};

type ProjectWithVideo = {
  title: string;
  videoURL: string;
  imageURL?: never;
};

export type ProjectType = (ProjectWithImage | ProjectWithVideo)[];

export const SliderGallery = ({ projects }: { projects: ProjectType }) => {
  const options: EmblaOptionsType = {
    loop: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative min-w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, ind) => (
            <div
              key={project.title + ind}
              className="w-full flex-[0_0_100%] px-[5px] tab:flex-[0_0_46%] pc:px-3"
            >
              {project.imageURL ? (
                <Image
                  src={project.imageURL}
                  alt={project.title}
                  width={578}
                  height={325}
                  className="aspect-[288/161] h-auto w-full object-cover"
                />
              ) : (
                <video
                  width="578"
                  height="325"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="aspect-[288/161] h-auto w-full object-cover"
                >
                  <source src={project.videoURL} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="mt-2 font-bold uppercase pc:mt-3 pc:text-lg">
                {project.title}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 tab:absolute tab:right-0 tab:top-[-118px] pc:top-[-140px]">
          <div className="flex justify-between gap-4 tab:gap-5 pc:gap-6">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <SliderSquareBox
              scrollSnaps={scrollSnaps}
              selectedIndex={selectedIndex}
              sliders={projects}
              onDotButtonClick={onDotButtonClick}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
