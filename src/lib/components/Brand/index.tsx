"use client";

import Image from "next/image";
import Link from "next/link";

const Brand = () => (
  <Link href="/">
    <Image src="/setupJr.svg" width={130} height={50} alt="SetupJR logo" />
  </Link>
);
export default Brand;
