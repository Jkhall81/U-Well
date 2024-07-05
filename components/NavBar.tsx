"use client";

import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useNavStore } from "@/store/store";
import { Session } from "next-auth";

interface Props {
  session: Session;
}

export const NavBar = ({ session }: Props) => {
  const navState = useNavStore((state) => state.navSolid);

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
          const title =
            item.title === "Login" && session !== null ? "Account" : item.title;
          const href =
            item.title === "Login" && session !== null ? "/account" : item.href;
          return <NavLink key={index} title={title} href={href} />;
        })}
      </div>
    </nav>
  );
};
