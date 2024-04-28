import { HTMLAttributes, ReactNode } from "react";

interface NavLinkProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  href: string;
}

const NavLink = ({ children, href, ...rest }: NavLinkProps) => (
  <a
    href={href}
    {...rest}
    className={`py-[1rem] px-[1.125rem] cursor-pointer text-center rounded-lg duration-200 ${
      rest?.className || ""
    }`}
  >
    {children}
  </a>
);

export default NavLink;
