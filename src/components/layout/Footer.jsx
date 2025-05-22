import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";

const Footer = () => {
  const networkList = [
    {
      id: 1,
      name: "Instragram",
      link: "https://www.instagram.com/tecnostorearg",
    },
    {
      id: 2,
      name: "Telegram",
      link: "https://t.me/TecnoStoreArg",
    },
    {
      id: 3,
      name: "Facebook",
      link: "https://m.me/TecnoStoreFans",
    },
  ];
  return (
    <footer className="border-t border-white/10 bg-secondary-background px-8 py-3 text-primary-text">
      <div className="mx-auto flex flex-col items-center">
        <div className="grid w-full grid-cols-1 justify-center gap-4 pb-2 text-center md:grid-cols-2 md:justify-start md:text-left">
          <div className="flex flex-col items-center border-b border-white/10 pb-3 md:items-start md:border-none md:pb-0">
            <h3 className="border-white/10 pb-1 text-base font-semibold sm:text-xl md:w-full md:border-b">
              Nuestras redes sociales
            </h3>
            <div className="flex w-fit flex-col items-center px-2 md:items-start md:pt-2">
              {networkList.map((network) => (
                <Link
                  key={network.id}
                  href={network.link}
                  className="group my-1 flex items-center gap-1 text-sm font-bold text-secondary-text transition-colors hover:text-white sm:text-base"
                  aria-label={network.name}
                >
                  <span>{network.name}</span>
                  <ExternalLink
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center pb-2 md:items-start md:space-y-2 md:pb-0">
            <h3 className="border-white/10 pb-1 text-base font-semibold sm:text-xl md:w-full md:border-b">
              Ubicación
            </h3>
            <div className="flex flex-col items-center space-y-2 md:items-start">
              <div className="flex items-center gap-2 md:items-start">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-secondary-text"
                />
                <p className="text-sm text-primary-text">
                  Núñez, Ciudad Autónoma de Buenos Aires
                </p>
              </div>
              <div className="flex items-center gap-2 md:items-start">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-secondary-text"
                />
                <p className="text-sm text-primary-text">
                  Santos Lugares, Buenos Aires
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-3 text-center text-xs text-primary-text md:text-left">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-1 md:mb-0">
              © {new Date().getFullYear()} TecnoStore. Todos los derechos
              reservados.
            </p>
            <p>
              Desarrollado por{" "}
              <a
                href="https://github.com/TadekDuran/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                aria-label="Visitar perfil de GitHub del desarrollador"
              >
                Tadek Duran
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
