"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { NAV_ITEMS } from "@/data/nav-items";
import BasicLogo from "@/components/ui/BasicLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 z-100  nav-transition",
        scrolled
          ? "bg-(--color-primary) shadow-md backdrop-blur"
          : "bg-transparent",
      )}
    >
      <nav className=" mx-auto flex items-center justify-between pl-[6vw] pr-32 py-2.5 h-17.5 2xl:pl-28">
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

        {/* Hamburger */}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "fixed top-3 right-5 z-10000 flex h-10 w-10 items-center justify-center  cursor-pointer 2xl:hidden",
            isOpen ? "-translate-x-4 translate-y-4" : "",
            " transition-translate duration-300 ease-in-out",
          )}
        >
          <span className="relative h-5 w-9">
            {/* GÓRNA */}
            <span
              className={cn(
                "absolute right-0 top-1/2 h-1 w-9 -translate-y-1/2 rounded-full bg-current transition-all duration-300",
                isOpen && "rotate-45",
              )}
            />

            {/* DOLNA */}
            <span
              className={cn(
                "absolute right-0 top-1/2 h-1 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-300",
                isOpen ? "w-9 -rotate-45" : "translate-y-2",
              )}
            />
          </span>
        </button>

        {/* Links */}
        <ul
          className={cn(
            "fixed inset-0 h-dvh w-full bg-(--color-primary) flex flex-col items-start justify-center pl-[10vh] ",
            "transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full",
            "2xl:static 2xl:h-auto 2xl:w-auto 2xl:bg-transparent 2xl:flex-row 2xl:flex-center gap-6 2xl:pl-0 2xl:translate-x-0",
          )}
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={[
                    "flex-center text-2xl 2xl:text-sm font-medium transition-colors px-4 py-2  rounded-[43px]",
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
