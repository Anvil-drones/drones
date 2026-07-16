"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { CatalogLinkButton } from "../shared/CatalogLinkButton";
import ScrambleText from "../shared/ScrambleText";

export const Menu = ({
  className,
  onClickAction,
}: {
  className?: string;
  onClickAction?: () => void;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = useTranslations("Menu");
  const locale = useLocale();

  const menuList = [
    { type: "button", name: t("about"), path: "/" },
    { type: "button", name: t("services"), path: "#services" },
    { type: "button", name: t("gallery"), path: "#gallery" },
    { type: "button", name: t("vacancy"), path: "#vacancy" },
    { type: "link", name: t("catalog"), path: "/catalog" },
  ];
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (id: string) => {
    if (onClickAction) onClickAction();
    if (pathname === "/" && id === "/") {
      return;
    }

    if (pathname !== "/") {
      router.push(`/${id}`);
      return;
    }

    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ul className={`${className}  `}>
      {menuList.map((content, idx) => {
        return (
          <li
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex justify-center items-center${content.type === "link" ? "mb-2" : " "}`}
          >
            {content.type === "button" ? (
              <button
                onClick={() => handleLinkClick(content.path)}
                className={
                  " uppercase text-title tab:text-sm12 py-2 px-4 tab:px-3 pc:px-4 pc:text-base"
                }
              >
                <ScrambleText
                  text={content.name}
                  locale={locale}
                  animate={hoveredIndex === idx}
                />
              </button>
            ) : (
              <CatalogLinkButton
                onClickAction={onClickAction}
                text={content.name}
                locale={locale}
                link={content.path}
                className="tab:hidden"
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};
