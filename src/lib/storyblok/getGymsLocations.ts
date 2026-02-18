import { GymLocation } from "@/types/gym-location";
import { requireEnv } from "../utils/requireEnv";

export interface StoryRoot {
  stories: Story[];
  cv: number;
  rels: [];
  links: [];
}

export interface Story {
  name: string;
  created_at: string;
  published_at: string;
  updated_at: string;
  id: number;
  uuid: string;
  content: Content;
  slug: string;
  full_slug: string;
  sort_by_date: null;
  position: number;
  tag_list: [];
  is_startpage: boolean;
  parent_id: number;
  meta_data: null;
  group_id: string;
  first_published_at: string;
  release_id: null;
  lang: string;
  path: null;
  alternates: [];
  default_full_slug: null;
  translated_slugs: null;
}

export interface Content {
  id: string;
  LAT: string;
  LNG: string;
  _uid: string;
  Miasto: string;
  Adres: string;
  component: string;
}

export async function getGymsLocations(): Promise<GymLocation[]> {
  const res = await fetch(
    `${requireEnv("STORYBLOK_API_URL")}?&starts_with=lokalizacje&token=${requireEnv("STORYBLOK_API_KEY")}`,
    { next: { revalidate: 60 } },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch gym locations: ${res.statusText}`);
  }

  const data = await res.json();

  return data.stories.map((story: Story) => ({
    id: story.content._uid,
    city: story.content.Miasto,
    address: story.content.Adres,
    lat: parseFloat(story.content.LAT),
    lng: parseFloat(story.content.LNG),
  }));
}
