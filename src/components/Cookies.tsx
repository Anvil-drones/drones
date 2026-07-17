"use client";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useEffect } from "react";

import { selectedLink } from "@/utils/selectedLink";

import { IconClose } from "./shared/Icons/IconClose";
import { IconCookies } from "./shared/Icons/IconCookies";
import { IconEmpty } from "./shared/Icons/IconEmpty";

export const CookiesComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();

  const t = useTranslations("Cookies");
  const tButton = useTranslations("Buttons");

  useEffect(() => {
    const cookiesValue = Cookies.get("isAcceptedCookies");
    if (!cookiesValue) {
      setIsVisible(true);
    }
  }, []);

  const onClose = () => {
    setIsVisible(false);
  };

  const handleAccept = () => {
    Cookies.set("isAcceptedCookies", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    Cookies.set("isAcceptedCookies", "false");
    setIsVisible(false);
  };

  return (
    <div
      className={`${
        isVisible ? "h-[363px]" : "h-0"
      } fixed bottom-12 right-1/2 z-[11] w-full max-w-[388px] translate-x-1/2 overflow-hidden bg-blackCustom transition-[height] duration-[1000ms] tab:right-12 tab:translate-x-0`}
    >
      <div className="relative mx-auto flex flex-col items-center justify-center border border-accent p-4 tab:p-12">
        <div className="mb-2 ml-0 mr-auto mt-8 tab:mt-0">
          <IconCookies />
        </div>
        <div className="mx-auto mb-9">
          <h2 className="mb-6 font-exo text-3xl font-semibold text-title">
            {t("title")}
          </h2>
          <p className="text-sm12">
            {t.rich("text", {
              link: chunk => (
                <a
                  href={selectedLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer font-bold underline"
                >
                  {chunk}
                </a>
              ),
            })}
          </p>
        </div>

        <div className="flex w-full justify-between gap-4">
          <button
            onClick={handleReject}
            className="flex h-12 w-[130px] items-center justify-center border border-white font-bold uppercase text-white"
          >
            {tButton("reject")}
          </button>
          <button
            onClick={handleAccept}
            className="flex h-12 w-[130px] items-center justify-center border border-accent font-bold uppercase text-accent"
          >
            {tButton("accept")}
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center"
          aria-label="Close modal"
        >
          <div className="flex h-9 w-9 items-center justify-center text-title hover:bg-radial-green-50 hover:text-hoverAccent">
            <IconEmpty className="h-9 w-9" />
            <IconClose className="absolute" />
          </div>
        </button>
      </div>
    </div>
  );
};
