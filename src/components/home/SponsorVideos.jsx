import React, { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

const SponsorVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=3`,
        );
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setVideos(data.items);
        } else {
          setError(new Error("No se encontraron videos."));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="mt-12 px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold text-slate-400 sm:text-4xl">
        Conoce a nuestro sponsor
      </h2>
      <p className="mx-auto max-w-2xl text-lg text-gray-400">
        Explora los últimos videos de SupraPixel
      </p>

      {loading && (
        <div className="flex h-24 items-center justify-center">
          <LoaderCircle className="h-12 w-12 animate-spin text-white" />
        </div>
      )}

      {error && (
        <div className="mx-auto mt-4 max-w-2xl rounded-lg border border-red-500 bg-red-900/30 p-4 text-center">
          <p className="font-medium text-red-300">{error.message}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.id.videoId}
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-slate-700 transition hover:border-slate-500"
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-300">
                  {video.snippet.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SponsorVideos;
