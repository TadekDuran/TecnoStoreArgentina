import React from "react";
import s26_image from "@/assets/s26.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GalaxyS26Banner = () => {
  return (
    <section className="w-full animate-fade-in bg-[#E5E4E2]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-2 md:flex-row md:gap-6 md:px-2">
        <div className="pt-4 md:pt-0 flex flex-1 flex-col gap-4 md:gap-6 animate-fade-in-delayed opacity-0">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-xl font-bold text-gray-950 sm:text-2xl md:text-3xl">
              ¡Pre-venta Galaxy S26, S26 Plus y S26 Ultra!{" "}
            </h1>
            <h2 className="text-sm font-semibold text-gray-950 sm:text-base md:text-2xl">
              ¡Ya podés reservar tu nuevo Samsung Galaxy!
              <br />
              Todos los modelos están disponibles en su versión 256GB y 512GB
              <br />
              Información sobre precios, colores y disponibilidad en Instagram.
              <br />
              ¡Tomamos seña a partir de USD100!
            </h2>
          </div>
          <div className="flex w-full items-center justify-center">
            <Link
              href="https://www.instagram.com/p/DVOdZhzjgXS/"
              aria-label="Preventa Galaxy S26"
              target="_blank"
            >
              <Button className="h-12 rounded-xl bg-[#F7F7F7] hover:bg-[#C0C0C0]">
                <h2 className="text-lg font-bold md:text-xl">INFO PRE-VENTA</h2>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0 items-center justify-center md:w-2/5 animate-fade-in-delayed opacity-0">
          <img
            className="object-contain md:w-full md:max-h-[380px]"
            src={s26_image.src}
            alt="Galaxy S26"
          />
        </div>
      </div>
    </section>
  );
};

export default GalaxyS26Banner;
