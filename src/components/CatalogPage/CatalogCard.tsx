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
    <div className="hidden tab:flex tab:gap-5 pc:gap-10 relative px-4 tab:px-0 max-w-[540px] tab:max-w-full mx-auto tab:mx-0">
      <DroneGallery images={item.images} slug={item.slug} />
      <div className="w-[65%]">
        <div className="flex gap-2 tab:gap-4 pc:gap-[30px] tab:mb-4 pc:mb-6 items-center">
          <div className="relative tab:px-2.5 tab:h-[49px] flex items-center justify-center">
            <h3 className=" whitespace-nowrap text-accent font-semibold text-sm12 tab:text-xl pc:text-2xl uppercase">
              {content.title}
            </h3>
            <div className="tab:w-2.5 tab:h-[49px] border border-accent border-r-0 absolute top-0 left-0" />{" "}
            <div className="tab:w-2.5 tab:h-[49px] border border-accent border-l-0 absolute top-0 right-0" />
          </div>
          <p className="text-sm1 font-exo font-medium tab:text-xl pc:text-2xl">
            {content.subtitle}
          </p>
        </div>
        <h4 className="flex items-center mb-3 font-bold uppercase">
          <span className="w-2 h-2 bg-accent mr-2 block"></span>
          {t("features")}
        </h4>

        <ul className="overflow-hidden flex flex-col gap-2 pb-1">
          {content.features.map(feature => (
            <li
              key={item.slug + feature.label}
              className="flex gap-5 max-w-[692px]"
            >
              <div className="flex gap-2 w-[40%]">
                <IconBullet className=" shrink-0" />
                <p className="text-sm12">{feature.label}:</p>
              </div>
              <p className="text-sm12 font-exo font-semibold w-[58%]">
                {feature.value}
              </p>
            </li>
          ))}
        </ul>

        <div className="w-full h-px bg-text/15 mt-3 mb-3" />
        <h4 className="flex items-center mb-3 font-bold uppercase">
          <span className="w-2 h-2 bg-accent mr-2 block"></span>
          {t("equipment")}
        </h4>

        <ul className="overflow-hidden">
          {content.equipment.map(equipt => (
            <li
              key={item.slug + equipt.label}
              className="flex gap-5 justify-between items-center px-1 py-1.5 max-w-[692px] odd:bg-black20"
            >
              <p className="text-sm12 w-[40%]">{equipt.label}:</p>
              <p className="text-sm12 font-exo font-semibold w-[58%]">
                {equipt.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
