import ColorLogo from "@/components/ui/ColorLogo";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/nav-items";

import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import CircleLink from "@/components/ui/CircleLink";
import BrandInfoSection from "../pages/landing/BrandInfoSection";
import { MeshBackground } from "../ui/MeshBackground";
import EXTERNAL_HREFS from "@/data/texternal-hrefs";

export default function Footer() {
  return (
    <footer className="relative w-full p-4 flex flex-col items-center gap-4  text-(--color-primary) pt-20 ">
      <BrandInfoSection />
      <div className="relative w-full rounded-[10px]  mx-auto grid grid-cols-4 gap-8 bg-black py-24 px-28 overflow-hidden">
        <MeshBackground z={"2"} />
        <div className="flex flex-col items-start gap-16 relative z-2 ">
          <div className="w-49">
            <ColorLogo />
          </div>
          <div className="flex gap-4 text-white text-xl">
            <CircleLink href={EXTERNAL_HREFS.tiktok}>
              <FaTiktok />
            </CircleLink>
            <CircleLink href={EXTERNAL_HREFS.facebook}>
              <FaFacebookF />
            </CircleLink>
            <CircleLink href={EXTERNAL_HREFS.instagram}>
              <FaInstagram />
            </CircleLink>
            <CircleLink href={EXTERNAL_HREFS.youtube}>
              <FaYoutube />
            </CircleLink>
          </div>
        </div>
        <nav className="relative z-2">
          <h3 className="font-bold italic mb-5 text-sm">DZIK GYM</h3>
          <ul className="space-y-2 text-sm text-(--color-off-primary) font-thin">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-(--color-primary-darker)"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="relative z-2">
          <h3 className="font-bold italic text-sm mb-5">WARTO ZAJRZEĆ</h3>
          <ul className="space-y-2 text-sm font-thin text-(--color-off-primary)">
            <li>
              <Link
                href={EXTERNAL_HREFS.shop}
                target="_blank"
                className="hover:text-(--color-primary-darker)"
              >
                Sklep WKDZIK.pl
              </Link>
            </li>
            <li>
              <Link
                href={EXTERNAL_HREFS.instagram}
                target="_blank"
                className="hover:text-(--color-primary-darker)"
              >
                Instagram DZIK GYM
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-right md:text-left">
          <h3 className="text-[2rem] font-bold italic max-w-[13ch] leading-[1.2] mb-10">
            Masz pytania? Napisz do nas
          </h3>
          <p className="text-(--color-content-emphasis) mt-4 font-semibold italic text-2xl">
            gym@wkdzik.pl
          </p>
        </div>
      </div>
    </footer>
  );
}
