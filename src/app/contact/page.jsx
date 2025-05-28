import React from "react";
import ContactButtons from "@/components/product_page/ContactButtons";

export const metadata = {
  title: "Contacto - TecnoStore Argentina",
  description:
    "Ponete en contacto con nosotros a través de nuestras redes sociales.",
};

const Contact = () => {
  return (
    <div className="mx-auto w-3/5 bg-primary-background px-4 py-10 text-primary-text">
      <h1 className="mb-6 text-center text-3xl font-bold">Contacto</h1>
      <p className="mb-4 text-center text-lg leading-relaxed text-secondary-text">
        Para iniciar una compra o realizar consultas, ponete en contacto con
        nosotros a través de cualquiera de nuestros principales medios:
      </p>
      <div className="mb-8">
        <ContactButtons />
      </div>
      <p className="mb-4 text-center text-lg font-bold leading-relaxed text-primary-text">
        Podés retirar por nuestras oficinas de Núñez o Santos Lugares
      </p>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26291.429345808625!2d-58.481694194956205!3d-34.542700320516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb420f6902f33%3A0x319825d17bcaba0d!2sN%C3%BA%C3%B1ez%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1748468228760!5m2!1ses!2sar"
          className="h-64 w-full rounded-md md:h-96"
          loading="lazy"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26272.063878456844!2d-58.57956032452796!3d-34.60395959781575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb78d81f420df%3A0x9600a2a2d625aa2f!2sSantos%20Lugares%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1748468704353!5m2!1ses!2sar"
          className="h-64 w-full rounded-md md:h-96"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
