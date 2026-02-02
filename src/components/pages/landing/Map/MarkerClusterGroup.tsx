"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet.markercluster";
import { gymLocations } from "./gymLocations";

export default function GymClusters() {
  const map = useMap();

  useEffect(() => {
    const clusterGroup = L.markerClusterGroup({
      showCoverageOnHover: false,
      disableClusteringAtZoom: 10,
    });

    gymLocations.forEach((gym) => {
      const marker = L.marker([gym.lat, gym.lng]);

      marker.bindPopup(`
        <strong>${gym.name}</strong><br/>
        ${gym.address}
      `);

      clusterGroup.addLayer(marker);
    });

    map.addLayer(clusterGroup);

    return () => {
      map.removeLayer(clusterGroup);
    };
  }, [map]);

  return null;
}
