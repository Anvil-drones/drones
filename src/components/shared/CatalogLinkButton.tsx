"use client";

import { useState } from "react";

import { Link } from "@/i18n/navigation";

import ScrambleText from "./ScrambleText";

export const CatalogLinkButton = ({
  text,
  locale,
  link,
  onClick,
  className,
}: {
  text: string;
  locale: string;
  link: string;
  onClick?: () => void;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative max-w-[288px] w-full h-12 pc:h-[56px] group bg-blackCustom ${className}`}
    >
      <Link
        href={link}
        onClick={onClick}
        className="flex items-center justify-center cursor-pointer group-hover:text-hoverAccent group-hover:bg-radial-green-100 text-title bg-title20 border border-title20 group-hover:border-accent/20 w-[288px] h-full uppercase font-bold text-base transition-all duration-300 ease-in-out"
      >
        <ScrambleText text={text} locale={locale} animate={hovered} />
      </Link>

      <div className="w-3 h-3 border-t-[2px] border-l-[2px] border-title group-hover:border-accent transition-all duration-300 absolute top-0 left-0" />
      <div className="w-3 h-3 border-t-[2px] border-r-[2px] border-title group-hover:border-accent transition-all duration-300 absolute top-0 right-0" />
      <div className="w-3 h-3 border-b-[2px] border-r-[2px] border-title group-hover:border-accent transition-all duration-300 absolute bottom-0 right-0" />
      <div className="w-3 h-3 border-b-[2px] border-l-[2px] border-title group-hover:border-accent transition-all duration-300 absolute bottom-0 left-0" />
    </div>
  );
};
