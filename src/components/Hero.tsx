import { useTranslations } from "next-intl";

import { BgRectangle } from "./shared/Icons/BgRectangle";
import { BgScene } from "./shared/Icons/BgScene";
import { IconText } from "./shared/Icons/IconText";
import { ListStyleTypeFourSquare } from "./shared/ListStyleTypeFourSquare";
import { ConsultationModal } from "./shared/Modal/СonsultationModal";

export const Hero = () => {
  const t = useTranslations("HomePage");
  const descriptionList = [
    t("descriptionItem1"),
    t("descriptionItem2"),
    t("descriptionItem3"),
  ];
  const list = [
    t("lableItem1"),
    t("lableItem2"),
    t("lableItem3"),
    t("lableItem4"),
  ];

  return (
    <section
      id="hero"
      className="relative bg-blackCustom pb-[88px] pt-8 clip-path-down-cut-mobile tab:pb-[162px] tab:pt-[56px] tab:clip-path-down-cut-tab pc:pb-[110px] pc:pt-[60px]"
    >
      <div className="absolute inset-0 z-[-4] hidden overflow-hidden tab:block">
        <div
          className="h-full w-full rotate-180 bg-no-repeat pc:mb-[70px]"
          style={{
            backgroundImage: "url('/bg/web-radial.svg')",
            backgroundSize: "auto 100%",
            backgroundPosition: "bottom center",
          }}
        />
      </div>
      <div className="absolute inset-0 z-[-5] overflow-hidden">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "url('/bg/noise.svg')",
            backgroundPosition: "top center",
          }}
        />
      </div>
      <div className="mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
        <div className="relative tab:flex tab:justify-between">
          <h1 className="mb-4 min-h-[112px] max-w-[400px] font-exo text-3xl font-semibold uppercase text-title tab:mb-0 tab:min-h-[144px] tab:max-w-[500px] tab:text-4xl pc:min-h-[192px] pc:max-w-[600px] pc:text-5xl">
            {t.rich("title", {
              br: () => <br />,
            })}
          </h1>
          <div className="absolute right-0 top-4 hidden min-h-[110px] min-w-[230px] tab:block">
            <BgRectangle className="h-full w-full" />
            <ul className="absolute left-0 top-0 z-[-1] flex h-full w-full flex-col gap-2 pl-[30px] pt-4 text-sm1 uppercase">
              {list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="absolute left-[-2px] top-[-2px] h-1 w-1 bg-accent" />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center pc:mt-12">
          <div
            id="hero-model-anchor"
            className="relative z-10 aspect-[288/170] w-full tab:aspect-[258/170] tab:w-[75%] tab:max-w-[550px] pc:aspect-[220/110] pc:max-w-[748px]"
          >
            <IconText className="absolute left-1/2 top-5 h-auto w-[80%] -translate-x-1/2 pc:top-[-60px]" />
            <BgScene className="absolute bottom-[25%] left-1/2 h-auto w-full -translate-x-1/2 tab:bottom-[25%] pc:bottom-[23%]" />
          </div>
        </div>
        <div className="mx-auto flex max-w-[330px] flex-col justify-center gap-10 tab:max-w-full tab:flex-row tab:justify-between">
          <ul className="flex flex-col gap-3 font-exo text-title tab:w-[288px] pc:mt-6 pc:w-[400px]">
            {descriptionList.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-base13 font-medium uppercase pc:text-lg13"
              >
                <div>
                  <ListStyleTypeFourSquare index={4} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <div className="mx-auto w-[288px] tab:ml-auto tab:mr-0 pc:mt-[-19px]">
            <p className="mb-5 hidden text-base12 tab:block tab:min-w-[57px]">
              {t("text")}
            </p>
            <ConsultationModal />
          </div>
        </div>
      </div>
    </section>
  );
};
