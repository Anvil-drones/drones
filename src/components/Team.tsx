import { useTranslations } from "next-intl";

import { DecorGrid } from "./shared/DecorGrid";

export const Team = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      id="team"
      className="relative pb-[122px] pt-[65px] font-exo uppercase text-title tab:pb-[159px] tab:pt-[79px] pc:pb-[132px] pc:pt-[60px]"
    >
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundImage: "url('/images/imageTeam.jpg')",
            backgroundSize: "auto 100%",
            backgroundPosition: "top center",
          }}
        />
        <div className="absolute inset-0 bg-blackCustom opacity-[0.35]" />
        <div className="absolute inset-0 z-[-3] bg-black" />
      </div>
      <div className="mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
        <div className="mb-[161px] flex justify-center gap-2 text-sm13 tab:mb-[298px] tab:gap-4 tab:text-base13 pc:gap-6 pc:text-lg13">
          <p className="w-[47%] text-right font-semibold">
            {t("ourTeamTitle")}
          </p>
          <div className="w-[47%] font-medium">
            <p className="tab:w-[250px] pc:w-[315px]">
              {t("ourTeamTitleContinue")}
            </p>
          </div>
        </div>
        <div className="tab:flex tab:items-end tab:justify-center tab:gap-4 pc:gap-6">
          <div className="tab:w-1/2">
            <h2 className="mb-4 ml-auto mr-0 w-[288px] text-right text-3xl font-semibold tab:mb-0 tab:w-[355px] tab:text-4xl pc:w-[643px] pc:text-5xl">
              {t("ourTeamDescription")}
            </h2>
          </div>
          <div className="tab:w-1/2">
            <p className="ml-auto mr-0 w-[146px] text-right text-sm13 font-medium tab:mx-0 tab:mt-auto tab:w-[170px] tab:text-left tab:text-base13 pc:w-[200px] pc:text-lg13">
              {t("slogan")}
            </p>
          </div>
        </div>
      </div>
      <DecorGrid />
      <div className="absolute left-[calc(50%-152px)] top-[79px] hidden h-[65px] w-6 border border-r-0 border-accent tab:block pc:left-[calc(50%-176px)] pc:top-[58px]"></div>
      <div className="absolute right-[calc(50%-266px)] top-[79px] hidden h-[65px] w-6 border border-l-0 border-accent tab:block pc:right-[calc(50%-336px)] pc:top-[58px]"></div>
    </section>
  );
};
