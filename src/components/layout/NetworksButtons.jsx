"use client";
import React, { useEffect, useState } from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { useScrollPosition } from "@/hooks/use-scroll-position";

const NetworksButtons = () => {
  const scrollPosition = useScrollPosition();
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const checkFooterProximity = () => {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        // Calcular la distancia entre el scroll actual y el footer
        const footerPosition =
          footerElement.getBoundingClientRect().top + window.scrollY;
        const viewportHeight = window.innerHeight;
        const buffer = 10; // Buffer en píxeles para activar el cambio antes de llegar al footer

        // Si estamos cerca del footer, activar el estado
        setIsNearFooter(
          scrollPosition + viewportHeight > footerPosition - buffer,
        );
      }
    };

    checkFooterProximity();

    // También verificar al cambiar el tamaño de la ventana
    window.addEventListener("resize", checkFooterProximity);
    return () => window.removeEventListener("resize", checkFooterProximity);
  }, [scrollPosition]);

  const telegramUrl = "https://t.me/TecnoStoreArg";
  const instagramUrl = "https://www.instagram.com/tecnostorearg";
  const buttonBaseClass =
    "fixed z-50 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-14 lg:w-14";

  // Tamaño de iconos compartido
  const iconBaseClass = "h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7";

  // Posición vertical basada en la proximidad al footer
  const verticalPosition = isNearFooter
    ? "bottom-[340px] sm:bottom-[220px]" // Posición elevada cuando está cerca del footer
    : "bottom-4"; // Posición normal

  return (
    <>
      {/* Botón de Instagram */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBaseClass} ${verticalPosition} left-4 bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-300 hover:opacity-90 focus:ring-pink-600`}
        aria-label="Follow us on Instagram"
      >
        <FaInstagram className={iconBaseClass} />
      </a>

      {/* Botón de Telegram */}
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBaseClass} ${verticalPosition} left-16 bg-[#0088cc] hover:bg-[#0077b3] focus:ring-[#0088cc] sm:left-20 md:left-20 lg:left-24`}
        aria-label="Contact us on Telegram"
      >
        <FaTelegramPlane className={iconBaseClass} />
      </a>
    </>
  );
};

export default NetworksButtons;
