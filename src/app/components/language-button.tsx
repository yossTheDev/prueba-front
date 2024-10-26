"use client";

import { useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export const LanguageButton = () => {
  const router = useRouter();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (locale: string) => {
    if (locale !== currentLocale) {
      router.push("/", { locale });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-1 rounded">
        <Image
          src={`/flags/${currentLocale}.webp`}
          alt={currentLocale === "es" ? "Español" : "English"}
          width={24}
          height={16}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded shadow-md">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={currentLocale}
            className="w-full p-2 bg-white text-gray-700 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      )}
    </div>
  );
};
