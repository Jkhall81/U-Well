"use client";

import { useEffect } from "react";
import { useNavStore } from "@/store/store";

export const ScrollDetector = () => {
  const setNavTrue = useNavStore((state) => state.setNavSolidTrue);
  const setNavFalse = useNavStore((state) => state.setNavSolidFalse);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Y Position:", window.scrollY);

      // Detect if scrolling occurred here
      if (window.scrollY > 0) {
        setNavTrue(); // Set NavTrue if scrolling detected
      } else {
        setNavFalse(); // Otherwise, set NavFalse
      }
    };

    // Add scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setNavTrue, setNavFalse]);

  // Return empty fragment as this component doesn't render anything visible
  return <></>;
};
