import { Link } from "@/i18n/navigation";

import ScrambleText from "./ScrambleText";

export const ContactLinkButton = ({
  text,
  locale,
  link,
  animate,
  onClick,
}: {
  text: string;
  locale: string;
  link: string;
  animate: boolean;
  onClick?: () => void;
}) => {
  return (
    <div className="relative w-[288px] h-12 tab:h-[56px] group bg-blackCustom">
      <Link
        href={link}
        onClick={onClick}
        className="flex items-center justify-center cursor-pointer group-hover:text-hoverAccent group-hover:bg-radial-green-100  text-title bg-title20 border border-title20  group-hover:border-accent/20 w-[288px] h-12 tab:h-[56px] uppercase  font-bold text-base transition-all duration-300 ease-in-out "
      >
        <ScrambleText text={text} locale={locale} animate={animate} />{" "}
      </Link>
      <div className="w-3 h-3 border-t-[2px] border-l-[2px] border-title group-hover:border-accent transition-all duration-300 ease-in-out absolute top-0 left-0"></div>
      <div className="w-3 h-3 border-t-[2px] border-r-[2px] border-title group-hover:border-accent transition-all duration-300 ease-in-out absolute top-0 right-0"></div>
      <div className="w-3 h-3 border-b-[2px] border-r-[2px] border-title group-hover:border-accent transition-all duration-300 ease-in-out absolute bottom-0 right-0"></div>
      <div className="w-3 h-3 border-b-[2px] border-l-[2px] border-title group-hover:border-accent transition-all duration-300 ease-in-out absolute bottom-0 left-0"></div>
    </div>
  );
};
