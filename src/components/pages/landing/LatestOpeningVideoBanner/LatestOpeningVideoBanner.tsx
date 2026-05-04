"use client";

import { useState } from "react";
import GradientBlueRed from "@/components/ui/GradientBlueRed";
import { getYoutubeEmbedUrl } from "@/lib/utils/getYoutubeEmbedUrl";
import Image from "next/image";

const videos = [
  {
    url: "https://www.youtube.com/watch?v=LSaTQPiH_sw",
    title: "Najnowsze otwarcie siłowni",
  },
  {
    url: "https://www.youtube.com/watch?v=CXY3AuUvjhw",
    title: "Poprzednie otwarcie 1",
  },
  {
    url: "https://www.youtube.com/watch?v=tK-cKWSPBBs",
    title: "Poprzednie otwarcie 2",
  },
  {
    url: "https://www.youtube.com/watch?v=a04t2fIFLx8",
    title: "Poprzednie otwarcie 3",
  },
];

export function LatestOpeningVideoBanner() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const previousVideos = videos.filter(
    (video) => video.url !== activeVideo.url,
  );

  return (
    <section className="relative my-24 overflow-hidden py-24">
      <GradientBlueRed />

      <Image
        src="/mesh/mesh-full-hd.svg"
        alt="Tło sekcji sub-hero"
        fill
        className="z-1 object-cover"
      />

      <div className="w-full max-w-360 mx-auto px-[clamp(2rem,3vw,3.75rem)] relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-black italic leading-none text-(--color-brand-blue)">
            Otwarcia siłowni
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base md:text-lg font-light leading-snug text-left md:text-center text-white">
            Otwarcie siłowni DZIK GYM to zawsze duże wydarzenie - dla Nas, dla
            samorządów, dla społeczności. Staramy się, aby miały one zawsze
            odpowiedni start.
          </p>

          <div className="mx-auto mt-8 aspect-video max-w-274 overflow-hidden rounded-2xl">
            <iframe
              key={activeVideo.url}
              src={getYoutubeEmbedUrl(activeVideo.url) ?? undefined}
              title={activeVideo.title}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="-mx-4 mt-8 overflow-x-auto no-scrollbar px-4 md:mx-auto md:overflow-visible md:px-0">
            <div className="flex w-max gap-4 md:w-auto md:justify-center md:gap-8">
              {previousVideos.map((video) => (
                <button
                  key={video.url}
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="group aspect-video w-64 shrink-0 overflow-hidden rounded-lg transition hover:scale-[1.03] border-2 border-(--color-brand-navy) hover:border-(--color-brand-blue) cursor-pointer"
                  aria-label={`Pokaż film: ${video.title}`}
                >
                  <iframe
                    src={getYoutubeEmbedUrl(video.url) ?? undefined}
                    title={video.title}
                    className="pointer-events-none h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
