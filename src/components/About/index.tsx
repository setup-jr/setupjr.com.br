import SectionWrapper from "../SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about" className="pb-0 mb-[9rem]">
      <div className="custom-screen">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="/campus.png"
              className="rounded-lg md:max-w-lg"
              alt="Crie modelos de negócios bem-sucedidos com nossas soluções de TI"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-dark-blue font-body md:text-[3.125rem] text-[1.763rem] font-semibold sm:text-4xl">
              Quem somos
            </h2>
            <p className="md:text-[1.275rem] text-[1rem] mt-[1rem] md:mt-[2.5rem] mb-[1rem] text-dark-blue">
              A <span className="text-blue">Setup</span>
              <span className="text-gold">Jr</span>, uma empresa júnior de
              desenvolvimento de software, ajuda a construir negócios,
              concentrando-se nos desafios e necessidades de negócios do
              cliente, além de oferecer mentoria personalizada ao seu negócio.
              Nós valorizamos uma cooperação estreita e transparente e
              incentivamos nossos clientes a participar ativamente no ciclo de
              vida de desenvolvimento do projeto.
            </p>
            <p className="md:text-[1.275rem] text-[1rem] mb-[1rem] text-dark-blue">
              Uma empresa júnior é uma organização sem fins lucrativos incubada
              em uma universidade, que realiza serviços para outras empresa como
              forma de ajudar os alunos a colocarem em prática o que aprendem em
              sala de aula
            </p>
            <p className="md:text-[1.275rem] text-[1rem] mb-[1rem] text-dark-blue">
              Estamos incubados na <span className="text-gold">UENP</span>{" "}
              situada no norte do Paraná e representamos os cursos de{" "}
              <span className="text-gold">Licenciatura</span> e{" "}
              <span className="text-gold">Ciência da Computação</span>
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
