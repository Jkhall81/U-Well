"use client";

import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useNavStore } from "@/store/store";

export const NavBar = () => {
  const navState = useNavStore((state) => state.navSolid);

  //`${navState ? "bg-sky-600" : ""}`,

  return (
    <nav
      className={cn(
        "fixed right-0 top-0 z-50 flex w-full items-center justify-between px-12",
        navState ? "hidden" : null,
      )}
    >
      <div>
        <Link href="/home">
          <Image
            src="/logo.png"
            quality={100}
            height={90}
            width={90}
            alt="logo"
          />
        </Link>
      </div>
      <div className="hidden gap-6 lg:flex">
        {navLinks.map((item, index) => {
          return <NavLink key={index} title={item.title} href={item.href} />;
        })}
      </div>
    </nav>
  );
};
