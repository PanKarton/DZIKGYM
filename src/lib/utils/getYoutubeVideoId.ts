export function getYoutubeVideoId(url: string): string | null {
  try {
    const parsedUrl = new URL(url);

    // youtu.be/abc123
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }

    // youtube.com/watch?v=abc123
    const watchId = parsedUrl.searchParams.get("v");

    if (watchId) {
      return watchId;
    }

    // youtube.com/live/abc123
    if (parsedUrl.pathname.startsWith("/live/")) {
      return parsedUrl.pathname.split("/live/")[1];
    }

    // youtube.com/embed/abc123
    if (parsedUrl.pathname.includes("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1];
    }

    return null;
  } catch {
    return null;
  }
}
