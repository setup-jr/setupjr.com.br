"use client";

import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <div className="custom-screen py-28 text-gray-600">
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
          Crie e dimensione sua próxima ideia de negócio mais rapidamente{" "}
        </h1>
        <p className="max-w-xl mx-auto">
          SetupJR simplifica a construção e o crescimento do seu projeto ou
          qualquer ideia de negócio.
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="/get-started"
            className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
          >
            Entre em contato
          </NavLink>
          <NavLink
            href="#cta"
            className="text-gray-700 border hover:bg-gray-50"
            onScroll={() => {}}
          >
            Veja mais
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
