import { useTranslations } from "next-intl";

import { projectsGallery } from "./assets/dataLists";
import { Union } from "./shared/Icons/Union";
import { SliderGallery } from "./shared/SliderGallery";

export const Gallery = ({ catalog }: { catalog?: boolean }) => {
  const t = useTranslations("HomePage");

  return (
    <section
      id="gallery"
      className={`relative pt-[65px] tab:pt-[130px] pb-[105px]  mt-[-45px] tab:mt-[-73px] z-[8] bg-blackCustom ${
        catalog
          ? "clip-path-hex-notch-galery-catalog tab:clip-path-hex-notch-galery-tab-catalog mb-[-30px] tab:mb-[-50px]"
          : "clip-path-hex-notch-galery tab:clip-path-hex-notch-galery-tab"
      }`}
    >
      <Union className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[186px] tab:w-[341px] h-auto z-[2]" />
      <h3 className="absolute top-[8px] tab:top-5 left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("gallery")}
      </h3>
      <div className="relative px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <h2 className="font-exo font-semibold uppercase text-center tab:text-left text-3xl pc:text-5xl mb-8 pc:mb-12">
          {t("portfolioTitle")}
        </h2>
        <SliderGallery projects={projectsGallery(t)} />
      </div>
    </section>
  );
};
