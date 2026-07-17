"use client";
import { useEffect, useState } from "react";

import { IconUp } from "./Icons/IconUp";

export const UpToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 800) {
        setIsVisible(true);
      } else if (scrolled <= 800) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button
        aria-label="scroll to top button"
        className={`${isVisible ? "block" : "hidden"} fixed bottom-[60px] right-[8px] z-20 h-[48px] w-[48px] rounded-full p-1 outline-none after:absolute after:left-0 after:top-0 after:z-[-10] after:h-[48px] after:w-[48px] after:rounded-full after:bg-purple-100 after:bg-opacity-40 after:blur-[2px] after:content-[''] tab:bottom-[164px] tab:right-[28px] tab:h-[64px] tab:w-[64px] tab:p-3 tab:after:h-[64px] tab:after:w-[64px] pc:right-[60px]`}
        onClick={scrollToTop}
      >
        <IconUp />
      </button>
    </>
  );
};
