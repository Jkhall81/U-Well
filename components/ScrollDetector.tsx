"use client";

import { useEffect } from "react";
import { useNavStore } from "@/store/store";

export const ScrollDetector = () => {
  const setNavTrue = useNavStore((state) => state.setNavSolidTrue);
  const setNavFalse = useNavStore((state) => state.setNavSolidFalse);

  useEffect(() => {
    const handleScroll = () => {
      const mainElement = document.body.querySelector("main");
      if (mainElement) {
        const scrollPosition = mainElement!.querySelector("main")!.scrollTop;
        const scrollThreshold = 110;
        if (scrollPosition >= scrollThreshold) {
          setNavTrue();
        } else {
          setNavFalse();
        }
      }
    };
    document.body
      .querySelector("main")!
      .addEventListener("scroll", handleScroll, true);

    return () => {
      const mainElement = document.body.querySelector("main");
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, [setNavTrue, setNavFalse]);
  return <></>;
};
