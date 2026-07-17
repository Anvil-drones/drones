"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter({ textDef }: { textDef: string }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < textDef.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + textDef[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, textDef]);

  return (
    <div className="relative inline-block whitespace-pre text-base13 font-medium uppercase tab:text-lg13 pc:text-2xl">
      {text}
      <AnimatePresence>
        <motion.span
          key={index}
          className="mb-[2px] ml-2 inline-block h-4 w-2 bg-title align-bottom tab:h-[18px] tab:w-[10px] pc:h-5"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </AnimatePresence>
    </div>
  );
}
