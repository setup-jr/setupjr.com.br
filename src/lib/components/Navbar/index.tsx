"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Brand from "../Brand";
import NavLink from "../NavLink";
import { usePathname, useSearchParams } from "next/navigation";
import { navigation } from "./routes";

const Navbar = () => {
  const [state, setState] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Close the navbar menu when navigate
    const handleState = () => {
      document.body.classList.remove("overflow-hidden");
      setState(false);
    };

    handleState();
  }, [pathname, searchParams]);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header id="nav">
      <nav
        className={`bg-white w-full h-[10.625rem]  pt-[2.5rem] md:static md:text-[1rem] ${
          state ? "fixed z-10 h-full" : ""
        }`}
      >
        <div className="custom-screen items-center max-w-xl  mx-auto md:flex">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Brand />
            <div className="md:hidden">
              <button
                role="button"
                aria-label="Open the menu"
                className=" hover:text-red"
                onClick={handleNavMenu}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${
              state ? "" : "hidden"
            }`}
          >
            <ul className="text-blue justify-end font-title items-center space-y-6 md:flex md:space-x-16 md:space-y-0  md:font-regular">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="duration-200 hover:text-dark-blue">
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <NavLink
                  href="#contact"
                  className="block font-regular text-[1rem] text-white bg-blue hover:bg-dark-blue md:inline"
                >
                  Entre em contato
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
