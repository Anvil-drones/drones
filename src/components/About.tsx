import Image from "next/image";
import { useTranslations } from "next-intl";

import { BgSceneAbout } from "./shared/Icons/BgSceneAbout";
import { Union } from "./shared/Icons/Union";
import { ValueDiv } from "./shared/ValueDiv";

export const About = () => {
  const t = useTranslations("HomePage");
  const valuesList = [
    { title: t("valuesTitle1"), description: t("valuesItem1") },
    { title: t("valuesTitle2"), description: t("valuesItem2") },
    { title: t("valuesTitle3"), description: t("valuesItem3") },
    { title: t("valuesTitle4"), description: t("valuesItem4") },
  ];

  return (
    <section id="about" className="relative mt-[-30px] tab:mt-[-50px]">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div
          className="h-full w-full bg-no-repeat"
          style={{
            backgroundImage: "url('/bg/web-radial.svg')",
            backgroundSize: "auto 85%",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-2] overflow-hidden">
        <Image
          src="/bg/bgAbout.jpg"
          alt="decorative background"
          fill
          className="object-cover blur-[60px] filter"
          priority
        />
      </div>
      <Union className="absolute left-1/2 top-[15px] z-[2] h-auto w-[186px] -translate-x-1/2 tab:top-[25px] tab:w-[341px]" />
      <h3 className="absolute left-1/2 top-[21px] z-[3] -translate-x-1/2 uppercase text-accent tab:top-[41px] tab:text-base">
        {t("about")}
      </h3>
      <div className="mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-[84px] pc:max-w-[1440px] pc:px-[60px]">
        <div className="flex flex-col pt-[78px] tab:pt-[129px] pc:pt-[113px]">
          <div className="">
            <h1
              id="tab-about"
              className="mx-auto mb-4 min-h-[72px] font-exo text-2xl font-semibold text-title tab:mb-6 tab:w-[480px] tab:text-center tab:text-3xl pc:mb-4 pc:w-[550px] pc:text-4xl"
            >
              {t("aboutTitle")}
            </h1>
            <p className="mx-auto min-h-[56px] w-[95%] text-base12 tab:w-[474px] tab:text-center pc:w-[520px] pc:text-lg12">
              {t("aboutDescription")}
            </p>
          </div>

          <div className="mt-16 flex flex-1 items-center justify-center pc:mt-36">
            <div className="relative aspect-[288/170] w-full tab:aspect-[258/170] tab:max-w-[550px] pc:aspect-[220/110] pc:max-w-[748px]">
              <BgSceneAbout className="absolute bottom-[45px] left-1/2 h-auto w-full -translate-x-1/2 tab:bottom-[40px] pc:bottom-[40px]" />
            </div>
          </div>
        </div>

        <div className="mt-5 pb-[106px] tab:pb-[129px] pc:pb-[140px]">
          <h2 className="mb-9 text-center font-exo text-3xl font-semibold text-title pc:text-4xl">
            {t("ourValuesTitle")}
          </h2>
          <ul className="flex flex-col gap-4 tab:grid tab:grid-cols-2 tab:justify-items-center tab:gap-5 pc:flex pc:flex-row pc:justify-center pc:gap-6">
            {valuesList.map((item, index) => (
              <li
                key={index}
                className="mx-auto tab:odd:ml-auto tab:odd:mr-0 tab:even:ml-0 tab:even:mr-auto pc:odd:ml-0 pc:even:mr-0"
              >
                <ValueDiv
                  title={item.title}
                  description={item.description}
                  index={index + 1}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
