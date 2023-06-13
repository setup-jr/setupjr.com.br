import Image from "next/image";

export const services = [
  {
    icon: (
      <Image src="/web.svg" width={140} height={140} alt="Icone de web" />
    ),
    title: "Sistemas Web",
  },
  {
    icon: (
      <Image src="/landing-pages.svg" width={140} height={140} alt="Icone de site" />
    ),
    title: "Landing Pages",
  },
  {
    icon: (
      <Image src="/consulting.svg" width={140} height={140} alt="Icone de usuarios" />
    ),
    title: "Consultoria",
  },
  {
    icon: (
      <Image src="/mobile.svg" width={140} height={140} alt="Icone de celular e notebook" />
    ),
    title: "Sistemas Mobile",
  },
  {
    icon: (
      <Image src="/marketing.svg" width={140} height={140} alt="Icone de grafico" />
    ),
    title: "Marketing",
  },
  {
    icon: (
      <Image src="/training.svg" width={140} height={140} alt="Icone de treinamento" />
    ),
    title: "Treinamento",
  },

];
