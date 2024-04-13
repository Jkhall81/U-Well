"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  title: string;
  href: string;
}

export const NavLink = ({ title, href }: NavLinkProps) => {
  return (
    <nav>
      <Link href={href}>{title}</Link>
    </nav>
  );
};
