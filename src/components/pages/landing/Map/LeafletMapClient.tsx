"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

import MarkerClusterGroup from "./MarkerClusterGroup";

const center: LatLngExpression = [52.2297, 21.0122];

export default function LeafletMapClient() {
  useEffect(() => {
    let isMounted = true;

    (async () => {
      if (!isMounted) return;

      // 🔑 dynamiczny import Leafleta
      const L = await import("leaflet");

      // 🔑 plugin gesture handling
      await import("leaflet-gesture-handling");
      // await import("leaflet-gesture-handling/dist/leaflet-gesture-handling.css");

      // 🎯 ustawienie ikony (runtime only)
      const defaultIcon = L.icon({
        iconUrl: "/leaflet/pin.svg",
        iconSize: [100, 100],
        iconAnchor: [50, 100], // poprawione pod realny środek ikony
      });

      L.Marker.prototype.options.icon = defaultIcon;
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={6}
      className="absolute inset-0 h-full w-full"
      scrollWheelZoom={true} // wymagane przez leaflet-gesture-handling
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />

      <MarkerClusterGroup />
    </MapContainer>
  );
}
