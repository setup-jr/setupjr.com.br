import NavLink from "../NavLink";

const scrollTo = () => {
  window.scrollTo({
    behavior: "smooth",
  });
};

const Hero = () => (
  <section>
    <div id="hero" className="custom-screen pt-10 z-10 relative text-dark-blue">
      <div className="space-y-5 max-w-[70rem]  h-[25rem] mx-auto text-center flex flex-col justify-around ">
        <h1 className="text-[1.563rem] leading-tight text-dark-blue font-body font-bold mx-auto sm:text-[2.5rem]  md:text-[3.525rem]">
          Nós somos a <span className="text-gold">EJ</span> que irá transformar
          seu problema real em uma <span className="text-gold">solução</span>{" "}
          computacional{" "}
        </h1>
        <p className="max-w-[33rem] mx-auto mt-10 font-title font-medium text-[1rem]">
          <span className="text-blue">Setup</span>
          <span className="text-gold">JR</span> simplifica a construção e o
          crescimento do seu projeto ou qualquer ideia de negócio.
        </p>
        <div className="flex z-100 flex-col md:flex-row items-center justify-center gap-x-3 font-medium text-[1rem]">
          <NavLink
            href="https://api.whatsapp.com/send?phone=14998867061&text=Ol%C3%A1!"
            className="text-white w-full md:w-auto cursor-pointer font-regular bg-blue hover:bg-dark-blue "
          >
            Consulte um especialista
          </NavLink>
          <NavLink
            href="#about"
            className="text-dark-blue mt-4 md:mt-0 border hover:bg-gray-50"
            onScroll={() => scrollTo()}
          >
            Veja mais
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
