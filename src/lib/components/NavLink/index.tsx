"use client";

import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

interface NavLinkProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  href: string;
}

const NavLink = ({ children, href, ...rest }: NavLinkProps) => (
  <Link
    href={href}
    {...rest}
    className={`py-2.5 px-4 text-center rounded-lg duration-150 ${
      rest?.className || ""
    }`}
  >
    {children}
  </Link>
);

export default NavLink;
