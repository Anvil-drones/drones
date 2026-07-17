"use client";
import { IconEmpty } from "./Icons/IconEmpty";
import { IconUp } from "./Icons/IconUp";

export const UpToTopStatic = ({ className }: { className?: string }) => {
  return (
    <button
      aria-label="scroll to top button"
      className={`group ${className} bg-transparent text-text hover:bg-radial-green-100 hover:text-hoverAccent`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <IconEmpty className="h-11 w-11 pc:h-12 pc:w-12" />
      <IconUp className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </button>
  );
};
