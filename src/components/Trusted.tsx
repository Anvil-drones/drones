import Image from "next/image";
import { useTranslations } from "next-intl";

import { trustedList } from "./assets/dataLists";

export const Trusted = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="relative overflow-hidden pt-10 tab:pt-[60px] tab:mt-7 pc:mt-[60px] tab:pb-10 pc:pb-[60px]">
      {/* Background */}
      <div className="hidden tab:block absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/bg/gradient.png"
          alt=""
          width={1440}
          height={706}
          priority
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none"
        />

        <Image
          src="/bg/soldier.png"
          alt=""
          width={1440}
          height={706}
          priority
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none"
        />
      </div>

      <div className=" relative z-[2]  px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <div className="mb-10 tab:mb-20 pc:mb-[185px] tab:flex tab:gap-4 tab:justify-between">
          <h2 className="font-exo tab:w-[50%] max-w-[488px] tab:mb-0 font-semibold text-3xl tab:text-4xl pc:text-5xl text-title uppercase mb-4">
            {t("trustedTitle")}
          </h2>
          <p className="text-lg tab:w-[45%] max-w-[466px] leading-[120%] ">
            {t("trustedDescription")}
          </p>
        </div>
        <ul className="grid grid-cols-2 tab:grid-cols-4 gap-1 tab:gap-2 pc:gap-3 tab:max-w-[1072px] mx-auto pc:max-w-[1444px]">
          {trustedList.map((item, index) => (
            <li
              key={index}
              className="p-2.5 flex max-w-[352px] justify-center items-center bg-black23"
            >
              <Image
                src={item}
                alt={`The emblem of the unit that trusts us ${index + 1}`}
                width={606}
                height={346}
                className="w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
