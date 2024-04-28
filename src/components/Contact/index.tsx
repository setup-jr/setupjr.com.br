import SectionWrapper from "../SectionWrapper";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <SectionWrapper id="contact" className="bg-blue mb-0 text-white h-full">
      <div className="custom-screen ">
        <div className="flex flex-col justify-between  items-center">
          <h1 className="font-body mb-[2rem] md:text-[3.125rem] text-3xl font-semibold sm:text-4xl">
            Entre em contato
          </h1>
          <div className="w-full  flex-wrap flex flex-row justify-between">
            <form
              target="_blank"
              className="w-[30rem]  flex flex-col justify-evenly py-[3rem]"
              action={`mailto:setupjr@uenp.edu.br?body=Olá meu email é: ${email} \n Minha mensagem: "${message}"`}
            >
              <div className="mb-[3rem] w-full">
                <h2 className="text-[1.575rem] font-bold font-title">Email</h2>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-[25rem] w-full pl-4 text-black h-[2.5rem] outline-none cursor-text rounded-md"
                  placeholder="email@setup.com.br"
                  type="email"
                />
              </div>
              <div className="mb-[3rem] w-full">
                <h2 className="text-[1.575rem] font-bold font-title">
                  Mensagem
                </h2>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Olá tudo bem?..."
                  className="max-w-[25rem] w-full p-4 text-black h-[12.125rem] outline-none cursor-text rounded-md"
                ></textarea>
              </div>
              <button
                onClick={() => console.log(email, message)}
                className="bg-gold hover:bg-[#C07A13] duration-200 max-w-[25rem] rounded-md h-[2.8rem]"
              >
                Enviar
              </button>
            </form>
            <img
              src="/messaging.svg"
              className=" md:max-w-xl"
              alt="Crie modelos de negócios bem-sucedidos com nossas soluções de TI"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
