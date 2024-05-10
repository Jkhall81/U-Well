"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  title: string;
  href: string;
}

export const NavLink = ({ title, href }: NavLinkProps) => {
  const pathname = usePathname();
  return (
    <nav>
      <Link
        className="select-none text-xl font-semibold text-white hover:text-neutral-700"
        href={href}
      >
        {title}
      </Link>
      {pathname === href ? (
        <div className=" mt-2 border-2 border-t-white" />
      ) : null}
    </nav>
  );
};
