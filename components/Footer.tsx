"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useFooterStore } from "@/store/store";

export const Footer = () => {
  const setHeight = useFooterStore((state) => state.setPageHeight);
  // For some reason footer is initiall loading high up on the page.  Which is not at the bottom where it needs to be.  So this is keeping the footer invisible until the page renders.
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
    <footer className={`h-[200px] w-full ${isVisible ? "flex" : "hidden"}`}>
      <div className="flex w-full flex-col text-white">
        <div className="mb-4 flex w-full justify-evenly text-2xl font-semibold">
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Privacy Policy</Link>
              <p>
                Site Made and Maintained by{" "}
                <Link href="/">
                  <span className="text-slate-300">Jason Hall</span>
                </Link>
              </p>
              <p>&copy; 2024 U-Well</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly pb-4">
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
        </div>
      </div>
    </footer>
  );
};
