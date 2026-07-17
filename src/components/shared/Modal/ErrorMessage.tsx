import Image from "next/image";
import { useTranslations } from "next-intl";

export const ErrorMessage = () => {
  const t = useTranslations("HomePage");
  return (
    <div className="relative z-[-1] h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-[-2] h-screen w-screen">
        <Image
          src="/bg/circle1.png"
          alt="circle decor"
          width={2000}
          height={2000}
          className="absolute left-1/2 top-0 h-auto w-[180vw] max-w-none -translate-x-1/2"
          priority
        />
      </div>{" "}
      <div className="mx-auto mt-[40vh] w-[80%] min-w-[288px] max-w-[436px] text-center tab:mt-[40vh] pc:max-w-[485px]">
        <h2 className="mb-5 font-exo text-2xl13 font-semibold uppercase tab:text-4xl12">
          {t("errorTitle")}
        </h2>
        <p className="text-sm13 tab:text-base13 pc:text-lg13">
          {t("errorText")}
        </p>
      </div>
    </div>
  );
};
