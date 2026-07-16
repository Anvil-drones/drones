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
    <section
      className="pt-10 pb-[88px] relative bg-blackCustom clip-path-down-cut-mobile
    tab:pt-[56px] pc:pt-[60px] tab:pb-[162px] pc:pb-[110px] tab:clip-path-down-cut-tab"
    >
      <div className="relative px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <h1 className="uppercase font-exo font-semibold text-3xl tab:text-4xl pc:text-5xl text-title mb-6 tab:mb-8 pc:mb-[62px]">
          {t("catalogTitle")}
        </h1>
        <ul className="flex  gap-1 tab:gap-2 mb-6 tab:mb-[50px] pc:mb-[60px] overflow-x-auto">
          {filterCatalogList(t).map(item => (
            <li
              key={item.type}
              onClick={() => setActiveFilter(item.type)}
              className={`p-3 w-fit whitespace-nowrap border ${activeFilter === item.type ? "bg-title text-black33 transition-colors duration-300 border-blackCustom/45" : "bg-transparent text-text border-text"}`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-col gap-6 tab:gap-8 pc:gap-10 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        {filteredDroneList.map(drone => {
          return (
            <li
              key={drone.slug}
              className="py-4 tab:py-0 tab:pb-8 pc:pb-10 border-b border-text/50"
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
