import Link from "next/link";
import { LanguageButton } from "./language-button";

export const Header = () => {
  return (
    <div className="sticky lg:fixed lg:top-5 top-0 w-full flex justify-center z-50">
      <header className="w-full lg:w-[80%] bg-white lg:shadow-md lg:rounded">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Navegación principal */}
            <nav className="flex space-x-8">
              <Link className="text-blue-600 font-semibold" href="/">
                INICIO
              </Link>

              {/* Links adicionales ocultos en móviles */}
              <div className="hidden lg:flex space-x-8">
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
              </div>
            </nav>

            {/* Botones de "Contactar" y cambio de idioma */}
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                Contactar
              </button>
              <LanguageButton></LanguageButton>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
