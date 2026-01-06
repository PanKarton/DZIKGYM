"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils/cn";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Strona główna", href: "/" },
  { label: "O projekcie", href: "/o-projekcie" },
  { label: "Budżety Obywatelskie", href: "/budżety-obywatelskie" },
  { label: "Dla Samożądów", href: "/dla-samożądów" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
];

const logoSize = 1;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const onScroll = () => {
        if (window.scrollY > 70) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    };
    handleScroll();
  }, []);

  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 z-50  nav-transition",
        scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex items-center justify-between pl-[7rem] pr-32 py-2.5 h-17.5">
        {/* Logo / Brand */}
        <Link
          href="/"
          className={`text-lg font-semibold tracking-tight mr-auto nav-transition ${
            scrolled ? "pt-0" : "pt-4"
          }`}
        >
          <div
            className="flex-center relative aspect-[146/24] "
            style={{ width: `${logoSize * 146}px` }}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              className={`object-contain ${scrolled ? "invert" : ""}`}
              priority
            />
          </div>
        </Link>

        {/* Links */}
        <ul className="flex-center gap-6">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "flex-center text-sm font-medium transition-colors px-4 py-2  rounded-[43px]",
                    "bg-(--primaryHover)",
                    // isActive ? "bg-(--primaryHover)" : "",
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
