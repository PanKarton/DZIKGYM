import ColorLogo from "@/components/ui/ColorLogo";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/nav-items";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import CircleLink from "@/components/ui/CircleLink";
import BrandInfoSection from "../pages/landing/BrandInfoSection";
import EXTERNAL_HREFS from "@/data/texternal-hrefs";
import Image from "next/image";
import { TrademarkText } from "../ui/TradeMark";

export default function Footer() {
  return (
    <footer className="relative w-full p-4 flex flex-col items-center gap-4  text-(--color-primary)   pt-32 ">
      <BrandInfoSection />
      <div className="relative w-full rounded-[10px] overflow-hidden py-24 px-28 max-[500px]:px-4 bg-black isolate">
        <div className="w-fit mx-auto flex flex-wrap justify-start gap-x-32 gap-y-10 min-[720px]:gap-y-16 max-[720px]:justify-center z-2">
          <div className="w-49 order-1">
            <ColorLogo />
          </div>
          <div className="relative space-y-6 z-2 order-2 max-[814px]:order-5 max-[719px]:text-center ">
            <p className="font-semibold italic">Producentem atlastów jest:</p>
            <div>
              <Image
                src="/images/activeline-logo.svg"
                alt="Activeline logo"
                width={200}
                height={50}
                className="max-[719px]:mx-auto"
              />
            </div>
            <a
              href="mailto:biuro@activeline.eu"
              className="text-(--color-off-primary) hover:text-(--color-primary)"
            >
              biuro@activeline.eu
            </a>
          </div>
          <nav className="relative z-2 order-3 max-[719px]:text-center">
            <h3 className="font-bold italic mb-5 text-sm">
              <TrademarkText fontWeight={700}>DZIK</TrademarkText> GYM
            </h3>
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
          <div className="relative z-2 order-4 max-[719px]:text-center">
            <h3 className="font-bold italic text-sm mb-5">WARTO ZAJRZEĆ</h3>
            <ul className="space-y-2 text-sm font-thin text-(--color-off-primary)">
              <li>
                <Link
                  href={EXTERNAL_HREFS.SHOP}
                  target="_blank"
                  className="hover:text-(--color-primary-darker)"
                >
                  Sklep WKDZIK.pl
                </Link>
              </li>
              <li>
                <Link
                  href={EXTERNAL_HREFS.INSTAGRAM}
                  target="_blank"
                  className="hover:text-(--color-primary-darker)"
                >
                  Instagram <TrademarkText>DZIK</TrademarkText> GYM
                </Link>
              </li>
            </ul>
          </div>
          <div className="order-5 max-[814px]:order-2 max-[719px]:text-center">
            <h3 className="text-[2rem] font-bold italic max-w-69 leading-[1.2] mb-10">
              Masz pytania? Napisz do nas
            </h3>
            <a
              href="mailto:biuro@activeline.eu"
              className="text-(--color-content-emphasis) mt-4 font-semibold italic text-2xl"
            >
              gym@wkdzik.pl
            </a>
          </div>
        </div>

        <div className="flex gap-4 text-(--color-primary)  text-xl  mt-8 max-w-395.25 mx-auto max-[719px]:justify-center max-[719px]:mt-12 z-10">
          <CircleLink href={EXTERNAL_HREFS.TIKTOK}>
            <FaTiktok />
          </CircleLink>
          <CircleLink href={EXTERNAL_HREFS.FACEBOOK}>
            <FaFacebookF />
          </CircleLink>
          <CircleLink href={EXTERNAL_HREFS.INSTAGRAM}>
            <FaInstagram />
          </CircleLink>
          <CircleLink href={EXTERNAL_HREFS.YOUTUBE}>
            <FaYoutube />
          </CircleLink>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/mesh/mesh-banner.png')",
          }}
        />
      </div>
    </footer>
  );
}
