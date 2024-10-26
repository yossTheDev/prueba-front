import Link from "next/link";
import { LanguageButton } from "./language-button";
import { getTranslations } from "next-intl/server";

export const Header = async () => {
  const t = await getTranslations("Navigation");

  return (
    <div className="sticky lg:fixed lg:top-5 top-0 w-full flex justify-center z-50">
      <header className="w-full lg:w-[80%] bg-white lg:shadow-md lg:rounded">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Navegación principal */}
            <nav className="flex space-x-8">
              <Link className="text-blue-600 font-semibold" href="/">
                {t("home")}
              </Link>

              {/* Links adicionales ocultos en móviles */}
              <div className="hidden lg:flex space-x-8">
                <Link className="text-blue-600 font-semibold" href="/services">
                  {t("services")}
                </Link>
                <Link className="text-blue-600 font-semibold" href="/about">
                  {t("aboutus")}
                </Link>
                <Link className="text-blue-600 font-semibold" href="/tools">
                  {t("tools")}
                </Link>
                <Link className="text-blue-600 font-semibold" href="/partners">
                  {t("partner")}
                </Link>
              </div>
            </nav>

            {/* Botones de "Contactar" y cambio de idioma */}
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                {t("contact")}
              </button>
              <LanguageButton></LanguageButton>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
