import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import thumb1 from "@/assets/fechu_video_thumb_1.webp";
import thumb2 from "@/assets/fechu_video_thumb_2.webp";
import thumb3 from "@/assets/fechu_video_thumb_3.webp";
import thumb4 from "@/assets/francis_video_thumb_1.jpg";
import thumb5 from "@/assets/francis_video_thumb_2.jpg";

const FechuSponsorVideos = () => {
  const reels = [
    {
      id: 1,
      title: "iPHONE NUEVO GASTANDO MENOS #iPhone15 #iPhone16e",
      thumbnail: thumb1,
      reelUrl: "https://www.instagram.com/reel/DH1rFnexfxu/",
    },
    {
      id: 2,
      title: "iPhone 16e versus iPhone 16 Pro Max #iPhone",
      thumbnail: thumb2,
      reelUrl: "https://www.instagram.com/reel/DG9BmKUi70p/",
    },
    {
      id: 3,
      title: "LA NUEVA VIDA DE LOS AIRPODS #airpodspro",
      thumbnail: thumb3,
      reelUrl: "https://www.instagram.com/reel/DBmlRypRm4n/",
    },
    {
      id: 4,
      title: "¿Los celulares nos escuchan? Acá lo respondemos",
      thumbnail: thumb4,
      reelUrl: "https://www.instagram.com/reel/DLYg0vgRrOM/",
    },
    {
      id: 5,
      title: "¿Productos saludables en estaciones de servicio?",
      thumbnail: thumb5,
      reelUrl: "https://www.instagram.com/reel/DKanJICMC0R/",
    },
  ];

  return (
    <section className="w-full px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-lg font-bold text-primary-text md:text-xl lg:text-2xl">
          ¡Más sobre tecnología y estilo de vida con los imperdibles de Fechu y Francis!
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {reels.map((reel) => (
            <Card
              key={reel.id}
              className="group h-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link
                href={reel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden">
                  <img
                    src={reel.thumbnail.src || "/placeholder.svg"}
                    alt={`Thumbnail de ${reel.title}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ExternalLink className="h-6 w-6 text-white md:h-8 md:w-8" />
                  </div>
                </div>

                <CardContent className="flex h-16 items-center p-3">
                  <h3 className="line-clamp-2 text-center text-xs font-medium leading-tight md:text-sm">
                    {reel.title}
                  </h3>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://www.instagram.com/fechu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Seguir a Fechu en Instagram
          </a>
          <a
            href="https://www.youtube.com/@FrancisOK/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-red-700 hover:shadow-xl"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Ver canal de Francis en YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default FechuSponsorVideos;
