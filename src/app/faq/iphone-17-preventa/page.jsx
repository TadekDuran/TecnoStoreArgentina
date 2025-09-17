import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Preventa iPhone 17 - TecnoStore Argentina",
  description:
    "Encontrá las preguntas frecuentes de la preventa del iPhone 17.",
};

const FAQ = () => {
  return (
    <div className="flex flex-col items-center py-10 text-primary-text">
      <h1 className="text-center text-3xl font-bold tracking-tight">
        Preventa iPhone 17 - 17 Pro - 17 Pro Max - iPhone Air
      </h1>
      <Accordion type="multiple" className="mt-8 w-4/5 border-t">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-semibold">
            ¿Hacen Trade-In?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-xl">
              ¡Si! Por primera vez vamos a aceptar tu iPhone usado como parte de
              pago para la compra del iPhone 17. El equipo usado debe cumplir
              ciertas condiciones para ser aceptado.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-semibold">
            ¿En qué condiciones debe estar mi iPhone para ser aceptado?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-xl">
              El equipo debe estar en perfectas condiciones físicas (sin
              fisuras, marcas ni detalles en ningún lugar), además el porcentaje
              de batería debe ser por lo menos 90%, no tomaremos ningún equipo
              por debajo de ese valor. (SIN EXCEPCIONES)
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-semibold">
            ¿A qué valor toman mi modelo?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-xl">
              Aquí está la lista de equipos con sus respectivos valores: <br />
              16 Pro Max 256GB - hasta USD 800
              <br />
              16 Pro 256GB - hasta USD 700
              <br />
              15 Pro Max 256GB - hasta USD 600 <br />
              16 Pro 128GB - hasta USD 600
              <br />
              16 256GB - hasta USD 550
              <br />
              14 Pro Max 256GB - hasta USD 500
              <br />
              15 Pro 128GB - hasta USD 500
              <br />
              16 128GB - hasta USD 480
              <br />
              14 Pro 128GB - hasta USD 400
              <br />
              15 128GB - hasta USD 380
              <br />
              14 128GB - hasta USD 280
              <br />
              13 128GB - hasta USD 200
              <br />
              El valor máximo del equipo se toma únicamente para equipos con
              caja original.
              <br />
              *Si no tenés caja original o tu equipo no se encuentra en la
              lista, consultanos por MD en nuestras redes sociales para
              cotización personalizada.
              <br />
              **SOLO TOMAMOS EQUIPOS IPHONE
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
