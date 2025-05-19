import React from "react";

const SuprapixelSponsorVideos = () => {

  const youtubeSponsorVideos = [
    {
      id: "P4B3sxF9MFk",
      title: "POCO X7 Pro: edición IRON MAN!",
    },
    {
      id: "XTovBpbCyF0",
      title: "TODO sobre #NintendoSwitch2, resumido",
    },
    {
      id: "tCvP2sb8sr8",
      title: "Información del Xiaomi 14 Ultra!",
    },
  ];

  return (
    <div className="w-2/3 pt-6 px-4 text-center">
      <p className="mx-auto font-bold max-w-2xl text-sm md:text-xl text-primary-text">
        ¡Explorá los mejores videos de SupraPixel!
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {youtubeSponsorVideos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg border border-slate-700 transition hover:border-slate-500 bg-secondary-background hover:bg-tertiary-background"
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm md:text-lg font-semibold text-primary-text">
                {video.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default SuprapixelSponsorVideos;
