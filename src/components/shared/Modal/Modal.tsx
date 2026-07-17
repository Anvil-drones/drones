"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

import { IconClose } from "@/components/shared/Icons/IconClose";
import { IconEmpty } from "@/components/shared/Icons/IconEmpty";
import { IconLogo } from "@/components/shared/Icons/IconLogo";

import { Portal } from "./Portal";
// type AnimationPhase = "enter" | "exit";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <Portal id="modal">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={isOpen ? "modal-enter" : "modal-exit"}
            className="fixed inset-0 z-[55] flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Ліва шторка */}
            <motion.div
              className="absolute left-0 top-0 h-full w-1/2 origin-left bg-blackCustom"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 },
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              onClick={onClose}
            />

            {/* Права шторка */}
            <motion.div
              className="absolute right-0 top-0 h-full w-1/2 origin-right bg-blackCustom"
              variants={{
                hidden: { scaleX: 0 },
                visible: { scaleX: 1 },
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              onClick={onClose}
            />

            {/* Модальне вікно */}
            <motion.div
              className="relative z-10 h-screen w-screen overflow-y-auto bg-transparent"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.95,
                  transition: {
                    delay: 0, // без затримки на зникнення
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 1.5, // затримка лише на появу
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-11 flex h-11 w-11 items-center justify-center text-title hover:bg-radial-green-50 hover:text-hoverAccent tab:right-12 tab:top-[46px] tab:h-12 tab:w-12 pc:right-[56px] pc:top-[60px]"
                aria-label="Close modal"
              >
                <IconEmpty className="h-11 w-11 tab:h-12 tab:w-12" />
                <IconClose className="absolute" />
              </button>
              <IconLogo className="absolute left-4 top-12 w-[72px] tab:left-12 tab:top-[56px] tab:w-[92px] pc:left-[60px] pc:top-[70px]" />
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
