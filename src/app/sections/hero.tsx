/* eslint-disable @next/next/no-img-element */

export const Hero = () => {
  return (
    <>
      <div className="bg-[#001853] lg:h-[34rem] h-[36rem] pt-16 lg:pt-4 grid lg:grid-cols-2 relative">
        {/* Contenido del texto */}
        <div className="flex flex-col  portrait:h-fit items-center text-center lg:text-start lg:items-start justify-center px-8 lg:px-16">
          <h1 className="font-extrabold portrait:mt-2 text-4xl sm:text-4xl lg:text-[64px] lg:leading-[64px] text-white">
            Es tiempo <br className="hidden lg:block" /> de maquetar
          </h1>
          <p className="text-xs leading-5 sm:text-base lg:leading-6 sm:leading-[22.1px] text-neutral-300 mt-4 sm:mt-6 lg:mt-8 w-full sm:w-4/5">
            Debes usar NextJS y Tailwind CSS. Cada sección de la página debe ser
            un componente individual. Usa el módulo next-intl para
            internacionalización. Usa la imaginación para desarrollar el
            responsive de la versión móvil.
          </p>
        </div>

        {/* Imagen de fondo */}
        <img
          className="absolute scale-75 opacity-30 top-0 -mt-16 lg:opacity-40 lg:-mt-28 w-full lg:w-auto"
          src="/group.png"
          alt="Hero Texture"
        />

        {/* Imagen del Hero*/}
        <div className=" order-first lg:order-none  relative flex items-center justify-center lg:justify-end lg:mb-0">
          <img
            className="w-4/5 sm:w-[85%] md:w-3/4 lg:w-[95%] lg:absolute bottom-0 lg:bottom-auto lg:mt-52"
            alt="hero image"
            src="/hero.png"
          />
        </div>
      </div>

      {/* Separador*/}
      <svg
        className="-mt-10 ml-64 portrait:mx-auto"
        width="119"
        height="85"
        viewBox="0 0 119 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68.9582 79.8872C64.1537 86.0401 54.8463 86.0401 50.0418 79.8872L3.18981 19.8854C-2.96241 12.0064 2.65157 0.500003 12.648 0.500004L106.352 0.500012C116.348 0.500013 121.962 12.0064 115.81 19.8854L68.9582 79.8872Z"
          fill="#001853"
        />
      </svg>
    </>
  );
};
