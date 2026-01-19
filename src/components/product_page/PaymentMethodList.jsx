import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Banknote,
  Bitcoin,
  Landmark,
  Wallet,
  TriangleAlert,
} from "lucide-react";

const PaymentMethodList = () => {
  const paymentMethods = [
    { icon: Banknote, text: "Efectivo en Pesos, Dólares y Euros" },
    { icon: Bitcoin, text: "Criptomonedas" },
    {
      icon: Landmark,
      text: "Transferencias en pesos y dólares (cuentas de ARG) (+2%) y en dólares (cuentas de USA) (+4%)",
    },
    { icon: Wallet, text: "AirTM / Wise (+4%)" },
  ];
  return (
    <Accordion
      type="single"
      collapsible
      className="mx-auto w-full max-w-sm p-2 sm:max-w-md sm:p-4 lg:max-w-lg"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base sm:text-lg">
          Métodos de pago disponibles
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            {paymentMethods.map(({ icon: Icon, text }, index) => (
              <li key={index} className="flex flex-nowrap items-center gap-2">
                <Icon className="h-6 w-6 text-secondary-text sm:h-7 sm:w-7" />
                <p className="text-sm text-primary-text sm:text-base">{text}</p>
              </li>
            ))}
            <li className="flex flex-wrap items-center gap-2 text-red-500">
              <TriangleAlert className="h-6 w-6 sm:h-7 sm:w-7" />
              <p className="text-sm font-bold sm:text-base">
                NO TRABAJAMOS CON CUOTAS
              </p>
              <TriangleAlert className="h-6 w-6 sm:h-7 sm:w-7" />
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PaymentMethodList;
