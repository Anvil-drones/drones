"use client";

import { useEffect, useRef, useState } from "react";

import { lerp } from "@/utils/lerp";

import ModelViewer from "./ModelViewer";

export default function ModelScrollerTab() {
  const [translateY, setTranslateY] = useState(0);
  const targetY = useRef(0);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const anchorStart = document.getElementById("hero-model-anchor");
    const anchorEnd = document.getElementById("tab-about");

    if (!anchorStart || !anchorEnd) return;

    const update = () => {
      const startRect = anchorStart.getBoundingClientRect();
      const endRect = anchorEnd.getBoundingClientRect();

      if (startRect.top > 0) {
        targetY.current = 0;
      } else if (endRect.top <= 0) {
        targetY.current = Math.floor(endRect.top - 20);
      } else {
        targetY.current = 0;
      }

      setTranslateY(prevY => {
        const smoothed = lerp(prevY, targetY.current, 0.1);
        return Math.abs(smoothed - targetY.current) < 0.5
          ? targetY.current
          : smoothed;
      });

      animationFrame.current = requestAnimationFrame(update);
    };

    animationFrame.current = requestAnimationFrame(update);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-[208px] z-[5] w-full tab:top-[220px] pc:top-[250px] pc:hidden"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="mx-auto aspect-[288/170] w-full max-w-[520px] tab:aspect-[258/170] tab:max-w-[700px] pc:max-w-[900px]">
        <ModelViewer />
      </div>
    </div>
  );
}
