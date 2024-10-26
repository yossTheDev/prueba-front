import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 py-8 lg:px-28 bg-white">
      <div className="w-1/2  items-center justify-center flex flex-col">
        <Image
          src="/about-us.png"
          alt="Nosotros"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-blue-600 font-bold">NOSOTROS</h2>
        <h3 className="text-2xl font-bold mt-2 w-[80%]">
          Traduce solo este título maravilloso y el navbar
        </h3>
        <p className="text-gray-700 mt-4 w-[80%]">
          Usted debe tener un sólido conocimiento de HTML y CSS. Debe comprender
          la arquitectura de componentes de React. Debe tener buena atención al
          detalle, organización del código, habilidades de comunicación efectiva
          y capacidad para trabajar en equipo.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full">
          Ver más
        </button>
      </div>
    </section>
  );
};
