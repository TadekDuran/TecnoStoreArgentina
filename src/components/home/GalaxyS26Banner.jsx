import React from "react";
import s26_image from "@/assets/s26.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GalaxyS26Banner = () => {
  return (
    <section className="w-full animate-fade-in bg-[#E5E4E2]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-2 md:flex-row md:gap-6 md:px-2">
        <div className="flex flex-1 animate-fade-in-delayed flex-col gap-4 pt-4 opacity-0 md:gap-6 md:pt-0">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-xl font-bold text-gray-950 sm:text-2xl md:text-3xl">
              ¡Nuevos Samsung Galaxy a la venta!{" "}
            </h1>
            <h2 className="text-sm font-semibold text-gray-950 sm:text-base md:text-2xl">
              ¡Ya podés comprar tu nuevo Galaxy S26, S26 Plus o S26
              Ultra!
              <br />
              Todos los modelos están disponibles en su versión 256GB y 512GB
              <br />
              Información sobre precios, colores y disponibilidad en redes sociales.
            </h2>
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            <Link
              href="https://wa.me/message/PNQ3NZQBCRVXE1"
              aria-label="Preventa Galaxy S26"
              target="_blank"
            >
              <Button className="h-12 rounded-xl bg-[#F7F7F7] hover:bg-[#C0C0C0]">
                <h2 className="text-lg font-bold md:text-xl">WHATSAPP</h2>
              </Button>
            </Link>
						<Link
              href="https://www.instagram.com/tecnostorearg"
              aria-label="Preventa Galaxy S26"
              target="_blank"
            >
              <Button className="h-12 rounded-xl bg-[#F7F7F7] hover:bg-[#C0C0C0]">
                <h2 className="text-lg font-bold md:text-xl">INSTAGRAM</h2>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0 animate-fade-in-delayed items-center justify-center opacity-0 md:w-2/5">
          <img
            className="object-contain md:max-h-[380px] md:w-full"
            src={s26_image.src}
            alt="Galaxy S26"
          />
        </div>
      </div>
    </section>
  );
};

export default GalaxyS26Banner;
