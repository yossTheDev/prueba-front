import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed top-4 w-full flex justify-center z-50">
      <header className="w-[80%] bg-white shadow-md rounded">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <nav className="flex space-x-8">
              <Link className="text-blue-600 font-semibold" href="/">
                INICIO
              </Link>
              <Link className="text-blue-600 font-semibold" href="/services">
                SERVICIOS
              </Link>
              <Link className="text-blue-600 font-semibold" href="/about">
                NOSOTROS
              </Link>
              <Link className="text-blue-600 font-semibold" href="/tools">
                HERRAMIENTAS
              </Link>
              <Link className="text-blue-600 font-semibold" href="/partners">
                SOCIOS
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                Contactar
              </button>
              <span className="text-gray-700">🇬🇧</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
