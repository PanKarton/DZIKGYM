import ColorLogo from "@/components/ui/ColorLogo";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/nav-items";

import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import CircleLink from "@/components/ui/CircleLink";
import BrandInfoSection from "../BrandInfoSection/BrandInfoSection";

export default function Footer() {
  console.log("navitems to ", typeof NAV_ITEMS);
  return (
    <footer className="w-full p-4 flex flex-col items-center gap-4 text-(--primary) pt-20">
      <BrandInfoSection />
      <div className="w-full rounded-[10px] mx-auto grid grid-cols-4 gap-8 bg-gray-900 py-24 px-28 ">
        <div className="flex flex-col items-start gap-16">
          <div className="w-49">
            <ColorLogo />
          </div>
          <div className="flex gap-4 text-white text-xl">
            <CircleLink href="#">
              <FaTiktok />
            </CircleLink>
            <CircleLink href="#">
              <FaFacebookF />
            </CircleLink>
            <CircleLink href="#">
              <FaInstagram />
            </CircleLink>
            <CircleLink href="#">
              <FaYoutube />
            </CircleLink>
          </div>
        </div>
        <nav>
          <h3 className="font-bold italic mb-5 text-sm">DZIK GYM</h3>
          <ul className="space-y-2 text-sm text-(--offWhite) font-thin">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-(--primaryHover)">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="font-bold italic text-sm mb-5">WARTO ZAJRZEĆ</h3>
          <ul className="space-y-2 text-sm font-thin text-(--offWhite)">
            <li>
              <Link href="/blog">Sklep WKDZIK.pl</Link>
            </li>
            <li>
              <Link href="/kontakt">Instagram DZIK GYM</Link>
            </li>
          </ul>
        </div>
        <div className="text-right md:text-left">
          <h3 className="text-[2rem] font-bold italic max-w-[13ch] leading-[1.2] mb-10">
            Masz pytania? Napisz do nas
          </h3>
          <p className="text-(--blue) mt-4 font-semibold italic text-2xl">
            gym@wkdzik.pl
          </p>
        </div>
      </div>
    </footer>
  );
}
