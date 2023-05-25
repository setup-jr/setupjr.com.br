"use client";

import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => (
  <button
    role="button"
    {...rest}
    className={`${rest.className || ""} px-4 py-2 rounded-lg duration-150`}
  >
    {children}
  </button>
);
export default Button;
