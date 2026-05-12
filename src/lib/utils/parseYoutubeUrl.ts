import { getYoutubeVideoId } from "./getYoutubeVideoId";

export function parseYoutubeUrl(url: string) {
  const videoId = getYoutubeVideoId(url);

  if (!videoId) {
    return null;
  }

  return {
    videoId,
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
    thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  };
}
