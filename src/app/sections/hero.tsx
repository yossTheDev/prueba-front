export const Hero = () => {
  return (
    <>
      <div className="bg-[#001853] h-[30rem] grid grid-cols-2 relative ">
        <div className="flex flex-col items-start justify-center px-16">
          <h1 className="font-extrabold text-[64px] leading-[64px] text-white">
            Es tiempo <br></br> de maquetar{" "}
          </h1>

          <p className=" text-[16px] leading-[22.1px] text-neutral-300 mt-8 w-4/5">
            Debes usar NextJS y Tailwind CSS . Cada sección de la página debe
            ser un componente individual. Usa el módulo next-intl para
            internacionalización. Usa la imaginación para desarrollar el
            responsive de la versión móvil.
          </p>
        </div>
        <img
          className="absolute scale-75 opacity-40 top-0 -mt-40"
          src="/group.png"
          alt="Hero Texture"
        ></img>

        <div className="relative flex items-center  justify-end">
          <img className="w-[95%] absolute mt-52 " src="/hero.png"></img>
        </div>
      </div>
      <svg
        className="-mt-10 ml-64"
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
