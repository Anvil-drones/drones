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
    <div className="relative tab:hidden px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
      <DroneGalleryMob images={item.images} slug={item.slug} />
      <div className="flex gap-2 mb-4 items-center">
        <div className="relative px-1.5 h-8 flex items-center justify-center">
          <h3 className=" whitespace-nowrap text-accent font-semibold text-sm12 uppercase">
            {content.title}
          </h3>
          <div className="w-1.5 h-8 border border-accent border-r-0 absolute top-0 left-0" />{" "}
          <div className="w-1.5 h-8 border border-accent border-l-0 absolute top-0 right-0" />
        </div>
        <p className="text-sm1 font-exo font-medium">{content.subtitle}</p>
      </div>
      <div className="flex justify-between items-center mb-3">
        <h4 className="flex items-center uppercase font-bold text-sm1">
          <span className="w-1 h-1 bg-accent mr-2 block"></span>
          {t("features")}
        </h4>
        <button
          onClick={() => setIsFeaturesOpen(prev => !prev)}
          className={`w-[34px] h-[34px] flex items-center justify-center transition-transform duration-300 ease-in-out ${isFeaturesOpen ? "rotate-45" : ""}`}
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
            className="overflow-hidden flex flex-col gap-2 pb-1"
          >
            {content.features.map(feature => (
              <li key={item.slug + feature.label} className="flex gap-2">
                <IconBullet className=" shrink-0 h-3 w-auto" />
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
      <div className="w-full h-px bg-text/15 mt-3 mb-3" />
      <div className="flex justify-between items-center mb-3">
        <h4 className="flex items-center uppercase font-bold text-sm1">
          <span className="w-1 h-1 bg-accent mr-2 block"></span>
          {t("equipment")}
        </h4>
        <button
          onClick={() => setIsEquipmentOpen(prev => !prev)}
          className={`w-[34px] h-[34px] flex items-center justify-center transition-transform duration-300 ease-in-out ${isEquipmentOpen ? "rotate-45" : ""}`}
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
                className="flex gap-4 justify-between items-center px-1 py-1.5 odd:bg-black20"
              >
                <p className="text-sm12 w-[48%]">{equipt.label}:</p>
                <p className="text-sm12 font-exo font-semibold w-[45%]">
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
