"use client";

import { HTMLAttributes, ReactNode } from "react";

interface GradientWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}
//linear-gradient(202.72deg, rgba(237, 78, 80, 0.05) 14.76%, rgba(152, 103, 240, 0.04) 34.37%, rgba(152, 103, 240, 0) 86.62%)
const GradientWrapper = ({ children, ...rest }: GradientWrapperProps) => (
  <div
    {...rest}
    className={`relative h-[78rem]  z-0 xll:h-[90rem]   md:h-[55rem] -mt-20 md:-mt-14 overflow-hidden  ${
      rest.className || ""
    }`}
  >
    <div
      className="blur-[100px] absolute inset-0 w-full h-full"
    ></div>
    <div className="relative w-full h-full  ">{children}</div>
  </div>
);

export default GradientWrapper;
