import Input from "lib/components/ui/Input";
import Button from "lib/components/ui/Button";
import Checkbox from "lib/components/ui/Checkbox";

export default function Contact() {
  const servicesItems = [
    "Desenvolvimento de sistemas",
    "UI/UX Design",
    "Consultoria",
    "SEO",
  ];

  return (
    <div className="pt-28 pb-12">
      <div className="custom-screen text-gray-600">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg sm:text-center lg:text-left">
            <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Converse com um de nós!
            </h1>
            <p className="mt-3">
              Estamos aqui para ajudar. Entre em contato com nossa equipe de
              vendas e deixe-nos saber como podemos ajudar ou envie-nos um
              e-mail em{" "}
              <a
                href="mailto:setupjr@uenp.edu.br"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:text-indigo-400 font-medium duration-150"
              >
                setupjr@uenp.edu.br
              </a>
              .
            </p>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0">
            <form
              // onSubmit={(e) => e.preventDefault()}
              className="space-y-5 font-medium"
            >
              <div>
                <label>Nome completo</label>
                <Input
                  aria-label="Full name"
                  itemType="text"
                  className="mt-2 focus:border-indigo-600"
                />
              </div>
              <div>
                <label>Email</label>
                <Input
                  aria-label="Email"
                  itemType="email"
                  className="mt-2 focus:border-indigo-600"
                />
              </div>
              <div>
                <label>Mensagem</label>
                <textarea
                  aria-label="Message"
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <div>
                <label>Serviços</label>
                <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-3 font-normal max-w-md sm:gap-x-16">
                  {servicesItems.map((item, idx) => (
                    <li key={idx} className="flex gap-x-2 items-center">
                      <Checkbox id={`service-${idx}`} />
                      <label htmlFor={`service-${idx}`} className="text-sm">
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-1">
                <Button className="w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
