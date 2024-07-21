"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  href: string;
}

export const SideBarLink = ({ title, href }: Props) => {
  const pathname = usePathname();
  return (
    <div className="pb-6">
      <Link
        className={
          (cn("text-2xl"), `${pathname === href ? "text-blue-600" : ""}`)
        }
        href={href}
      >
        {title}
      </Link>
    </div>
  );
};
