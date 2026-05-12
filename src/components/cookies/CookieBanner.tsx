"use client";

import { useEffect, useState } from "react";
import {
  CookieConsent,
  getCookieConsent,
  setCookieConsent,
} from "./cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();

    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const acceptAll = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };

    setCookieConsent(consent);
    setIsVisible(false);
  };

  const rejectOptional = () => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    };

    setCookieConsent(consent);
    setIsVisible(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black p-5 text-white shadow-2xl">
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Używamy plików cookies</h2>

        <p className="text-sm text-white/70">
          Korzystamy z niezbędnych cookies do działania strony oraz opcjonalnych
          narzędzi analitycznych, które pomagają nam ulepszać serwis.
        </p>

        <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={rejectOptional}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Odrzuć opcjonalne
          </button>

          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Akceptuję wszystkie
          </button>
        </div>
      </div>
    </div>
  );
}
