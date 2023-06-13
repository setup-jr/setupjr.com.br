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
    className={`py-[1rem] px-[1.125rem] cursor-pointer text-center rounded-lg duration-200 ${
      rest?.className || ""
    }`}
  >
    {children}
  </Link>
);

export default NavLink;
