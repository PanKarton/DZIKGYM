import { GymPartner, GymPartnersResponse } from "@/types/gym-partners";
import { requireEnv } from "../utils/requireEnv";
import { REVALIDATE } from "@/data/revalidate";
import { gymPartnersParam } from "./params";

export async function getPartnersLogos(): Promise<GymPartner[]> {
  const url = new URL(requireEnv("STORYBLOK_API_URL"));

  url.searchParams.set("starts_with", gymPartnersParam);
  url.searchParams.set("token", requireEnv("STORYBLOK_API_KEY"));

  const res = await fetch(url.toString(), {
    next: { revalidate: REVALIDATE, tags: ["gyms-locations"] },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch gym locations: ${res.statusText}`);
  }

  const data = (await res.json()) as GymPartnersResponse;

  return data.stories;
}
