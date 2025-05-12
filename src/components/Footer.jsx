import Link from "next/link"
import { ExternalLink, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary-background text-primary-text py-5 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Contact column */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold border-b border-white/10 pb-1">Nuestras redes sociales</h3>
            <div className="flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-secondary-text hover:text-white transition-colors group"
                aria-label="Contacto"
              >
                <span>Contacto</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Location column */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold border-b border-white/10 pb-1">Ubicación</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-secondary-text" />
                <p className="text-primary-text text-sm">Santos Lugares, Buenos Aires</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-secondary-text" />
                <p className="text-primary-text text-sm">Núñez, Ciudad Autónoma de Buenos Aires</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-3 text-xs text-primary-text">
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
