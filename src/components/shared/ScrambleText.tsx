"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  locale: string;
  animate: boolean;
};

export default function ScrambleText({ text, locale, animate }: Props) {
  const [displayed, setDisplayed] = useState(text);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevAnimate = useRef(false);

  const LETTERS =
    locale === "en"
      ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      : "АБВГДЕЄЖЗІЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";

  const clearAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    setDisplayed(text);
  }, [text]);

  useEffect(() => {
    if (!prevAnimate.current && animate) {
      clearAnimation();

      let iteration = 0;
      const original = text;

      intervalRef.current = setInterval(() => {
        setDisplayed(
          original
            .split("")
            .map((char, i) => {
              if (!/\p{L}/u.test(char)) {
                return char;
              }

              if (i < iteration) {
                return char;
              }

              return LETTERS[Math.floor(Math.random() * LETTERS.length)];
            })
            .join("")
        );

        iteration += 1 / 3;

        if (iteration >= original.length) {
          clearAnimation();
          setDisplayed(original);
        }
      }, 30);
    }

    if (!animate) {
      clearAnimation();
      setDisplayed(text);
    }

    prevAnimate.current = animate;

    return clearAnimation;
  }, [animate, text, LETTERS]);

  return <span className="font-bold tracking-wide">{displayed}</span>;
}
