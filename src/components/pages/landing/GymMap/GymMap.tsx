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
              <div className="relative size-[4rem]">
                <Image src={"/leaflet/pin.svg"} alt="pinezka" fill />
              </div>
            </MarkerContent>
            <MarkerTooltip>{location.name}</MarkerTooltip>
            <MarkerPopup
              closeButton
              focusAfterOpen={false}
              closeOnClick={true}
              className="w-62"
            >
              <div className="space-y-1">
                <p className="font-medium text-foreground">{location.name}</p>
                <p className="font-medium text-foreground">
                  {location.address}
                </p>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
