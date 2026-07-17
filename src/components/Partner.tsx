import Image from "next/image";
import { useTranslations } from "next-intl";

import { Icon1 } from "./shared/Icons/Icon1";
import { Icon2 } from "./shared/Icons/Icon2";
import { Icon3 } from "./shared/Icons/Icon3";
import { Icon4 } from "./shared/Icons/Icon4";
import { IconArrows } from "./shared/Icons/IconArrows";
import { ConsultationModal } from "./shared/Modal/СonsultationModal";

export const Partner = () => {
  const t = useTranslations("HomePage");
  const bestList = [
    {
      title: t("weTheBestItemTitle1"),
      text: t("weTheBestItemDescription1"),
      icon: (
        <Icon1 className="h-9 w-9 tab:h-10 tab:w-10 pc:h-[56px] pc:w-[56px]" />
      ),
    },
    {
      title: t("weTheBestItemTitle2"),
      text: t("weTheBestItemDescription2"),
      icon: (
        <Icon2 className="h-9 w-9 tab:h-10 tab:w-10 pc:h-[56px] pc:w-[56px]" />
      ),
    },
    {
      title: t("weTheBestItemTitle3"),
      text: t("weTheBestItemDescription3"),
      icon: (
        <Icon3 className="h-9 w-9 tab:h-10 tab:w-10 pc:h-[56px] pc:w-[56px]" />
      ),
    },
    {
      title: t("weTheBestItemTitle4"),
      text: t("weTheBestItemDescription4"),
      icon: (
        <Icon4 className="h-9 w-9 tab:h-10 tab:w-10 pc:h-[56px] pc:w-[56px]" />
      ),
    },
  ];

  return (
    <section
      id="partner"
      className="relative z-[2] mt-[-46px] bg-blackCustom pb-[60px] pt-8 clip-path-hex-notch tab:mt-[-73px] tab:pb-[56px] tab:pt-[110px] tab:clip-path-hex-notch-tab pc:pb-[63px] pc:pt-[90px]"
    >
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
        <div className="tab:mb-[56px] tab:flex tab:justify-between">
          <h1 className="mb-[46px] mt-[54px] max-w-[315px] font-exo text-3xl font-semibold text-title tab:mb-0 tab:mt-0 pc:max-w-[418px] pc:text-4xl">
            {t("weTheBestTitle")}
          </h1>
          <div className="relative mb-[38px] ml-auto mr-0 w-[194px] text-base12 tab:mb-0 tab:w-[194px] pc:text-lg12">
            <p className="">{t("weTheBestQuote")}</p>
            <Image
              src="/bg/target.svg"
              alt="background image svg - target"
              width={252}
              height={253}
              className="absolute left-1/2 top-1/2 z-[-1] h-auto w-[191px] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <ul className="mb-[56px] tab:grid tab:grid-cols-2 pc:mb-[72px]">
          {bestList.map((item, index) => (
            <li
              key={index}
              className="mt-4 border-b border-black30 last:border-b-0 tab:px-4 tab:last:border-b tab:odd:border-r"
            >
              <div className="mb-6 h-9 w-9 tab:mb-4 tab:h-10 tab:w-10 pc:mb-6 pc:h-[56px] pc:w-[56px]">
                {item.icon}
              </div>
              <h4 className="mb-4 font-exo font-semibold uppercase text-title pc:text-lg">
                {item.title}
              </h4>
              <p className="pb-4 text-base12 pc:w-[465px] pc:pb-6">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <ConsultationModal />
        </div>

        <IconArrows className="absolute bottom-5 left-5 hidden tab:block pc:left-[60px]" />
        <IconArrows className="absolute bottom-5 right-5 hidden rotate-180 tab:block pc:right-[60px]" />
      </div>
    </section>
  );
};
