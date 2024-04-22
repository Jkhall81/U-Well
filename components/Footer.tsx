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
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const totalPageLength = document.body.scrollHeight;
      console.log("Total Page Length", totalPageLength);
      setHeight(totalPageLength);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [setHeight]);

  return (
    <footer
      className={`h-full w-full justify-evenly ${isVisible ? "flex" : "hidden"}`}
    >
      <Link href="/">
        <FaYoutube color="white" size={70} />
      </Link>
      <Link href="/">
        <FaFacebook color="white" size={70} />
      </Link>
      <Link href="/">
        <FaLinkedin className="text-white" size={70} />
      </Link>
    </footer>
  );
};
