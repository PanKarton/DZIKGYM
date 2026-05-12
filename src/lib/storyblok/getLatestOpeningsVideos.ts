import { OpeningVideoResponse } from "@/types/opening-videos";
import { requireEnv } from "../utils/requireEnv";
import { REVALIDATE } from "@/data/revalidate";
import { gymYtVideosParam } from "./params";

export async function getLatestOpeningsVideos(): Promise<
  [OpeningVideoResponse]
> {
  const url = new URL(requireEnv("STORYBLOK_API_URL"));

  url.searchParams.set("starts_with", gymYtVideosParam);
  url.searchParams.set("token", requireEnv("STORYBLOK_API_KEY"));

  const res = await fetch(url.toString(), {
    next: { revalidate: REVALIDATE, tags: ["gyms-locations"] },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch gym locations: ${res.statusText}`);
  }

  const data = (await res.json()) as { stories: [OpeningVideoResponse] };

  return data.stories;
}
