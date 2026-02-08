import { ALLOWED_ORIGINS } from "@/config/sercurity";

export function assertOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");

  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    return true;
  }

  if (!origin && host) {
    return ALLOWED_ORIGINS.some((allowed) => {
      try {
        return new URL(allowed).host === host;
      } catch {
        return false;
      }
    });
  }
  return false;
}
