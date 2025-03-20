import React from "react";
import { FaInstagram, FaTelegramPlane, FaFacebookMessenger } from "react-icons/fa";


const ContactButtons = () => {
  return (
    <div className="flex flex-col gap-4 text-slate-300">
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
    </div>
  );
};

export default ContactButtons;
