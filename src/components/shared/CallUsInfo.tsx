import { useTranslations } from "next-intl";

import { EMAIL, TEL } from "../assets/contacts";

export const CallUsInfo = ({ footer }: { footer?: boolean }) => {
  const t = useTranslations("Menu");
  return (
    <div className="flex flex-col items-center justify-center gap-[18px] tab:gap-8">
      <h3
        className={`${footer ? "text-title pc:ml-12" : "text-text"} text-sm1 pc:text-base uppercase`}
      >
        {t("callUs")}
      </h3>
      <div className="flex flex-col gap-1 font-exo pc:hidden">
        <a
          href={`tel:${TEL.replace(/\s+/g, "")}`}
          className="text-title text-lg13 font-semibold text-center hoverFooter"
        >
          {TEL}
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="text-title text-lg13 font-semibold text-center hoverFooter"
        >
          {EMAIL}
        </a>
      </div>
    </div>
  );
};
