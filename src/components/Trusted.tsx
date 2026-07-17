import Image from "next/image";
import { useTranslations } from "next-intl";

import { trustedList } from "./assets/dataLists";

export const Trusted = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="relative overflow-hidden pt-10 tab:mt-7 tab:pb-10 tab:pt-[60px] pc:mt-[60px] pc:pb-[60px]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden tab:block">
        <Image
          src="/bg/gradient.png"
          alt=""
          width={1440}
          height={706}
          priority
          className="absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2"
        />

        <Image
          src="/bg/soldier.png"
          alt=""
          width={1440}
          height={706}
          priority
          className="absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2"
        />
      </div>

      <div className="relative z-[2] mx-auto max-w-[540px] px-4 tab:max-w-full tab:px-5 pc:max-w-[1440px] pc:px-[60px]">
        <div className="mb-10 tab:mb-20 tab:flex tab:justify-between tab:gap-4 pc:mb-[185px]">
          <h2 className="mb-4 max-w-[488px] font-exo text-3xl font-semibold uppercase text-title tab:mb-0 tab:w-[50%] tab:text-4xl pc:text-5xl">
            {t("trustedTitle")}
          </h2>
          <p className="max-w-[466px] text-lg leading-[120%] tab:w-[45%]">
            {t("trustedDescription")}
          </p>
        </div>
        <ul className="mx-auto grid grid-cols-2 gap-1 tab:max-w-[1072px] tab:grid-cols-4 tab:gap-2 pc:max-w-[1444px] pc:gap-3">
          {trustedList.map((item, index) => (
            <li
              key={index}
              className="flex max-w-[352px] items-center justify-center bg-black23 p-2.5"
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
