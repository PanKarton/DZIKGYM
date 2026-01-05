"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "O projekcie", href: "/o-projekcie" },
  { label: "Budżety Obywatelskie", href: "/budżety-obywatelskie" },
  { label: "Dla Samożądów", href: "/dla-samożądów" },
  { label: "Kontakt", href: "/kontakt" },
];

const logoSize = 1;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 left-0  z-50">
      <nav className="mx-auto flex items-center justify-between pl-[5%] pr-32 py-2.5 h-19.25">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight mr-auto">
          <div
            className="flex items-center justify-center relative aspect-[146/24]"
            style={{ width: `${logoSize * 146}px` }}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-12">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "text-sm font-medium transition-colors",
                    isActive
                      ? "text-black"
                      : "text-neutral-500 hover:text-black",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
