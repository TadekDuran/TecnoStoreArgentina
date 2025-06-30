import React from "react";
import { ExternalLink, Play } from "lucide-react";

const SuprapixelSponsorVideos = () => {
  const youtubeSponsorVideos = [
    {
      id: "XTovBpbCyF0",
      title: "TODO sobre #NintendoSwitch2, resumido",
    },
    {
      id: "I5rbjarQdUQ",
      title: "Novedades en sistemas operativos Apple!",
    },
    {
      id: "P4B3sxF9MFk",
      title: "POCO X7 Pro: edición IRON MAN!",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-xl font-bold text-primary-text md:text-2xl lg:text-3xl">
          ¡Lo mejor de la tecnología con SupraPixel!
        </h2>
        <p className="text-sm font-medium text-primary-text md:text-2xl">
          De la mano de TecnoStore
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        {youtubeSponsorVideos.map((video, index) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block transform overflow-hidden rounded-xl border-2 border-slate-700/50 bg-secondary-background shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-red-500/70 hover:bg-tertiary-background hover:shadow-2xl hover:shadow-red-500/20"
          >
            <div className="relative overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-64 lg:h-72"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-0 flex scale-75 transform items-center justify-center opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <div className="rounded-full bg-red-600 p-4 shadow-2xl transition-colors duration-200 hover:bg-red-700">
                  <Play className="ml-1 h-8 w-8 fill-white text-white" />
                </div>
              </div>

              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white opacity-90">
                <ExternalLink className="h-3 w-3" />
                YouTube
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-base font-bold leading-tight text-primary-text transition-colors duration-200 group-hover:text-red-400 md:text-lg lg:text-xl">
                {video.title}
              </h3>

              <div className="mt-3 flex items-center justify-between text-sm text-secondary-text">
                <span className="font-medium">SupraPixel</span>
                <span className="font-medium text-red-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Ver en YouTube →
                </span>
              </div>
            </div>

            <div className="h-1 origin-left scale-x-0 transform bg-gradient-to-r from-red-500 to-red-600 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.youtube.com/@SupraPixel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-red-700 hover:shadow-xl"
        >
          <ExternalLink className="h-5 w-5" />
          Ver más en el canal de SupraPixel
        </a>
      </div>
    </section>
  );
};

export default SuprapixelSponsorVideos;
