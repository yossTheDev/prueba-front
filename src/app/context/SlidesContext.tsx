"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Service } from "../types/service";

const DATA_URL = "https://react-frontend.pages.dev/slides.json";

interface SlidesContextType {
  slides: Service[] | null;
}

const SlidesContext = createContext<SlidesContextType | undefined>(undefined);

export const SlidesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [slides, setSlides] = useState<Service[] | null>(null);

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

  return (
    <SlidesContext.Provider value={{ slides }}>
      {children}
    </SlidesContext.Provider>
  );
};

export const useSlides = () => {
  const context = useContext(SlidesContext);
  if (context === undefined) {
    throw new Error("Necesitas el SliderProvider");
  }
  return context;
};
