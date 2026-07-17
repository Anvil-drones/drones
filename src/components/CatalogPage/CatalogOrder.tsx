import { useTranslations } from "next-intl";

import { Union } from "../shared/Icons/Union";
import { OrderSection } from "./OrderSection";

export const CatalogOrder = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      id="stages"
      className="relative mt-[-30px] pb-[105px] tab:mt-[-50px] tab:pb-[131px] pc:pb-[179px]"
    >
      <div className="absolute inset-0 z-[-1] hidden overflow-hidden tab:flex">
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundImage: "url('/bg/web-cub-catalog.svg')",
            backgroundSize: "auto",
            backgroundPosition: "top",
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
      <h3 className="absolute left-1/2 top-[21px] z-[3] hidden -translate-x-1/2 uppercase text-accent tab:top-[43px] tab:block">
        {t("orderFull")}
      </h3>
      <h3 className="absolute left-1/2 top-[21px] z-[3] -translate-x-1/2 uppercase text-accent tab:top-[43px] tab:hidden">
        {t("order")}
      </h3>
      <div className="mx-auto max-w-[540px] px-4 pt-[68px] tab:max-w-full tab:px-5 tab:pt-[136px] pc:max-w-[1440px] pc:px-[60px]">
        <OrderSection />
      </div>
    </section>
  );
};
