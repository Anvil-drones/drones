import { useTranslations } from "next-intl";

import { Union } from "../shared/Icons/Union";
import { OrderSection } from "./OrderSection";

export const CatalogOrder = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      id="stages"
      className="mt-[-30px] tab:mt-[-50px] relative pb-[105px] tab:pb-[131px] pc:pb-[179px]"
    >
      <div className="absolute inset-0 z-[-1] hidden tab:flex overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat  "
          style={{
            backgroundImage: "url('/bg/web-cub-catalog.svg')",
            backgroundSize: "auto",
            backgroundPosition: "top",
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <div
          className="w-full h-full bg-no-repeat bg-center filter blur-[80px] "
          style={{
            backgroundImage: "url('/bg/bgAbout.jpg')",
            backgroundSize: "cover",
          }}
        />
      </div>
      <Union className="absolute top-[15px] tab:top-[26.4px] left-1/2 -translate-x-1/2 w-[186px] tab:w-[341px] h-auto z-[2]" />
      <h3 className="hidden tab:block absolute top-[21px] tab:top-[43px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("orderFull")}
      </h3>
      <h3 className="tab:hidden absolute top-[21px] tab:top-[43px] left-1/2 -translate-x-1/2 z-[3] uppercase text-accent">
        {t("order")}
      </h3>
      <div className="mx-auto pt-[68px] tab:pt-[136px] px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px]">
        <OrderSection />
      </div>
    </section>
  );
};
