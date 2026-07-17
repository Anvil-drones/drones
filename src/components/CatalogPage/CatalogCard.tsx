"use client";
import { useLocale, useTranslations } from "next-intl";

import { Drone } from "../assets/catalog";
import { IconBullet } from "../shared/Icons/IconBullet";
import { DroneGallery } from "./DroneGallery";

export const CatalogCard = ({ item }: { item: Drone }) => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const content = item[locale as "uk" | "en"];
  return (
    <div className="relative mx-auto hidden max-w-[540px] px-4 tab:mx-0 tab:flex tab:max-w-full tab:gap-5 tab:px-0 pc:gap-10">
      <DroneGallery images={item.images} slug={item.slug} />
      <div className="w-[65%]">
        <div className="flex items-center gap-2 tab:mb-4 tab:gap-4 pc:mb-6 pc:gap-[30px]">
          <div className="relative flex items-center justify-center tab:h-[49px] tab:px-2.5">
            <h3 className="whitespace-nowrap text-sm12 font-semibold uppercase text-accent tab:text-xl pc:text-2xl">
              {content.title}
            </h3>
            <div className="absolute left-0 top-0 border border-r-0 border-accent tab:h-[49px] tab:w-2.5" />{" "}
            <div className="absolute right-0 top-0 border border-l-0 border-accent tab:h-[49px] tab:w-2.5" />
          </div>
          <p className="font-exo text-sm1 font-medium tab:text-xl pc:text-2xl">
            {content.subtitle}
          </p>
        </div>
        <h4 className="mb-3 flex items-center font-bold uppercase">
          <span className="mr-2 block h-2 w-2 bg-accent"></span>
          {t("features")}
        </h4>

        <ul className="flex flex-col gap-2 overflow-hidden pb-1">
          {content.features.map(feature => (
            <li
              key={item.slug + feature.label}
              className="flex max-w-[692px] gap-5"
            >
              <div className="flex w-[40%] gap-2">
                <IconBullet className="shrink-0" />
                <p className="text-sm12">{feature.label}:</p>
              </div>
              <p className="w-[58%] font-exo text-sm12 font-semibold">
                {feature.value}
              </p>
            </li>
          ))}
        </ul>

        <div className="mb-3 mt-3 h-px w-full bg-text/15" />
        <h4 className="mb-3 flex items-center font-bold uppercase">
          <span className="mr-2 block h-2 w-2 bg-accent"></span>
          {t("equipment")}
        </h4>

        <ul className="overflow-hidden">
          {content.equipment.map(equipt => (
            <li
              key={item.slug + equipt.label}
              className="flex max-w-[692px] items-center justify-between gap-5 px-1 py-1.5 odd:bg-black20"
            >
              <p className="w-[40%] text-sm12">{equipt.label}:</p>
              <p className="w-[58%] font-exo text-sm12 font-semibold">
                {equipt.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
