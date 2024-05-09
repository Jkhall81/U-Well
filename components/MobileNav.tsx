"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useNavStore } from "@/store/store";

export const MobileNav = () => {
  const navState = useNavStore((state) => state.navSolid);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed right-0 top-0 z-50 flex h-[110px] w-full items-center justify-end lg:hidden">
      <motion.div
        whileTap={{
          scale: 1.4,
        }}
      >
        <RxHamburgerMenu
          className={cn("cursor-pointer pr-10", navState ? "hidden" : null)}
          size={100}
          color="white"
          aria-label="Mobile hamburger menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </motion.div>
      <aside
        className={cn(
          "fixed bottom-0 top-0 w-full bg-black/90 p-10 transition-all duration-500",
          isOpen ? "right-0" : "-right-[200%]",
        )}
      >
        {/* Shapes */}
        <div className="absolute h-[400px] w-[400px] rounded-full bg-blue-500 opacity-20 blur-lg" />
        <div className="absolute ml-[500px] mt-[300px] h-[200px] w-[200px] rounded-full bg-blue-300 opacity-20 blur-lg" />
        <div className="absolute ml-[-300px] mt-[200px] h-[600px] w-[600px] rounded-full bg-cyan-600 opacity-20 blur-xl" />
        <div className="absolute ml-[90px] mt-[800px] h-[800px] w-[800px] rounded-full bg-green-800 opacity-20 blur-xl" />
        <div className="h-full">
          {/* nav close btn */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute right-8 top-8 flex cursor-pointer items-center justify-center text-4xl text-white"
          >
            <motion.div
              whileTap={{
                scale: 1.4,
              }}
            >
              <IoCloseOutline size={75} />
            </motion.div>
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
