import { useLocale } from "next-intl";

import { telegram, whatsapp } from "../assets/contacts";
import ScrambleText from "../shared/ScrambleText";

export const SocialLinks = ({ className }: { className?: string }) => {
  const locale = useLocale();

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
      {socialList.map(content => (
        <li key={content.name} className="uppercase font-bold text-title">
          <a
            href={content.href}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <ScrambleText text={content.name} locale={locale} />
          </a>
        </li>
      ))}
    </ul>
  );
};
