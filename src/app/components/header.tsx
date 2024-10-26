import Link from "next/link";
import { LanguageButton } from "./language-button";
import { getTranslations } from "next-intl/server";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = async () => {
  const t = await getTranslations("Navigation");

  return (
    <div className="sticky lg:fixed lg:top-5 top-0 w-full flex justify-center z-50">
      <header className="w-full lg:w-[80%] bg-white lg:shadow-md lg:rounded">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Navegación principal */}
            <nav className="flex space-x-8">
              <Sheet>
                <SheetTrigger className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </SheetTrigger>
                <SheetContent side={"left"}>
                  <SheetHeader>
                    <SheetTitle>Menú</SheetTitle>

                    <Link
                      className="text-blue-600 font-semibold"
                      href="/services"
                    >
                      {t("services")}
                    </Link>
                    <Link
                      className="text-blue-600 font-semibold"
                      href="/#about"
                    >
                      {t("aboutus")}
                    </Link>
                    <Link
                      className="text-blue-600 font-semibold"
                      href="/#tools"
                    >
                      {t("tools")}
                    </Link>
                    <Link className="text-blue-600 font-semibold" href="/">
                      {t("partner")}
                    </Link>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Link className="text-blue-600 font-semibold" href="/">
                {t("home")}
              </Link>

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
