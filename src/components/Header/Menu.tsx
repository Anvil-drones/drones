"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { CatalogLinkButton } from "../shared/CatalogLinkButton";
import ScrambleText from "../shared/ScrambleText";

export const Menu = ({
  className,
  onClickAction,
  footer,
}: {
  className?: string;
  onClickAction?: () => void;
  footer?: boolean;
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
  const menuListFooter = [
    { type: "button", name: t("about"), path: "/" },
    { type: "button", name: t("services"), path: "#services" },
    { type: "button", name: t("vacancy"), path: "#vacancy" },
    { type: "button", name: t("catalog"), path: "/catalog" },
  ];

  const menu = footer ? menuListFooter : menuList;
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
    if (id === "/catalog") {
      router.push("catalog");
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
    <ul className={`${className} `}>
      {menu.map((content, idx) => {
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
                  "px-4 py-2 uppercase text-title tab:px-3 tab:text-sm12 pc:px-4 pc:text-base"
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
