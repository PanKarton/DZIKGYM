import { GymPartner, GymPartnersResponse } from "@/types/gym-partners";
import { requireEnv } from "../utils/requireEnv";

export async function getPartnersLogos(): Promise<GymPartner[]> {
  const res = await fetch(
    `${requireEnv("STORYBLOK_API_URL")}?&starts_with=images&token=${requireEnv("STORYBLOK_API_KEY")}`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch gym locations: ${res.statusText}`);
  }

  const data = (await res.json()) as GymPartnersResponse;

  return data.stories;
}
