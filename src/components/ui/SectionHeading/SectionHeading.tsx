import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  isBig?: boolean;
}

export default function SectionHeading({
  children,
  className,
  isBig,
}: SectionHeadingProps) {
  const fontSize = isBig
    ? "text-4xl md:text-[3.5rem]"
    : "text-2xl md:text-[2.5rem]";

  return (
    <h2 className={` ${fontSize} font-black italic  text-center ${className}`}>
      {children}
    </h2>
  );
}
