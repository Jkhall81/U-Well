"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  title: string;
  href: string;
}

export const NavLink = ({ title, href }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <nav>
      <Link className="text-white hover:text-neutral-700" href={href}>
        {title}
      </Link>
      {pathname === href ? (
        <div className=" mt-2 border-2 border-t-white" />
      ) : null}
    </nav>
  );
};
