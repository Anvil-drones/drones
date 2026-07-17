"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import LanguageSwitcher from "../LanguageSwitcher";
import { CatalogLinkButton } from "../shared/CatalogLinkButton";
import { IconLogo } from "../shared/Icons/IconLogo";
import Navbar from "./Navbar";

export const Header = () => {
  const t = useTranslations("Menu");
  const locale = useLocale();
  return (
    <>
      <header className="relative">
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: "url('/bg/noise.svg')",
              backgroundPosition: "top center",
            }}
          />
        </div>
        <div className="mx-auto flex h-[64px] max-w-[540px] items-center justify-between px-4 tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
          <Link href="/" className="flex items-center">
            <IconLogo className="relative z-10 w-[72px] tab:w-[92px]" />
          </Link>
          <div className="mr-7 mt-1 tab:hidden">
            <LanguageSwitcher />
          </div>
          <nav className="flex items-center justify-end tab:gap-5 pc:gap-8">
            <Navbar />
            <div className="mr-3 hidden tab:mt-1 tab:flex pc:mr-2">
              <LanguageSwitcher />
            </div>
            <CatalogLinkButton
              text={t("catalog")}
              locale={locale}
              link="/catalog"
              className="hidden tab:flex tab:max-w-[150px] pc:max-w-[225px]"
            />
          </nav>
        </div>
      </header>

      <div
        className="relative z-10 h-px w-full bg-title20 tab:mx-auto tab:w-[calc(100%-40px)] pc:w-[calc(100%-120px)]"
        aria-hidden="true"
      ></div>
    </>
  );
};
