"use client";

import Image from "next/image";
import { useSlides } from "../context/SlidesContext";
import { useTranslations } from "next-intl";

export const AboutUs = () => {
  const t = useTranslations("HomePage.AboutUs");
  const { slides } = useSlides();
  return (
    <section
      id="about"
      className="my-20 flex flex-col md:flex-row items-center justify-center gap-12 py-8 px-8 lg:px-28 bg-white"
    >
      <div className="w-1/2 items-center justify-center flex flex-col">
        <Image
          src="/about-us.webp"
          alt="Nosotros"
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="flex md:w-1/2 flex-col items-start md:items-end md:text-end text-start">
        <h2 className="text-blue-600 font-bold">SOBRE NOSOTROS</h2>
        <h3 className="md:text-4xl text-2xl font-semibold mt-2">
          {t("title")}
        </h3>
        <p className="text-gray-600 text-sm md:text-lg mt-4 md:w-[80%]">
          Usted debe tener un sólido conocimiento de HTML y CSS. Debe comprender
          la arquitectura de componentes de React. Debe tener buena atención al
          detalle, organización del código, habilidades de comunicación efectiva
          y capacidad para trabajar en equipo.
        </p>

        {/* Items */}
        <div className="flex items-start lg:items-end flex-col gap-2 mt-4">
          {slides?.map((slide, index) => (
            <div
              className="flex gap-2 items-center text-[#606060]"
              key={`about-us-item-${index}`}
            >
              <p>{slide.title}</p>

              <svg
                className="portrait:order-first"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9.5" cy="9.5" r="9" fill="white" stroke="#3D93FF" />
                <circle cx="9.5" cy="9.5" r="2.5" fill="#3D93FF" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
