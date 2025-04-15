import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center py-10 text-primary-text">
      <h1 className="text-center text-3xl font-bold tracking-tight">
        Preguntas Frecuentes
      </h1>
      <Accordion type="multiple" className="mt-8 w-7/12 border-t">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-semibold">
            ¿Realizan ventas en cualquier país?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-xl">
              ¡NO! Solamente vendemos dentro del territorio de la república
              Argentina.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-semibold">
            ¿Trabajan con cuotas?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-xl">
              ¡NO! Solo trabajamos con un solo pago en cualquiera de los métodos
              de pago que se mencionan a continuación.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-semibold">
            ¿Qué métodos de pago tienen?
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 text-xl">
              <li>Efectivo en pesos, dólares y euros</li>
              <li>Criptomonedas (+1,5%)</li>
              <li>Transferencia en pesos (+3%)</li>
              <li>
                Transferencia en dólares (solo cuentas de Estados Unidos) (+5%)
              </li>
              <li>AirTM / Wise (+5%)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl font-semibold">
            ¿Se pueden realizar compras desde este sitio web?
          </AccordionTrigger>
          <AccordionContent className="flex flex-wrap items-baseline gap-2">
            <p className="text-xl">
              ¡NO! Todas las compras se gestionan a través de cualquier medio
              que se encuentre en la página de
            </p>
            <div className="inline-flex items-center gap-1">
              <Link
                target="_blank"
                href="/contact"
                className="text-xl font-bold underline"
              >
                Contacto
              </Link>
              <ExternalLink size={15} />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-2xl font-semibold">
            ¿Realizan envíos?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-xl">
              ¡SI! Hacemos envíos sin cargo a todo el país (Argentina) a través
              de Andreani. Además hacemos envíos con moto en la Ciudad Autónoma de Buenos Aires y barrios aledaños (consultar
              disponibilidad).
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
