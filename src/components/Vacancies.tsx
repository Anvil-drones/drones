import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { selectedLink } from "@/utils/selectedLink";

import { IconArrowsDown } from "./shared/Icons/IconArrowsDown";
import { Union } from "./shared/Icons/Union";
import LoopFadeMotionText from "./shared/LoopFadeMotionText";
import { VacancyModalWrapper } from "./VacancyModalWrapper";

export const Vacancies = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const vacanciesList = [
    t("vacancyItem1"),
    t("vacancyItem2"),
    t("vacancyItem3"),
    t("vacancyItem4"),
    t("vacancyItem5"),
  ];
  return (
    <section
      id="vacancy"
      className="relative mx-auto -mt-8 overflow-hidden pb-[120px] tab:mt-[-50px]"
    >
      <Union className="absolute left-1/2 top-[18.5px] z-[2] h-auto w-[186px] -translate-x-1/2 tab:top-[26px] tab:w-[341px]" />
      <h3 className="absolute left-1/2 top-[24px] z-[3] -translate-x-1/2 uppercase text-accent tab:top-[42px]">
        {t("vacancies")}
      </h3>
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="relative z-[-1] mb-4 flex justify-center overflow-hidden tab:hidden">
        <Image
          src="/images/imageJob.png"
          alt={t("vacanciesListTitle")}
          width={600}
          height={600}
          className="aspect-square h-auto max-h-[540px] min-h-[288px] w-[100vw] min-w-[288px] max-w-[540px] bg-[#141414] opacity-[0.45] pc:max-h-[600px] pc:max-w-[600px]"
        />
        <div className="absolute left-1/2 top-1/2 h-auto w-[70%] min-w-[288px] max-w-[330px] -translate-x-1/2 -translate-y-1/2">
          <h2 className="indent-[40px] font-exo text-2xl font-semibold uppercase text-title">
            {t("vacancyTitle")}
          </h2>
          <div className="absolute left-0 top-0 block h-[18px] w-[11px] border border-r-0 border-accent" />
          <div className="absolute bottom-0 right-0 block h-[18px] w-[11px] border border-l-0 border-accent" />
        </div>
      </div>
      <div className="relative mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-5 tab:pt-[129px] pc:max-w-[1440px] pc:px-[60px]">
        <div className="relative tab:flex tab:gap-[50px] pc:mb-[60px] pc:gap-[90px]">
          <div className="hidden tab:block tab:h-auto tab:w-[45%] tab:min-w-[331px] tab:max-w-[600px] pc:w-[600px]">
            <Image
              src="/images/imageJob.png"
              alt={t("vacanciesListTitle")}
              width={600}
              height={600}
              className="aspect-square h-auto max-h-[600px] min-h-[288px] w-[100vw] min-w-[288px] max-w-[600px] bg-[#141414] opacity-[0.45] tab:w-[100%] pc:w-[600px]"
            />
          </div>
          <div className="relative mb-[60px] tab:mb-0 tab:w-[48%]">
            <div className="relative hidden tab:mb-3 tab:block pc:mb-5">
              <h2 className="indent-[90px] font-exo text-2xl font-semibold uppercase text-title tab:indent-[50px] tab:text-xl pc:text-4xl12">
                {t("vacancyTitle")}
              </h2>
              <div className="absolute left-0 top-[6px] block border border-r-0 border-accent tab:h-[14px] tab:w-[6px] pc:top-[10px] pc:h-[25px] pc:w-[10px]" />
              <div className="absolute bottom-[6px] right-0 block border border-l-0 border-accent tab:h-[14px] tab:w-[6px] pc:h-[25px] pc:w-[10px]" />
            </div>
            <p className="mb-6 mr-4 text-base13 tab:mr-0 pc:mb-[116px] pc:text-lg13">
              {t("vacancyDescription")}
            </p>
            <div className="tab:hidden pc:flex">
              <h2 className="mb-[26px] font-exo font-semibold uppercase text-title pc:w-1/2 pc:text-lg">
                {t("vacanciesListTitle")}
              </h2>
              <ul className="flex flex-col gap-4 pc:w-1/2">
                {vacanciesList.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div>
                      <div className="h-1 w-1 bg-accent" />
                    </div>
                    <p className="uppercase pc:text-lg11">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 top-0 flex h-full w-[15px] flex-col justify-between text-title20 tab:left-[-33px] pc:left-[-52px]">
              <IconArrowsDown />
              <IconArrowsDown />
              <IconArrowsDown />
            </div>
          </div>
          <div className="absolute border-l border-t border-corner tab:left-0 tab:top-0 tab:h-5 tab:w-5 pc:h-9 pc:w-9" />
          <div className="absolute border-b border-r border-corner tab:bottom-0 tab:right-0 tab:h-5 tab:w-5 pc:bottom-0 pc:right-0 pc:h-9 pc:w-9" />
        </div>
        <div className="hidden tab:mb-[56px] tab:mt-8 tab:flex tab:gap-[50px] pc:hidden">
          <h2 className="mb-[26px] text-right font-exo font-semibold uppercase text-title tab:w-[45%] tab:min-w-[331px]">
            {t("vacanciesListTitle")}
          </h2>
          <ul className="flex flex-col gap-4 tab:w-[48%]">
            {vacanciesList.map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div>
                  <div className="h-1 w-1 bg-accent" />
                </div>
                <p className="uppercase">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab:flex tab:gap-5 pc:justify-between">
          <div className="tab:w-[45%] tab:min-w-[331px] pc:w-[600px]">
            <div className="relative mx-auto h-auto w-[288px] tab:mx-0 tab:w-[331px] pc:w-[580px]">
              <h2 className="indent-[40px] font-exo text-[23px] font-semibold uppercase text-title tab:w-[95%] tab:indent-[100px] pc:indent-[170px] pc:text-4xl12">
                <LoopFadeMotionText text={t("formTitle")} />
              </h2>
              <div className="absolute left-0 top-0 block h-[18px] w-[11px] border border-r-0 border-accent tab:top-[6px] tab:h-[14px] tab:w-[6px] pc:top-[10px] pc:h-[25px] pc:w-[10px]" />
              <div className="absolute bottom-0 right-0 block h-[18px] w-[11px] border border-l-0 border-accent tab:bottom-[6px] tab:h-[14px] tab:w-[6px] pc:h-[25px] pc:w-[10px]" />
            </div>
            <div className="hidden gap-2 text-sm13 tab:mt-7 tab:flex tab:w-[256px] pc:mt-[50px] pc:w-[375px] pc:text-lg12">
              <div>
                <span className="mt-1 block h-2 w-2 bg-accent"></span>
              </div>
              <p className="">
                {t.rich("policyAccept", {
                  policy: chunk => (
                    <a
                      href={selectedLink(locale)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline hover:text-[15px] hover:font-bold pc:hover:text-[19px]"
                    >
                      {chunk}
                    </a>
                  ),
                })}
              </p>
            </div>
          </div>
          <div className="tab:w-[51%]">
            <VacancyModalWrapper />
          </div>
        </div>
        <div className="absolute border-b border-l border-corner tab:bottom-0 tab:left-5 tab:h-5 tab:w-5 pc:bottom-0 pc:left-[60px] pc:h-9 pc:w-9" />
        <div className="absolute border-b border-r border-corner tab:bottom-0 tab:right-5 tab:h-5 tab:w-5 pc:bottom-0 pc:right-[60px] pc:h-9 pc:w-9" />
      </div>
    </section>
  );
};
