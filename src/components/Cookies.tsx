"use client";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useEffect } from "react";

import { selectedLink } from "@/utils/selectedLink";

import { IconClose } from "./Icons/IconClose";
import { IconCookies } from "./Icons/IconCookies";
import { IconEmpty } from "./Icons/IconEmpty";

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
      } bg-blackCustom w-full max-w-[388px] transition-[height] duration-[1000ms] overflow-hidden fixed z-[11] bottom-12 right-1/2 translate-x-1/2 tab:right-12 tab:translate-x-0 border border-accent `}
    >
      <div className=" relative p-4 tab:p-12 flex flex-col items-center justify-center mx-auto">
        <div className="ml-0 mr-auto mt-8 tab:mt-0 mb-2">
          <IconCookies />
        </div>
        <div className="mx-auto mb-9">
          <h2 className="font-exo font-semibold text-3xl text-title mb-6">
            {t("title")}
          </h2>
          <p className="text-sm12">
            {t.rich("text", {
              link: chunk => (
                <a
                  href={selectedLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer underline font-bold"
                >
                  {chunk}
                </a>
              ),
            })}
          </p>
        </div>

        <div className="flex gap-4 justify-between w-full ">
          <button
            onClick={handleReject}
            className="w-[130px] h-12 flex justify-center items-center uppercase font-bold text-white border border-white"
          >
            {tButton("reject")}
          </button>
          <button
            onClick={handleAccept}
            className="w-[130px] h-12 flex justify-center items-center uppercase font-bold text-accent border border-accent"
          >
            {tButton("accept")}
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-11 h-11 flex justify-center items-center "
          aria-label="Close modal"
        >
          <div className="w-9 h-9 flex justify-center items-center text-title hover:bg-radial-green-50 hover:text-hoverAccent">
            <IconEmpty className="w-9 h-9 " />
            <IconClose className="absolute" />
          </div>
        </button>
      </div>
    </div>
  );
};
