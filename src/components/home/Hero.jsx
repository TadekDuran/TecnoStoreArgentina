"use client";
import { Truck, CircleDollarSign, ShoppingCart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import CountUp from "react-countup";
import centralLogo from "@/assets/logo_mini.png";

const stats = [
  { icon: Truck, label: "Envíos a todo el país" },
  { icon: CircleDollarSign, label: "Diversas formas de pago" },
  {
    icon: FaInstagram,
    label: (
      <>
        + <CountUp start={0} end={120} duration={4.5} suffix="mil" />{" "}
        seguidores
      </>
    ),
  },
  {
    icon: ShoppingCart,
    label: (
      <>
        + <CountUp start={0} end={50} duration={4.5} suffix="mil" /> clientes
        felices
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section className="w-full overflow-hidden text-gray-200">
      {/* Sección de fondo con logo */}
      <div className="max-w-7xl mx-auto flex h-40 px-4 items-center justify-center sm:h-64 md:h-80">
        <img
          src={centralLogo.src}
          alt="TecnoStore Logo"
          className="object-contain opacity-80"
        />
      </div>

      {/* Tarjetas de stats */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {stats.map(({ icon: Icon, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:p-4"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 p-2 text-primary-text sm:mb-3 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-center text-xs font-bold text-primary-text sm:text-sm md:text-base">
                {label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
