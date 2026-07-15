import { useTranslations } from "next-intl";

import { Accordion } from "./Accordion/Accordion";
import { getServicesList } from "./assets/dataLists";
import { Union } from "./Icons/Union";
import { Trusted } from "./Trusted";

export const Services = () => {
  const t = useTranslations("HomePage");
  const servicesList = getServicesList(t);

  return (
    <section
      id="services"
      className="mt-[-30px] tab:mt-[-50px] relative pb-[90px] tab:pb-[50px] clip-path-down-cut-mobile-service tab:clip-path-down-cut-tab-service"
    >
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="w-full h-full "
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <Union className="absolute top-[16px] tab:top-[26.4px] left-1/2 -translate-x-1/2 w-[186px] tab:w-[341px] h-auto z-[2]" />
      <h3 className="absolute top-[21px] tab:top-[43px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("services")}
      </h3>
      <div className=" relative pb-[60px] pt-[78px] tab:pt-[129px] pc:pt-[133px] px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <h2 className="font-exo font-semibold text-3xl tab:text-4xl pc:text-5xl text-title uppercase mb-8 w-[250px]">
          {t("specializationTitle")}
        </h2>
        <ul className="pc:ml-[375px]">
          {servicesList.map((item, index) => (
            <li
              key={index}
              className="border-t border-black30 last:border-b pt-5 pc:pt-6 pb-6"
            >
              <Accordion item={item} index={index} />
            </li>
          ))}
        </ul>
        <div className="hidden pc:block w-9 h-9 border-l border-b absolute bottom-0 left-[60px]" />
        <div className="hidden pc:block w-9 h-9 border-r border-t absolute top-[133px] right-[60px]" />
      </div>
      <Trusted />
    </section>
  );
};
