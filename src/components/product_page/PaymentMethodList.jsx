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
    { icon: Bitcoin, text: "Criptomonedas (+1.5%)" },
    {
      icon: Landmark,
      text: "Transferencias en pesos (+3%) y en dólares (+5%) (solo cuentas de Estados Unidos)",
    },
    { icon: Wallet, text: "AirTM / Wise (+5%)" },
  ];
  return (
<Accordion 
  type="single" 
  collapsible 
  className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto p-2 sm:p-4"
>
  <AccordionItem value="item-1">
    <AccordionTrigger className="text-base sm:text-lg">
      Métodos de pago disponibles
    </AccordionTrigger>
    <AccordionContent>
      <ul className="space-y-2">
        {paymentMethods.map(({ icon: Icon, text }, index) => (
          <li key={index} className="flex flex-nowrap items-center gap-2">
            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            <p className="text-sm sm:text-base">{text}</p>
          </li>
        ))}
        <li className="flex flex-wrap items-center gap-2 text-red-600">
          <TriangleAlert className="w-6 h-6 sm:w-7 sm:h-7" />
          <p className="font-bold text-sm sm:text-base">NO TRABAJAMOS CON CUOTAS</p>
          <TriangleAlert className="w-6 h-6 sm:w-7 sm:h-7" />
        </li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>
  );
};

export default PaymentMethodList;
