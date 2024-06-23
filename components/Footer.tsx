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
  const [iconSize, setIconSize] = useState(70);

  useEffect(() => {
    setIsVisible(true);

    const updatePageHeight = () => {
      const totalPageLength = document.body.scrollHeight;
      setHeight(totalPageLength);
    };

    updatePageHeight();

    const handleResize = () => {
      updatePageHeight();
      if (window.innerWidth < 1280) {
        setIconSize(50);
      } else {
        setIconSize(70);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setHeight]);

  return (
    <footer className={`h-[200px] w-full ${isVisible ? "flex" : "hidden"}`}>
      <div className="flex w-full flex-col text-white">
        <div className="mb-4 flex w-full justify-evenly">
          <div className="md:flex-1"></div>
          <div className="md:flex-1"></div>
          <div className="px-6 md:flex-1">
            <div className="flex select-none flex-col gap-4 text-xl font-semibold">
              <Link
                className="hover:text-neutral-700"
                href="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
              <Link href="/privacy-policy">
                <span className="hover:text-neutral-700">Privacy Policy</span>
              </Link>
              <p>
                Built and Maintained by{" "}
                <Link href="https://jason-hall.vercel.app" target="_blank">
                  <span className="web-master">Jason Hall</span>
                </Link>
              </p>
              <p>&copy; 2024 U-Well</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-evenly pb-4">
          <Link
            href="https://www.youtube.com/channel/UCsPffW8up8Hf8mR_dyFhm_w"
            target="_blank"
            aria-label="icon link to YouTube"
          >
            <FaYoutube color="white" size={iconSize} />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61554167284104"
            target="_blank"
            aria-label="icon link to Meta"
          >
            <FaFacebook color="white" size={iconSize} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/u-well-health/"
            target="_blank"
            aria-label="icon link to Linkedin"
          >
            <FaLinkedin className="text-white" size={iconSize} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
