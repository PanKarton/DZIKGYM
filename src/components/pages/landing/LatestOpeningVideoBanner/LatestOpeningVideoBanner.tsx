"use client";

import { useState } from "react";
import GradientBlueRed from "@/components/ui/GradientBlueRed";
import { getYoutubeEmbedUrl } from "@/lib/utils/getYoutubeEmbedUrl";
import Image from "next/image";
import { OpeningVideos } from "@/types/opening-videos";
import EXTERNAL_HREFS from "@/data/texternal-hrefs";

// const videos = [
//   {
//     url: "https://www.youtube.com/watch?v=LSaTQPiH_sw",
//     title: "Najnowsze otwarcie siłowni",
//   },
//   {
//     url: "https://www.youtube.com/watch?v=CXY3AuUvjhw",
//     title: "Poprzednie otwarcie 1",
//   },
//   {
//     url: "https://www.youtube.com/watch?v=tK-cKWSPBBs",
//     title: "Poprzednie otwarcie 2",
//   },
//   {
//     url: "https://www.youtube.com/watch?v=a04t2fIFLx8",
//     title: "Poprzednie otwarcie 3",
//   },
// ];

export function LatestOpeningVideoBanner({
  videos,
}: {
  videos: OpeningVideos;
}) {
  const videosData = videos.map((video) => video.content);

  const [activeVideo, setActiveVideo] = useState(videosData[0]);

  const previousVideos = videos.filter(
    (video) => video.content.ytLink !== activeVideo.ytLink,
  );

  console.log(getYoutubeEmbedUrl(videosData[2].ytLink));

  return (
    <section className="relative my-24 overflow-hidden py-24">
      <GradientBlueRed />

      <Image
        src="/mesh/mesh-full-hd.svg"
        alt="Tło sekcji sub-hero"
        fill
        className="z-1 object-cover"
      />

      <div className="w-full max-w-360 mx-auto  relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-black italic leading-none text-(--color-brand-blue)">
            Otwarcia siłowni
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-base md:text-lg font-light leading-snug text-left md:text-center text-white">
            Otwarcie siłowni DZIK GYM to zawsze duże wydarzenie - dla Nas, dla
            samorządów, dla społeczności. Staramy się, aby miały one zawsze
            odpowiedni start.
          </p>

          <div className="mx-[clamp(2rem,3vw,3.75rem)] mt-8 aspect-video max-w-274 overflow-hidden rounded-2xl">
            <iframe
              key={activeVideo.ytLink}
              src={getYoutubeEmbedUrl(activeVideo.ytLink) ?? undefined}
              title={activeVideo.miastoNazwa}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="-mx-4 mt-8 overflow-x-auto no-scrollbar px-4 lg:mx-auto lg:overflow-visible md:px-0 ">
            <div className="flex w-max gap-4 md:w-auto md:justify-center md:gap-8">
              {previousVideos.map((video) => (
                <button
                  key={video.content.ytLink}
                  type="button"
                  onClick={() => setActiveVideo(video.content)}
                  className="group aspect-video w-64 shrink-0 overflow-hidden rounded-lg transition hover:scale-[1.03] border-2 border-(--color-brand-navy) hover:border-(--color-brand-blue) cursor-pointer"
                  aria-label={`Pokaż film: ${video.content.miastoNazwa}`}
                >
                  <iframe
                    src={getYoutubeEmbedUrl(video.content.ytLink) ?? undefined}
                    title={video.content.miastoNazwa}
                    className="pointer-events-none h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </button>
              ))}
              <a
                href={EXTERNAL_HREFS.openingVideosPlaylist}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group aspect-video w-64 shrink-0 text-sm  rounded-lg transition hover:scale-[1.03] bg-(--color-brand-blue)  hover:bg-(--color-brand-blue-hover)  cursor-pointer  font-bold italic">
                  Zobacz wszystkie →
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
