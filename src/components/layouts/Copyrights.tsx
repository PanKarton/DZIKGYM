"use client";
import BasicLogo from "@/components/ui/BasicLogo";
import Link from "next/link";

import { removeCookieConsent } from "@/components/cookies/cookie-consent";

const styles = "text-(--color-text-muted) text-xs leading-loose text-center";

export default function Copyrights() {
  return (
    <div className="w-full flex justify-center flex-wrap xl:justify-start align-center   gap-x-8 gap-y-2 px-4 xl:px-32 pb-4 ">
      <div className="w-30 ">
        <BasicLogo isInverted={true} />
      </div>
      <p className={styles}>
        {`©${new Date().getFullYear()} WKDZIK.pl. Wszelkie prawa zastrzeżone. `}
      </p>
      <button
        className={`${styles} bg-transparent border-none cursor-pointer`}
        onClick={removeCookieConsent}
      >
        Ustawienia Cookies
      </button>
      <Link href="/polityka-prywatnosci" className={styles}>
        Polityka prywatności
      </Link>
    </div>
  );
}
