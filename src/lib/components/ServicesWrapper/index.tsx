"use client";

import { HTMLAttributes, ReactNode } from "react";

interface ServicesWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const ServicesWrapper = ({ children, ...rest }: ServicesWrapperProps) => (
  <div
    {...rest}
    className={`relative md:h-auto  xll:h-[90rem]  md:-mt-14 overflow-hidden  ${
      rest.className || ""
    }`}
  >
    <div
      className="blur-[100px] absolute inset-0 w-full h-full"
    ></div>
    <div className="relative w-full h-full  ">{children}</div>
  </div>
);

export default ServicesWrapper;
