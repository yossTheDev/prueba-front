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
import { useSlides } from "../context/SlidesContext";

export const ServicesCarousel = () => {
  const { slides } = useSlides();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
        className="h-full w-full"
      >
        <CarouselContent className="p-2">
          {slides?.map((slide) => (
            <CarouselItem key={slide.id} className="md:basis-1/2">
              <div
                className={`shadow-md rounded-lg p-6 h-full flex-1 flex-col text-start transition-all ${
                  current === parseInt(slide.id)
                    ? "opacity-100 bg-[#2E53A3] text-white"
                    : "opacity-50 text-[#2E53A3] bg-white"
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
