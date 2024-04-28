import { logos } from "./logos";

const LogoGrid = () => (
  <div>
    <div className="custom-screen">
      <h2 className="font-semibold text-sm text-gray-600 text-center">
        CONFIADO POR EQUIPES DO MUNDO TODO.
      </h2>
      <div className="mt-6">
        <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
          {logos.map((item, idx) => (
            <li key={idx}>
              <img src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LogoGrid;
