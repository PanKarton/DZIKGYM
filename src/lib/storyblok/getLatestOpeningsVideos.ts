import { OpeningVideo, OpeningVideoResponse } from "@/types/opening-videos";
import { requireEnv } from "../utils/requireEnv";

export async function getLatestOpeningsVideos(): Promise<
  [OpeningVideoResponse]
> {
  const res = await fetch(
    `${requireEnv("STORYBLOK_API_URL")}?&starts_with=otwarcia-yt&token=${requireEnv("STORYBLOK_API_KEY")}`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch video URLs: ${res.statusText}`);
  }

  const data = (await res.json()) as { stories: [OpeningVideoResponse] };

  return data.stories;
}
