"use client";

import { useEffect, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { cn } from "@/lib/utils/cn";

export default function InfoBubble({
  textSmall,
  textBold,
  isLeft,
}: {
  textSmall?: string;
  textBold?: string;
  isLeft?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = () => setIsOpen(false);
    if (isOpen) document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen]);

  return (
    <div
      className="relative bg-(--color-primary) text-(--color-content-emphasis) text-3xl sm:text-5xl flex-center aspect-square rounded-full group z-2"
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }}
    >
      <IoIosInformationCircleOutline />

      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-[-1] min-w-max transition-all duration-200 ease-out",
          "opacity-0 scale-50 pointer-events-none",
          // desktop hover
          "group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto",
          // mobile click
          isOpen && "opacity-100 scale-100 pointer-events-auto",
          isLeft ? "left-full -translate-x-full" : "left-0",
        )}
      >
        <div
          className={cn(
            "bg-(--color-primary) py-3 sm:py-4 rounded-full shadow-xl",
            "flex flex-col gap-1 text-left max-w-75 leading-none",
            isLeft ? "pl-12 pr-17" : "pl-17 pr-12",
          )}
        >
          <span className="text-(--color-off-primaryDarker) text-sm leading-none">
            {textSmall}
          </span>

          <span className="font-bold text-(--color-content-emphasis) text-base sm:text-2xl leading-none">
            {textBold}
          </span>
        </div>
      </div>
    </div>
  );
}
