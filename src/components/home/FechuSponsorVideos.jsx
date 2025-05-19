import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import thumb1 from "@/assets/fechu_video_thumb_1.webp";
import thumb2 from "@/assets/fechu_video_thumb_2.webp";
import thumb3 from "@/assets/fechu_video_thumb_3.webp";

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
  ];

  return (
    <div className="mt-4 grid w-2/3 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <p className="col-span-full mx-auto my-2 max-w-2xl text-center text-sm font-bold text-primary-text md:text-xl">
        ¡Explorá los mejores reels de Fechu!
      </p>
      {reels.map((reel) => (
        <Card
          key={reel.id}
          className="group mx-auto flex h-[350px] max-w-[220px] flex-col overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <Link
            href={reel.reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col"
          >
            <div className="relative h-[300px] w-full flex-shrink-0">
              <img
                src={reel.thumbnail.src || "/placeholder.svg"}
                alt="Miniatura del Reel"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ExternalLink className="h-8 w-8 text-secondary-text" />
              </div>
            </div>
            <CardContent className="mt-auto bg-secondary-background p-2">
              <h3 className="line-clamp-2 text-xs font-medium">{reel.title}</h3>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default FechuSponsorVideos;
