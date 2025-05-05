import React from "react";

const SponsorVideos = () => {

  const sponsorVideos = [
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
    <div className="mt-12 px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold text-primary-text sm:text-4xl">
        Conocé a nuestro sponsor
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-secondary-text">
        Explorá los últimos videos de SupraPixel
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sponsorVideos.map((video) => (
          <a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg border border-slate-700 transition hover:border-slate-500"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary-text">
                {video.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default SponsorVideos;
