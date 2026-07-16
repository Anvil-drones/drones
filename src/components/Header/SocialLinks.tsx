"use client";
import { useLocale } from "next-intl";
import { useState } from "react";

import { telegram, whatsapp } from "../assets/contacts";
import ScrambleText from "../shared/ScrambleText";

export const SocialLinks = ({ className }: { className?: string }) => {
  const locale = useLocale();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialList = [
    {
      name: "telegram",
      href: telegram,
    },
    {
      name: "whatsapp",
      href: whatsapp,
    },
  ];
  return (
    <ul className={`${className} flex justify-center gap-4 tab:gap-6 pc:gap-8`}>
      {socialList.map((content, idx) => (
        <li
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          key={content.name}
          className="uppercase font-bold text-title"
        >
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <ScrambleText
              text={content.name}
              locale={locale}
              animate={hoveredIndex === idx}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
