import { HTMLAttributes, ReactNode } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const SectionWrapper = ({ children, ...rest }: SectionWrapperProps) => (
  <section {...rest} className={`py-16 ${rest.className || ""}`}>
    {children}
  </section>
);

export default SectionWrapper;
