import React from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";

const ContactButtons = () => {
  return (
    <div className="flex flex-col gap-4 text-button-text">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/tecnostorearg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-600 p-3 font-semibold text-white transition-opacity duration-300 hover:opacity-90"
      >
        <FaInstagram size={24} />
        <span>Hablanos por Instagram</span>
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/TecnoStoreArg"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-4 rounded-md bg-[#0088CC] p-3 font-semibold text-white transition-colors duration-300 hover:bg-[#0077B5]"
      >
        <FaTelegramPlane size={24} />
        <span>Hablanos por Telegram</span>
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/TecnoStoreFans"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-md bg-[#116BFF] p-3 font-semibold text-white transition-colors duration-300 hover:bg-[#0960ed]"
      >
        <FaFacebookMessenger size={24} />
        <span>Hablanos por Messenger</span>
      </a>
      {/* WhatsApp */}
      <a
        href="https://wa.me/message/PNQ3NZQBCRVXE1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-md bg-[#1c994a] p-3 font-semibold text-white transition-colors duration-300 hover:bg-[#1EB85A] focus:ring-[#25D366]"
      >
        <FaWhatsapp size={24} />
        <span>Hablanos por WhatsApp</span>
      </a>
    </div>
  );
};

export default ContactButtons;
