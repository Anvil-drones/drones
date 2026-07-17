import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { selectedLink } from "@/utils/selectedLink";

import { EMAIL, TEL } from "../assets/contacts";
import { Menu } from "../Header/Menu";
import { SocialLinks } from "../Header/SocialLinks";
import { CallUsInfo } from "../shared/CallUsInfo";
import { IconLogo } from "../shared/Icons/IconLogo";
import ModelViewerFooter from "../shared/ModelViewerFooter";
import { UpToTopStatic } from "../shared/UpToTopStatic";

export const Footer = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <footer className="relative overflow-hidden pb-[183px] tab:pb-[60px] pc:pb-10">
      <div className="absolute inset-0 z-[-1] flex justify-center">
        <Image
          src="/bg/circle1.png"
          alt="circle decor"
          width={800}
          height={800}
          className="absolute left-1/2 top-6 h-auto w-[110vw] max-w-none -translate-x-1/2 tab:hidden pc:top-4"
          loading="lazy"
        />
        <Image
          src="/bg/circle1.png"
          alt="circle decor"
          width={1675}
          height={747}
          className="absolute left-1/2 top-6 hidden h-auto w-[120vw] max-w-none -translate-x-1/2 tab:block pc:top-4"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="mx-auto -mt-3 w-[70%] min-w-[288px] max-w-[540px] tab:mt-0 tab:max-w-[631px] pc:max-w-[771px]">
        <ModelViewerFooter />
      </div>
      <div className="mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
        <IconLogo className="mx-auto mb-px h-auto w-[200px] tab:w-[246px] pc:w-[305px]" />
        <p className="mb-8 text-center font-exo text-sm1 font-semibold uppercase leading-[10px] text-title tab:mb-[52px] pc:mb-[65px] pc:text-base13">
          {t("slogan")}
        </p>
        <div className="mb-12 tab:mb-[104px] tab:flex tab:justify-between pc:mb-[56px]">
          <Menu className="hidden tab:flex tab:flex-col tab:justify-between pc:w-[366px] pc:flex-row pc:justify-between" />
          <CallUsInfo footer />
          <SocialLinks className="mb-8 mt-6 tab:my-0 tab:flex-col tab:text-sm1 pc:mr-[103px] pc:w-[308px] pc:flex-row pc:text-base" />
        </div>
        <div className="justify-between text-center text-sm1 uppercase tab:flex tab:text-left pc:items-baseline">
          <div className="mb-7 w-full tab:w-1/2 pc:w-1/3">
            <a
              href={selectedLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="hoverFooter mb-4 w-full tab:mb-3"
            >
              {t("policy")}
            </a>
            <p className="w-full">&#169; ANVIL. {t("privacy")}</p>
          </div>
          <div className="hidden flex-col gap-2 font-exo pc:flex pc:w-1/3">
            <a
              href={`tel:${TEL.replace(/\s+/g, "")}`}
              className="hoverFooter text-center text-lg13 font-semibold text-title"
            >
              {TEL}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="hoverFooter text-center text-lg13 font-semibold text-title pc:lowercase"
            >
              {EMAIL}
            </a>
          </div>
          <div className="text-center tab:w-1/2 tab:text-right pc:w-1/3 pc:pl-7 pc:text-left">
            <a
              href="https://irynastoliarova.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hoverFooter mb-4 cursor-pointer tab:mb-3"
            >
              {t("design")}
            </a>
            <a
              href="https://www.instagram.com/trynkal_iryna_developer?igsh=M3I1eGdoYjM3YTB6&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hoverFooter cursor-pointer"
            >
              {t("development")}
            </a>
          </div>
        </div>
      </div>
      <UpToTopStatic className="absolute bottom-[109px] left-1/2 h-11 w-11 -translate-x-1/2 tab:bottom-[160px] tab:left-auto tab:right-5 tab:translate-x-0 pc:bottom-10 pc:right-[60px] pc:h-12 pc:w-12" />
    </footer>
  );
};
