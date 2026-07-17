import { useTranslations } from "next-intl";

import { projectsGallery } from "./assets/dataLists";
import { Union } from "./shared/Icons/Union";
import { SliderGallery } from "./shared/SliderGallery";

export const Gallery = ({ catalog }: { catalog?: boolean }) => {
  const t = useTranslations("HomePage");

  return (
    <section
      id="gallery"
      className={`relative z-[8] mt-[-45px] bg-blackCustom pb-[105px] pt-[65px] tab:mt-[-73px] tab:pt-[130px] ${
        catalog
          ? "mb-[-30px] clip-path-hex-notch-galery-catalog tab:mb-[-50px] tab:clip-path-hex-notch-galery-tab-catalog"
          : "clip-path-hex-notch-galery tab:clip-path-hex-notch-galery-tab"
      }`}
    >
      <Union className="absolute left-1/2 top-[2px] z-[2] h-auto w-[186px] -translate-x-1/2 tab:w-[341px]" />
      <h3 className="absolute left-1/2 top-[8px] z-[3] -translate-x-1/2 uppercase text-accent tab:top-5">
        {t("gallery")}
      </h3>
      <div className="relative mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
        <h2 className="mb-8 text-center font-exo text-3xl font-semibold uppercase tab:text-left pc:mb-12 pc:text-5xl">
          {t("portfolioTitle")}
        </h2>
        <SliderGallery projects={projectsGallery(t)} />
      </div>
    </section>
  );
};
