"use client";

import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";
import Image from "next/image";
import MapScrollHandler from "./MapScrollHandler";
import { GymLocation } from "@/types/gym-location";
import { TrademarkText } from "@/components/ui/TradeMark";

export function GymMap({ gymLocations }: { gymLocations: GymLocation[] }) {
  return (
    <div className="h-[75vh] w-full p-0 overflow-hidden">
      <Map center={[19.5, 52]} zoom={5.75} theme="light" cooperativeGestures>
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
            <MarkerTooltip>{`<TrademarkText>DZIK</TrademarkText> GYM ${location.city}`}</MarkerTooltip>
            <MarkerPopup
              closeButton
              focusAfterOpen={false}
              closeOnClick={true}
              className="w-62  border-2 border-(--color-brand-blue) rounded-none translate-y-[-20%] bubble relative"
            >
              <span className="font-black text-base italic mb-1 leading-0.5">
                <TrademarkText>DZIK</TrademarkText> GYM
              </span>
              <span className="block font-medium text-base leading-4.5">{`${location.city}`}</span>
              <span className="block font-medium text-base leading-4.5">{`${location.address}`}</span>
              {location.PNG?.filename && (
                <>
                  <span className="block text-xs text-(--color-text-muted) mt-1">
                    We współpracy z:
                  </span>
                  <div className="relative aspect-4/1 w-[70%]">
                    <Image
                      src={location.PNG.filename}
                      alt={`${location.city} logo`}
                      width={200}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </>
              )}
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
