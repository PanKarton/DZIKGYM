"use client";

import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";
import { gymLocations } from "./gymLocations";
import Image from "next/image";
import MapScrollHandler from "./MapScrollHandler";

export function GymMap() {
  return (
    <div className="h-[90vh] w-full p-0 overflow-hidden">
      <Map center={[19.5, 52]} zoom={5.75} theme="light">
        <MapScrollHandler />
        <MapControls position="bottom-right" showZoom showFullscreen />
        {gymLocations.map((location) => (
          <MapMarker
            key={location.id}
            longitude={location.lng}
            latitude={location.lat}
          >
            <MarkerContent>
              <div className="relative size-16">
                <Image src={"/leaflet/pin.svg"} alt="pinezka" fill />
              </div>
            </MarkerContent>
            <MarkerTooltip>{`DZIK GYM ${location.city}`}</MarkerTooltip>
            <MarkerPopup
              closeButton
              focusAfterOpen={false}
              closeOnClick={true}
              className="w-62  border-2 border-(--color-brand-blue) rounded-none translate-y-[-20%] bubble relative"
            >
              <span className="font-black text-base italic mb-0 leading-0.5">
                DZIK GYM
              </span>
              <span className="block font-medium text-base mb-3 leading-3">{`${location.city}, ${location.address}`}</span>
              <span className="block text-xs text-(--color-text-muted) mb-1">
                We współpracy z:
              </span>
              <div className="relative">
                <div className="border-2 aspect-4/1 w-[40%]"></div>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
