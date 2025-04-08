import React from "react";
import ContactButtons from "@/components/product_page/ContactButtons";

const Contact = () => {
  return (
    <div className="mx-auto max-w-xl bg-primary-background px-4 py-10 text-primary-text">
      <h1 className="mb-6 text-center text-3xl font-bold">Contacto</h1>
      <p className="mb-8 text-center text-lg">
        Para iniciar una compra o realizar consultas, ponete en contacto con
        nosotros a través de cualquiera de nuestros principales medios:
      </p>
      <ContactButtons />
    </div>
  );
};

export default Contact;
