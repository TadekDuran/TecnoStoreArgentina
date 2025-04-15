import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center border-t border-white/10 bg-secondary-background p-4 text-primary-text">
      <h1>Buenos Aires, Argentina</h1>
      <Link
        href="/contact"
        target="_blank"
        className="flex items-center gap-2 text-xl font-bold underline"
      >
        Contacto
        <ExternalLink size={15} />
      </Link>

      <p className="mt-1 text-xs">
        Desarrollado por{" "}
        <a
          href="https://github.com/TadekDuran/"
          target="_blank"
          className="underline"
        >
          Tadek Duran
        </a>
      </p>
    </footer>
  );
};

export default Footer;
