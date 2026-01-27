import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-2xl md:text-[2.5rem] font-extrabold italic   text-center ${className}`}
    >
      {children}
    </h2>
  );
}
