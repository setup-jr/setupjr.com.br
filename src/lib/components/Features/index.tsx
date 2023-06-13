"use client";

import SectionWrapper from "../SectionWrapper";
import { features } from "./features";

const Features = () => {
  return (
    <SectionWrapper className="h-full ">
      <div id="features" className="h-full bg-no-repeat  bg-cover bg-[url('/background-features-xs.png')] sm:bg-[url('/background-features-sm.png')]  md:bg-[url('/background-features-md.png')]">
        <ul className=" w-full custom-screen flex flex-col  md:h-full h-auto pt-[5.5rem] md:pt-0 md:flex-row items-center justify-center md:justify-evenly ">
          {features.map((item, idx) => (
            <li key={idx} className="space-y-3 w-[22rem] md:w-[25rem] my-12 sm:my-16 md:my-0 flex flex-col justify-center text-center text-white">
              <div className=" w-full flex justify-center items-center">
                {item.icon}
              </div>
              <h4 className="md:text-[1.875rem] sm:text-[1.75rem] text-[1.575rem] font-semibold">
                {item.title}
              </h4>
              <p className="">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Features;
