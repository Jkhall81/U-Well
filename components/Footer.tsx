"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useFooterStore } from "@/store/store";

export const Footer = () => {
  const setHeight = useFooterStore((state) => state.setPageHeight);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const updatePageHeight = () => {
      const totalPageLength = document.body.scrollHeight;
      setHeight(totalPageLength);
    };

    updatePageHeight();

    const handleResize = () => {
      updatePageHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setHeight]);

  return (
    <footer
      className={`h-[100px] w-full justify-evenly ${isVisible ? "flex" : "hidden"}`}
    >
      <Link href="/" target="_blank" aria-label="icon link to YouTube">
        <FaYoutube color="white" size={70} />
      </Link>
      <Link href="/" target="_blank" aria-label="icon link to Meta">
        <FaFacebook color="white" size={70} />
      </Link>
      <Link
        href="https://www.linkedin.com/company/u-well-health/"
        target="_blank"
        aria-label="icon link to Linkedin"
      >
        <FaLinkedin className="text-white" size={70} />
      </Link>
    </footer>
  );
};
