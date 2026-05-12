"use client";

import { ReactNode } from "react";
import { AnalyticsProvider } from "./analytics-provider";
import { CookieBanner } from "../cookies/CookieBanner";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <CookieBanner />
      <AnalyticsProvider />
    </>
  );
}
