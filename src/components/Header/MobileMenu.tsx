import { motion } from "framer-motion";
import Image from "next/image";

import { CallUsInfo } from "../shared/CallUsInfo";
import { Menu } from "./Menu";
import { SocialLinks } from "./SocialLinks";

export interface HeaderMenuProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: (_value: boolean) => void;
}

export const MobileMenu = ({
  isHeaderMenuOpened = false,
  setIsHeaderMenuOpened,
}: HeaderMenuProps) => {
  return (
    <motion.nav
      initial={{ height: 0 }}
      animate={{ height: isHeaderMenuOpened ? "100vh" : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute left-0 top-0 z-[7] w-[100vw] overflow-hidden bg-blackCustom px-4 tab:hidden pc:px-8"
    >
      <div className="relative flex h-full flex-col justify-between pb-[100px] pt-[65px]">
        <Image
          src="/bg/target.svg"
          alt="background image svg - target"
          width={252}
          height={253}
          className="absolute left-1/2 top-[69px] z-[-1] -translate-x-1/2"
        />
        <Menu
          onClickAction={() => setIsHeaderMenuOpened(false)}
          className="mt-[65px] flex flex-col items-center gap-4"
        />
        <div className="mt-auto flex flex-col gap-6">
          <CallUsInfo />
          <SocialLinks className="" />
        </div>
      </div>
    </motion.nav>
  );
};
