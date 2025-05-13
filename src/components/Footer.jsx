import Link from "next/link"
import { ExternalLink, MapPin } from "lucide-react"

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
  ]
  return (
    <footer className="bg-secondary-background text-primary-text py-3 px-8 border-t border-white/10">
      <div className="mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 text-center md:text-left justify-center md:justify-start md:grid-cols-2 gap-4 pb-2 w-full">
          <div className="flex flex-col items-center md:items-start border-b md:border-none pb-3 md:pb-0 border-white/10">
            <h3 className="md:w-full text-base sm:text-xl font-semibold md:border-b border-white/10 pb-1">Nuestras redes sociales</h3>
            <div className="px-2 md:pt-2 flex flex-col items-center md:items-start w-fit">
              {networkList.map((network) => (
                <Link
                  key={network.id}
                  href={network.link}
                  className="my-1 flex text-sm sm:text-base items-center gap-1 text-secondary-text font-bold hover:text-white transition-colors group"
                  aria-label={network.name}
                >
                  <span>{network.name}</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:space-y-2 pb-2 md:pb-0 flex flex-col items-center md:items-start">
            <h3 className="text-base sm:text-xl font-semibold md:w-full md:border-b border-white/10 pb-1">Ubicación</h3>
            <div className="space-y-2 flex flex-col items-center md:items-start">
              <div className="flex items-center md:items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-secondary-text" />
                <p className="text-primary-text text-sm">Santos Lugares, Buenos Aires</p>
              </div>
              <div className="flex items-center md:items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-secondary-text" />
                <p className="text-primary-text text-sm">Núñez, Ciudad Autónoma de Buenos Aires</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-3 text-xs text-primary-text w-full text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-1 md:mb-0">© {new Date().getFullYear()} TecnoStore. Todos los derechos reservados.</p>
            <p>
              Desarrollado por{" "}
              <a
                href="https://github.com/TadekDuran/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Visitar perfil de GitHub del desarrollador"
              >
                Tadek Duran
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
