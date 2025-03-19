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
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Métodos de pago disponibles</AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-2">
            {paymentMethods.map(({ icon: Icon, text }, index) => (
              <li key={index} className="flex items-center gap-2">
                <Icon size={20} />
                <p>{text}</p>
              </li>
            ))}
            <li className="flex items-center gap-2 text-red-600">
              <TriangleAlert />
              <p className="font-bold">NO TRABAJAMOS CON CUOTAS</p>
              <TriangleAlert />
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PaymentMethodList;
