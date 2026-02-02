"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils/cn";
import { NAV_ITEMS } from "@/data/nav-items";
import BasicLogo from "@/components/ui/BasicLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const onScroll = () => {
        if (window.scrollY > 5) {
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
        "w-full fixed top-0 left-0 z-100  nav-transition",
        scrolled
          ? "bg-(--color-primary) shadow-md backdrop-blur"
          : "bg-transparent",
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
          <div className="w-36">
            <BasicLogo isInverted={scrolled} />
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
                    isActive ? "bg-(--color-primary-darker)" : "",
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
