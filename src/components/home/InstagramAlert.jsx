import React from "react";
import ContactButtons from "@/components/product_page/ContactButtons";

const InstagramAlert = () => {
  return (
    <section className="w-full animate-fade-in py-2 lg:py-4 bg-[#d84141]">
      <div className="mx-auto flex max-w-7xl flex-col px-2 md:gap-6 md:px-2">
          <div className="flex flex-col gap-4 text-black text-center items-center">
            <h1 className="font-bold text-2xl md:text-5xl">
              ¡IMPORTANTE!
            </h1>
            <h2 className="font-semibold text-base md:text-2xl">
              Nuestro Instagram ha sido deshabilitado temporalmente. Estamos
              trabajando para resolverlo lo antes posible.
              <br />
              Mientras tanto, podes mantener el contacto con nosotros a través
              de todas nuestras otras redes sociales:
              <br />
            </h2>
            <div className="w-4/5 lg:w-2/5">
              <ContactButtons />
            </div>
          </div>
      </div>
    </section>
  );
};

export default InstagramAlert;
