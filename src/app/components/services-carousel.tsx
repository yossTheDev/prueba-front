/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ServicesIcon } from "./services-icon";
import { Service } from "../types/service";

// URL del JSON
const DATA_URL = "https://react-frontend.pages.dev/slides.json";

export const ServicesCarousel = () => {
  const [slides, setSlides] = useState<null | Service[]>([]);

  useEffect(() => {
    // Fetch de los datos desde el JSON
    const fetchSlides = async () => {
      try {
        const response = await fetch(DATA_URL);
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error("Error al obtener los datos del carrusel:", error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <Carousel className="">
      <CarouselContent>
        {slides?.map((slide) => (
          <CarouselItem key={slide.id} className="p-4 basis-1/2">
            <div className="bg-white shadow-md rounded-lg p-6 text-center text-[#2E53A3]">
              <div className="mb-4">
                <ServicesIcon id={parseInt(slide.id)}></ServicesIcon>
                {/* <img
                  src={`/services/${slide.id}.svg`}
                  alt={slide.id}
                  className="mx-auto h-12 w-12 bg-slate-300 fill-slate-500 text-slate-500"
                /> */}
              </div>

              <p>{slide.id}</p>
              <h3 className="text-lg font-semibold text-blue-600">
                {slide.title}
              </h3>
              <p className="mt-2 text-gray-700">{slide.description}</p>
              <Link
                href={slide.link}
                target="_blank"
                className="text-blue-600 font-semibold mt-4 inline-block"
              >
                Leer más &rarr;
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ServicesCarousel;
