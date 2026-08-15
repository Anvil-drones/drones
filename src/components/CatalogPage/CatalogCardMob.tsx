"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { Drone } from "../assets/catalog";
import { IconBullet } from "../shared/Icons/IconBullet";
import { IconOpen } from "../shared/Icons/IconOpen";
import { DroneGalleryMob } from "./DroneGalleryMob";

export const CatalogCardMob = ({ item }: { item: Drone }) => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);
  const content = item[locale as "uk" | "en"];
  return (
    <div className="relative mx-auto max-w-[540px] px-4 tab:hidden tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
      <DroneGalleryMob images={item.images} slug={item.slug} />
      <div className="mb-4 flex items-center gap-2">
        <div className="relative flex h-8 items-center justify-center px-1.5">
          <h3 className="whitespace-nowrap text-sm12 font-semibold uppercase text-accent">
            {content.title}
          </h3>
          <div className="absolute left-0 top-0 h-8 w-1.5 border border-r-0 border-accent" />{" "}
          <div className="absolute right-0 top-0 h-8 w-1.5 border border-l-0 border-accent" />
        </div>
        <p className="font-exo text-sm1 font-medium">{content.subtitle}</p>
      </div>
      <div className="mb-3 flex items-center justify-between">
        <h4 className="flex items-center gap-2 text-sm1 font-bold uppercase">
          <span className="mr-2 block h-1 w-1 bg-accent"></span>
          {t("features")}
        </h4>
        <button
          onClick={() => setIsFeaturesOpen(prev => !prev)}
          className={`flex h-[34px] w-[34px] items-center justify-center transition-transform duration-300 ease-in-out ${isFeaturesOpen ? "rotate-45" : ""}`}
        >
          <IconOpen />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isFeaturesOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2 overflow-hidden pb-1"
          >
            {content.additionalInfo && (
              <li className="mb-3 text-sm13">{content.additionalInfo}</li>
            )}
            {content.features.map(feature => (
              <li key={item.slug + feature.label} className="flex gap-2">
                <IconBullet className="h-3 w-auto shrink-0" />
                <p className="text-sm12">
                  {feature.label}:
                  <span className="ml-3 font-exo font-semibold">
                    {feature.value}
                  </span>
                </p>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <div className="mb-3 mt-3 h-px w-full bg-text/15" />
      <div className="mb-3 flex items-center justify-between">
        <h4 className="flex items-center gap-2 text-sm1 font-bold uppercase">
          <span className="mr-2 block h-1 w-1 bg-accent"></span>
          {t("equipment")}
        </h4>
        <button
          onClick={() => setIsEquipmentOpen(prev => !prev)}
          className={`flex h-[34px] w-[34px] items-center justify-center transition-transform duration-300 ease-in-out ${isEquipmentOpen ? "rotate-45" : ""}`}
        >
          <IconOpen />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isEquipmentOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            {content.equipment.map(equipt => (
              <li
                key={item.slug + equipt.label}
                className="flex items-center justify-between gap-4 px-1 py-1.5 odd:bg-black20"
              >
                <p className="w-[48%] text-sm12">{equipt.label}:</p>
                <p className="w-[45%] font-exo text-sm12 font-semibold">
                  {equipt.value}
                </p>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
