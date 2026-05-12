export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export const COOKIE_CONSENT_KEY = "cookie-consent";
const CONSENT_EXPIRY_DAYS = 365;

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_CONSENT_KEY}=`));

  if (!match) return null;

  try {
    return JSON.parse(decodeURIComponent(match.split("=")[1])) as CookieConsent;
  } catch {
    return null;
  }
}

export function removeCookieConsent() {
  document.cookie = `${COOKIE_CONSENT_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax`;
  window.location.reload();
}

export function setCookieConsent(consent: CookieConsent) {
  const expires = new Date();
  expires.setDate(expires.getDate() + CONSENT_EXPIRY_DAYS);

  document.cookie = `${COOKIE_CONSENT_KEY}=${encodeURIComponent(
    JSON.stringify(consent),
  )}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;

  window.dispatchEvent(new Event("cookie-consent-updated"));
}
