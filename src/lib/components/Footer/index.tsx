"use client";

import Link from "next/link";
import Brand from "../Brand";
import Image from "next/image";
import { socialInfo } from "./footerLinks";


const Footer = () => (
  <footer className="bg-dark-blue">
    <div className="custom-screen">
      <div className=" py-8 items-center sm:justify-between jusitfy-evenly sm:flex">
        <Link href="/">
          <Image src="/setupJr-white.svg" width={130} height={50} alt="SetupJR logo" />
        </Link>
        <div className="flex my-[2rem] sm:my-0 items-center gap-x-6 text-gray-400 mt-6">
          {socialInfo.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              aria-label="social media"
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <Link className="my-[2rem] sm:my-0" href="#nav">
          <Image src="/up-arrow.svg" width={60} height={60} alt="Retornar ao início da página" />
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
