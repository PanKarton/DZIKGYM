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

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b">
      <nav className="mx-auto flex items-center justify-between px-32 py-2.5 h-19.25">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <div className="border border-red-500 bg-black w-36 h-6 p-4 flex items-center justify-center relative">
            <Image src="/logo.svg" alt="Logo" width={146} height={24} />
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
