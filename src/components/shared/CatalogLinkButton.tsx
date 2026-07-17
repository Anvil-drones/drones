"use client";

import { useState } from "react";

import { Link } from "@/i18n/navigation";

import ScrambleText from "./ScrambleText";

export const CatalogLinkButton = ({
  text,
  locale,
  link,
  onClickAction,
  className,
}: {
  text: string;
  locale: string;
  link: string;
  onClickAction?: () => void;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative h-12 w-full max-w-[288px] bg-blackCustom pc:h-[56px] ${className}`}
    >
      <Link
        href={link}
        onClick={onClickAction}
        className="flex h-full w-[288px] cursor-pointer items-center justify-center border border-title20 bg-title20 text-base font-bold uppercase text-title transition-all duration-300 ease-in-out group-hover:border-accent/20 group-hover:bg-radial-green-100 group-hover:text-hoverAccent"
      >
        <ScrambleText text={text} locale={locale} animate={hovered} />
      </Link>

      <div className="absolute left-0 top-0 h-3 w-3 border-l-[2px] border-t-[2px] border-title transition-all duration-300 group-hover:border-accent" />
      <div className="absolute right-0 top-0 h-3 w-3 border-r-[2px] border-t-[2px] border-title transition-all duration-300 group-hover:border-accent" />
      <div className="absolute bottom-0 right-0 h-3 w-3 border-b-[2px] border-r-[2px] border-title transition-all duration-300 group-hover:border-accent" />
      <div className="absolute bottom-0 left-0 h-3 w-3 border-b-[2px] border-l-[2px] border-title transition-all duration-300 group-hover:border-accent" />
    </div>
  );
};
