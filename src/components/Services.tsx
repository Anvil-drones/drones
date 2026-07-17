import { useTranslations } from "next-intl";

import { Accordion } from "./Accordion/Accordion";
import { getServicesList } from "./assets/dataLists";
import { Union } from "./shared/Icons/Union";
import { Trusted } from "./Trusted";

export const Services = () => {
  const t = useTranslations("HomePage");
  const servicesList = getServicesList(t);

  return (
    <section
      id="services"
      className="relative mt-[-30px] pb-[90px] clip-path-down-cut-mobile-service tab:mt-[-50px] tab:pb-[50px] tab:clip-path-down-cut-tab-service"
    >
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>{" "}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/bg/gradient.png')",
            backgroundPosition: "bottom center",
          }}
        />
      </div>
      <Union className="absolute left-1/2 top-[16px] z-[2] h-auto w-[186px] -translate-x-1/2 tab:top-[26.4px] tab:w-[341px]" />
      <h3 className="absolute left-1/2 top-[21px] z-[3] -translate-x-1/2 uppercase text-accent tab:top-[43px]">
        {t("services")}
      </h3>
      <div className="relative mx-auto max-w-[540px] px-4 pb-[60px] pt-[78px] tab:max-w-full tab:px-5 tab:pt-[129px] pc:max-w-[1440px] pc:px-[60px] pc:pt-[133px]">
        <h2 className="mb-8 w-[250px] font-exo text-3xl font-semibold uppercase text-title tab:text-4xl pc:text-5xl">
          {t("specializationTitle")}
        </h2>
        <ul className="pc:ml-[375px]">
          {servicesList.map((item, index) => (
            <li
              key={index}
              className="border-t border-black30 pb-6 pt-5 last:border-b pc:pt-6"
            >
              <Accordion item={item} index={index} />
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 left-[60px] hidden h-9 w-9 border-b border-l pc:block" />
        <div className="absolute right-[60px] top-[133px] hidden h-9 w-9 border-r border-t pc:block" />
      </div>
      <Trusted />
    </section>
  );
};
