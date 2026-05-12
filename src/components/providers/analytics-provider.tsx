"use client";

import { useEffect, useState } from "react";
import { getCookieConsent } from "../cookies/cookie-consent";
import { Clarity } from "../analytics/Clarity";

export function AnalyticsProvider() {
  const [hasAnalyticsConsent, setHasAnalyticsConsent] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      const consent = getCookieConsent();

      setHasAnalyticsConsent(consent?.analytics === true);
    };

    updateConsent();

    window.addEventListener("cookie-consent-updated", updateConsent);

    return () => {
      window.removeEventListener("cookie-consent-updated", updateConsent);
    };
  }, []);

  if (!hasAnalyticsConsent) return null;

  return <Clarity />;
}
