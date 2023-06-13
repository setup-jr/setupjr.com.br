import Image from "next/image";

export const features = [
  {
    icon: (
      <Image src="/lock.svg" width={56} height={73} alt="Icone de cadeado" />
    ),
    title: "Segurança prioritária",
    desc: "Nossa missão é elevar o nível, tornando a segurança do computador mais acessível.",
  },
  {
    icon: (
      <Image src="/safe.svg" width={54} height={68} alt="Icone de escudo" />
    ),
    title: "Qualidade acima de tudo",
    desc: "Como uma agência de desenvolvimento de produtos digitais, acreditamos em um software bonito.",
  },
  {
    icon: (
      <Image src="/code.svg" width={82} height={82} alt="Icone de codigo" />
    ),
    title: "Tecnologias atuais",
    desc: "Utilizamos as tecnologias mais modernas para construir os melhores produtos da internet.",
  },
];
