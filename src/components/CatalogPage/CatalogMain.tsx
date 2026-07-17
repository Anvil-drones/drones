"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { dronesList, filterCatalogList } from "../assets/catalog";
import { CatalogCard } from "./CatalogCard";
import { CatalogCardMob } from "./CatalogCardMob";

export const CatalogMain = () => {
  const t = useTranslations("HomePage");
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredDroneList =
    activeFilter !== "all"
      ? dronesList.filter(drone => drone.type === activeFilter)
      : dronesList;

  return (
    <section className="relative bg-blackCustom pb-[88px] pt-10 clip-path-down-cut-mobile tab:pb-[162px] tab:pt-[56px] tab:clip-path-down-cut-tab pc:pb-[110px] pc:pt-[60px]">
      <div className="relative mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
        <h1 className="mb-6 font-exo text-3xl font-semibold uppercase text-title tab:mb-8 tab:text-4xl pc:mb-[62px] pc:text-5xl">
          {t("catalogTitle")}
        </h1>
        <ul className="mb-6 flex gap-1 overflow-x-auto tab:mb-[50px] tab:gap-2 pc:mb-[60px]">
          {filterCatalogList(t).map(item => (
            <li
              key={item.type}
              onClick={() => setActiveFilter(item.type)}
              className={`w-fit whitespace-nowrap border p-3 ${activeFilter === item.type ? "border-blackCustom/45 bg-title text-black33 transition-colors duration-300" : "border-text bg-transparent text-text"}`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <ul className="mx-auto flex max-w-[540px] flex-col gap-6 tab:max-w-full tab:gap-8 tab:px-5 pc:max-w-[1440px] pc:gap-10 pc:px-[60px]">
        {filteredDroneList.map(drone => {
          return (
            <li
              key={drone.slug}
              className="border-b border-text/50 py-4 tab:py-0 tab:pb-8 pc:pb-10"
            >
              <CatalogCardMob item={drone} />
              <CatalogCard item={drone} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
