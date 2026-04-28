export function getYoutubeEmbedUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    // youtu.be/abc123
    if (parsedUrl.hostname === "youtu.be") {
      const id = parsedUrl.pathname.slice(1);
      return `https://www.youtube-nocookie.com/embed/${id}`;
    }

    // youtube.com/watch?v=abc123
    if (parsedUrl.searchParams.get("v")) {
      const id = parsedUrl.searchParams.get("v");
      return `https://www.youtube-nocookie.com/embed/${id}`;
    }

    // youtube.com/embed/abc123
    if (parsedUrl.pathname.includes("/embed/")) {
      return url.replace("youtube.com", "youtube-nocookie.com");
    }

    return null;
  } catch {
    return null;
  }
}
