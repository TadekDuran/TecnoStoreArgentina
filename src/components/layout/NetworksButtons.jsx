"use client";
import React, { useEffect, useState } from "react";
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useScrollPosition } from "@/hooks/use-scroll-position";

const NetworksButtons = () => {
  const scrollPosition = useScrollPosition();
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const checkFooterProximity = () => {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        const footerPosition =
          footerElement.getBoundingClientRect().top + window.scrollY;
        const viewportHeight = window.innerHeight;
        const buffer = 10;

        setIsNearFooter(
          scrollPosition + viewportHeight > footerPosition - buffer,
        );
      }
    };

    checkFooterProximity();

    window.addEventListener("resize", checkFooterProximity);
    return () => window.removeEventListener("resize", checkFooterProximity);
  }, [scrollPosition]);

  const telegramUrl = "https://t.me/TecnoStoreArg";
  const instagramUrl = "https://www.instagram.com/tecnostorearg";
  const whatsAppUrl = "https://wa.me/message/PNQ3NZQBCRVXE1";
  const buttonBaseClass =
    "fixed z-50 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-14 lg:w-14";

  const iconBaseClass = "h-5 w-5 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7";

  const verticalPosition = "bottom-4";

  const hideWhenNearFooter = isNearFooter
    ? "opacity-0 pointer-events-none"
    : "opacity-100";

  return (
    <>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBaseClass} ${verticalPosition} left-4 bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity duration-300 hover:opacity-90 focus:ring-pink-600 ${hideWhenNearFooter}`}
        aria-label="Follow us on Instagram"
      >
        <FaInstagram className={iconBaseClass} />
      </a>
      <a
        href={telegramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBaseClass} ${verticalPosition} left-16 bg-[#0088cc] hover:bg-[#0077b3] focus:ring-[#0088cc] sm:left-20 md:left-20 lg:left-24 ${hideWhenNearFooter}`}
        aria-label="Contact us on Telegram"
      >
        <FaTelegramPlane className={iconBaseClass} />
      </a>
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonBaseClass} ${verticalPosition} left-28 bg-[#25D366] hover:bg-[#1EB85A] focus:ring-[#25D366] sm:left-36 md:left-36 lg:left-44 ${hideWhenNearFooter}`}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className={iconBaseClass} />
      </a>
    </>
  );
};

export default NetworksButtons;
