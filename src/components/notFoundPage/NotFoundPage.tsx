"use client";
import { useTranslations } from "next-intl";

import { useRouter } from "@/i18n/navigation";

import { Button } from "../shared/Button";
import { DecorGrid } from "../shared/DecorGrid";
import Typewriter from "../shared/Typewriter";

export const NotFoundPage = () => {
  const t = useTranslations("HomePage");
  const tButton = useTranslations("Buttons");

  const text = t("notFound");
  const router = useRouter();
  return (
    <div className="relative mx-auto h-[calc(100vh-64px)] w-screen bg-blackCustom">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-[540px] px-4 pt-[35px] tab:max-w-full tab:px-5 tab:pt-[48px] pc:max-w-[1440px] pc:px-[60px] pc:pt-[61px]">
        <div className="absolute left-1/2 top-[25vh] -translate-x-1/2 tab:left-auto tab:right-[calc(50%+16px)] tab:top-[calc(50vh-76px)] tab:translate-x-0 pc:right-[calc(50%+24px)] pc:top-[calc(50vh-84px)]">
          <Typewriter textDef={text} />
        </div>
        <div className="absolute left-1/2 top-[65vh] z-[1] -translate-x-1/2 -translate-y-1/2 tab:left-[calc(50%+16px)] tab:top-[calc(50vh+16px)] tab:translate-x-0 pc:left-[calc(50%+24px)] pc:top-[calc(50vh+24px)]">
          <Button
            text={tButton("goHome")}
            joinUs
            onClick={() => router.push("/")}
          />
        </div>
      </div>
      <DecorGrid notFound />
    </div>
  );
};
