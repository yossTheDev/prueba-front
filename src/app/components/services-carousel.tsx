/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
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

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ dragFree: false }}
        className="h-full w-full "
      >
        <CarouselContent className="">
          {slides?.map((slide) => (
            <CarouselItem key={slide.id} className="basis-1/2 ">
              <div
                className={`bg-white shadow-md rounded-lg p-6 h-full flex-1 flex-col text-start transition-all ${
                  current === parseInt(slide.id)
                    ? "opacity-100 bg-[#2E53A3] text-white"
                    : "opacity-50 text-[#2E53A3]"
                }`}
              >
                <div className="mb-4">
                  <ServicesIcon id={parseInt(slide.id)}></ServicesIcon>
                </div>

                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p
                  className={`mt-2 text-sm  ${
                    current === parseInt(slide.id)
                      ? "text-neutral-200"
                      : "text-neutral-700"
                  }`}
                >
                  {slide.description}
                </p>

                <Link
                  href={slide.link}
                  target="_blank"
                  className={`font-semibold mt-4 inline-block ${
                    current === parseInt(slide.id)
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
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

      {/* Indicators */}
      <div className="flex gap-2 mt-4">
        {slides?.map((_, index) => (
          <button
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={`indicator-${index}`}
            className={`transition-all size-4 items-center justify-center flex rounded-full bg-[#2E53A3] ${
              current === index + 1 ? "bg-[#2e3fa3]" : "bg-[#2e53a393]"
            }`}
          >
            {current === index + 1 && (
              <div className="size-2 bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default ServicesCarousel;
