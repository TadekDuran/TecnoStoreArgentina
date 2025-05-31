"use client";
import React from "react";
import { Truck, CircleDollarSign, ShoppingCart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="relative min-h-[280px] w-full overflow-hidden md:min-h-[400px] lg:min-h-[450px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full max-w-6xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dyifeei20/image/upload/v1748637591/Hero-Background_v6kkei.png)`,
            }}
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />

      <div className="relative z-10 flex h-full items-center justify-center pt-16 md:pt-24">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="mb-6 text-center md:mb-10">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
              TECNO<span className="text-blue-400">STORE</span>
            </h1>
            <p className="mt-2 text-lg text-white opacity-90 sm:text-xl md:text-2xl">
              Tecnología de vanguardia a tu alcance
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 p-2 text-white sm:mb-3 sm:h-12 sm:w-12">
                <Truck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-center text-xs font-bold text-white sm:text-sm md:text-base">
                Envíos a todo el país
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 p-2 text-white sm:mb-3 sm:h-12 sm:w-12">
                <CircleDollarSign className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-center text-xs font-bold text-white sm:text-sm md:text-base">
                Diversas formas de pago
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 p-2 text-white sm:mb-3 sm:h-12 sm:w-12">
                <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-center text-xs font-bold text-white sm:text-sm md:text-base">
                +
                <CountUp start={0} end={120} duration={4.5} suffix="mil " />
                seguidores
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 sm:p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 p-2 text-white sm:mb-3 sm:h-12 sm:w-12">
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h2 className="text-center text-xs font-bold text-white sm:text-sm md:text-base">
                +
                <CountUp start={0} end={50} duration={4.5} suffix="mil " />
                clientes felices
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
