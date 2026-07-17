import { useTranslations } from "next-intl";

import { AnimatedCard } from "./shared/AnimatedCard";
import { Union } from "./shared/Icons/Union";
import { ConsultationModal } from "./shared/Modal/СonsultationModal";
import { StagesCard } from "./shared/StagesCard";

export const Stages = () => {
  const t = useTranslations("HomePage");
  const stagesList = [
    { title: t("stagesItemTitle1"), description: t("stagesItemDescription1") },
    { title: t("stagesItemTitle2"), description: t("stagesItemDescription2") },
    { title: t("stagesItemTitle3"), description: t("stagesItemDescription3") },
  ];

  return (
    <section
      id="stages"
      className="relative mt-[-30px] pb-[105px] tab:mt-[-50px] tab:pb-[131px] pc:pb-[179px]"
    >
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundImage: "url('/bg/web-cub.svg')",
            backgroundSize: "auto 100%",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="h-full w-full bg-center bg-no-repeat blur-[80px] filter"
          style={{
            backgroundImage: "url('/bg/bgAbout.jpg')",
            backgroundSize: "cover",
          }}
        />
      </div>
      <Union className="absolute left-1/2 top-[15px] z-[2] h-auto w-[186px] -translate-x-1/2 tab:top-[26.4px] tab:w-[341px]" />
      <h3 className="absolute left-1/2 top-[21px] z-[3] -translate-x-1/2 uppercase text-accent tab:top-[43px]">
        {t("stages")}
      </h3>
      <div className="relative mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
        <div className="mx-auto mb-[53px] max-w-[498px] pt-[78px] text-center tab:mb-[56px] tab:pt-[129px] pc:pt-[133px]">
          <h1 className="mb-4 font-exo text-3xl font-semibold text-title tab:mb-6 pc:mb-4 pc:text-4xl">
            {t("stagesTitle")}
          </h1>
          <p className="w-[95%] text-base13 pc:text-lg12">
            {t("stagesDescription")}
          </p>
        </div>
        <ul className="mx-auto mb-[37px] flex max-w-[350px] flex-col justify-center gap-4 tab:mb-[56px] tab:max-w-full tab:flex-row tab:flex-wrap tab:gap-5 pc:mb-[60px] pc:gap-8">
          {stagesList.map((item, index) => (
            <AnimatedCard key={index}>
              <StagesCard
                title={item.title}
                description={item.description}
                index={index}
              />
            </AnimatedCard>
          ))}
        </ul>
        <div className="flex justify-center">
          <ConsultationModal />
        </div>
      </div>
    </section>
  );
};
