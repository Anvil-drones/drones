"use client";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { Link, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHash(window.location.hash);
    }
  }, [pathName, searchParams]);

  return (
    <ul className="relative z-10 flex gap-1 pb-1 uppercase leading-3 tab:leading-[10px] pc:text-base pc:leading-3">
      {locales.map(curLocale => (
        <li
          key={curLocale}
          className="relative first:pr-[5px] first:after:absolute first:after:right-0 first:after:top-0 first:after:h-[16px] first:after:w-px first:after:bg-current first:after:content-['']"
        >
          <Link
            href={{
              hash: hash,
              search: searchParams.toString(),
              pathname: pathName,
            }}
            replace
            locale={curLocale}
            scroll={false}
            className={
              curLocale === locale
                ? "text-accent transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent"
                : "text-title transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent"
            }
          >
            {curLocale === "uk" ? "ua" : curLocale}
          </Link>
        </li>
      ))}
    </ul>
  );
}
