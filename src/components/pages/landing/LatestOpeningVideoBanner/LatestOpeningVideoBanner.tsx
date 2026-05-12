"use client";

import { useMemo, useState } from "react";
import GradientBlueRed from "@/components/ui/GradientBlueRed";
import Image from "next/image";
import { OpeningVideos } from "@/types/opening-videos";
import EXTERNAL_HREFS from "@/data/texternal-hrefs";
import { parseYoutubeUrl } from "@/lib/utils/parseYoutubeUrl";
import { FaPlay } from "react-icons/fa";

export function LatestOpeningVideoBanner({
  videos,
}: {
  videos: OpeningVideos;
}) {
  const videosData = useMemo(
    () =>
      videos
        .map((video) => {
          const parsed = parseYoutubeUrl(video.content.ytLink);

          if (!parsed) {
            return null;
          }

          return {
            ...video.content,
            embedUrl: parsed.embedUrl,
            thumbnail: parsed.thumbnail,
          };
        })
        .filter((video): video is NonNullable<typeof video> => video !== null),
    [videos],
  );

  const [activeVideo, setActiveVideo] = useState(videosData[0]);

  const previousVideos = videosData.filter(
    (video) => video.ytLink !== activeVideo.ytLink,
  );

  if (!activeVideo) {
    return null;
  }

  return (
    <section className="relative my-24 overflow-hidden py-24 content-max-width">
      <GradientBlueRed />

      <Image
        src="/mesh/mesh-full-hd.svg"
        alt=""
        fill
        className="z-1 object-cover"
      />

      <div className="relative z-10 mx-auto w-full max-w-360">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-black italic leading-none text-(--color-brand-blue)">
            Otwarcia siłowni
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-left text-base font-light leading-snug text-(--color-primary)md:text-center md:text-lg">
            Otwarcie siłowni DZIK GYM to zawsze duże wydarzenie - dla Nas, dla
            samorządów i dla lokalnej społeczności. Dbamy o to, aby każda nowa
            lokalizacja miała odpowiedni start.
          </p>

          <div className="mt-8 aspect-video max-w-274 overflow-hidden rounded-2xl">
            <iframe
              key={activeVideo.ytLink}
              src={`${activeVideo.embedUrl}?autoplay=0&rel=0&modestbranding=1`}
              title={activeVideo.miastoNazwa}
              className="h-full w-full border-0"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="-mx-4 mt-8 overflow-x-auto px-4 no-scrollbar md:px-0 lg:mx-auto lg:overflow-visible">
            <div className="flex w-max gap-4 md:w-auto md:justify-center md:gap-8">
              {previousVideos.map((video) => (
                <button
                  key={video.ytLink}
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="group relative aspect-video w-64 shrink-0 overflow-hidden rounded-lg border-2 border-(--color-brand-navy) transition hover:scale-[1.03] hover:border-(--color-brand-blue) cursor-pointer"
                  aria-label={`Pokaż film: ${video.miastoNazwa}`}
                >
                  <Image
                    src={video.thumbnail}
                    alt=""
                    fill
                    sizes="256px"
                    className="object-cover transition group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/35" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-black transition group-hover:scale-110">
                      <FaPlay />
                    </span>
                  </div>

                  <span className="absolute bottom-2 left-2 right-2 line-clamp-1 text-left text-sm font-bold italic text-white">
                    {video.miastoNazwa}
                  </span>
                </button>
              ))}

              <a
                href={EXTERNAL_HREFS.OPENING_VIDEOS_PLAYLIST}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-video w-64 shrink-0 items-center justify-center rounded-lg bg-(--color-brand-blue) text-sm font-bold italic transition hover:scale-[1.03] hover:bg-(--color-brand-blue-hover)"
              >
                Zobacz wszystkie →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
