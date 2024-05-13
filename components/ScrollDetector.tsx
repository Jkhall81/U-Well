"use client";

import { useEffect } from "react";
import { useNavStore } from "@/store/store";

export const ScrollDetector = () => {
  const setNavTrue = useNavStore((state) => state.setNavSolidTrue);
  const setNavFalse = useNavStore((state) => state.setNavSolidFalse);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    const handleScroll = () => {
      if (mainElement) {
        // Detect if scrolling occurred here
        if (mainElement.scrollTop > 0) {
          setNavTrue(); // Set NavTrue if scrolling detected
        } else {
          setNavFalse(); // Otherwise, set NavFalse
        }
      }
    };

    // Add scroll event listener to the window
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);

      // Cleanup: Remove event listener on component unmount
      return () => {
        mainElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [setNavTrue, setNavFalse]);

  // Return empty fragment as this component doesn't render anything visible
  return <></>;
};
