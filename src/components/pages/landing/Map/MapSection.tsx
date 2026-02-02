"use client";

import dynamic from "next/dynamic";

type MapSectionProps = {
  className?: string;
};

const LeafletMapClient = dynamic(() => import("./LeafletMapClient"));

export default function MapSection({ className }: MapSectionProps) {
  return (
    <section className={className}>
      <div className="relative w-full aspect-[1920/800] z-0">
        <LeafletMapClient />
      </div>
    </section>
  );
}
