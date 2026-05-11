export type OpeningVideos = OpeningVideoResponse[];

export interface OpeningVideoResponse {
  name: string;
  created_at: string;
  published_at: string;
  updated_at: string;
  id: number;
  uuid: string;
  content: OpeningVideo;
  slug: string;
  full_slug: string;
  sort_by_date: string;
  position: number;
  tag_list: string[];
  is_startpage: boolean;
  parent_id: number;
  meta_data: string;
  group_id: string;
  first_published_at: string;
  release_id: string;
  lang: string;
  path: string;
  alternates: string[];
  default_full_slug: string;
  translated_slugs: string;
}

export interface OpeningVideo {
  _uid: string;
  ytLink: string;
  component: string;
  miastoNazwa: string;
}
