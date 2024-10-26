import { ServicesCarousel } from "../components/services-carousel";

export const Services = () => {
  return (
    <section
      id="services"
      className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 py-8 px-8 lg:px-28 bg-white"
    >
      <div className="flex-1">
        <h2 className="text-blue-600 font-bold">SERVICIOS</h2>
        <h3 className="md:text-4xl text-2xl font-semibold mt-2">
          Esta info te llega desde <br></br> un servicio externo
        </h3>
        <p className="text-sm md:text-lg text-gray-700 mt-4 md:w-[80%]">
          Consultando el servicio en
          <a
            href="https://react-frontend.pages.dev/slides.json"
            className="text-blue-600 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://react-frontend.pages.dev/slides.json
          </a>
          , debes usar Context para enviar los datos que necesitas en la sección
          de abajo. A la derecha tiene un slide o carrusel.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full">
          Ver más
        </button>
      </div>

      <div className="md:w-1/2 w-[80%] items-center justify-center flex flex-col">
        <ServicesCarousel></ServicesCarousel>
      </div>
    </section>
  );
};
