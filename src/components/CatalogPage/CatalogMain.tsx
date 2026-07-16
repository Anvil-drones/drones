import { useTranslations } from "next-intl";

export const CatalogMain = () => {
  const t = useTranslations("HomePage");
  return (
    <section
      className="pt-10 pb-[88px] relative bg-blackCustom clip-path-down-cut-mobile
    tab:pt-[56px] pc:pt-[60px] tab:pb-[162px] pc:pb-[110px] tab:clip-path-down-cut-tab"
    >
      <div className=" relative px-4 tab:px-5 pc:px-[60px] max-w-[540px] tab:max-w-full pc:max-w-[1440px] mx-auto">
        <h1 className="uppercase font-exo font-semibold text-3xl tab:text-4xl pc:text-5xl text-title mb-6 tab:mb-8 pc:mb-[62px]">
          {t.rich("catalogTitle")}
        </h1>
        <p className="text-lg text-gray-600"></p>
      </div>
    </section>
  );
};
