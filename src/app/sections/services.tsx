import Link from "next/link";

export const Services = () => {
  return (
    <section className="mt-20 flex flex-col md:flex-row items-start justify-center gap-8 py-8 lg:px-28 bg-white">
      <div className="flex-1">
        <h2 className="text-blue-600 font-semibold">SERVICIOS</h2>
        <h3 className="text-2xl font-bold mt-2">
          Esta info te llega desde un servicio externo
        </h3>
        <p className="text-gray-700 mt-4">
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

      <div className="flex-1 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <h4 className="text-lg font-bold">
            Pruebas y depuración de problemas
          </h4>
          <p className="mt-2">
            Debes ser capaz de identificar y solucionar problemas de
            visualización, problemas de compatibilidad, etc. Esta card está en
            versión hover.
          </p>
          <Link href="#" className="mt-4 inline-block text-white font-semibold">
            Leer más &rarr;
          </Link>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
          <h4 className="text-lg font-bold text-blue-600">
            Traduce diseños a código
          </h4>
          <p className="mt-2 text-gray-700">
            Debes ser capaz de tomar un diseño visual o una maqueta y traducirlo
            en código.
          </p>
          <Link
            href="#"
            className="mt-4 inline-block text-blue-600 font-semibold"
          >
            Leer más &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};
