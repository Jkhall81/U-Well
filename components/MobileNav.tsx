"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed right-0 top-0 z-50 flex h-[110px] w-full items-center justify-end lg:hidden">
      <RxHamburgerMenu
        className="cursor-pointer pr-10"
        size={100}
        color="white"
        aria-label="Mobile hamburger menu"
        onClick={() => setIsOpen(!isOpen)}
      />
      <aside
        className={cn(
          "fixed bottom-0 top-0 z-50 w-full bg-black p-10 transition-all duration-500",
          isOpen ? "right-0" : "-right-full",
        )}
      >
        <div className="h-full">
          {/* nav close btn */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute right-8 top-8 flex h-10 w-10 cursor-pointer items-center justify-center text-4xl text-white"
          >
            <IoCloseOutline />
          </div>
          <div className="flex h-full flex-col items-center justify-center gap-y-8">
            {navLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-2xl font-semibold text-white">
                    {link.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </nav>
  );
};
