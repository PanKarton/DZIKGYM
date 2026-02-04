import { useMap } from "@/components/ui/map";
import { useEffect } from "react";

const MapScrollHandler = () => {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!isLoaded || !map) return;

    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
    map.on("wheel", (event) => {
      if (event.originalEvent.ctrlKey) {
        return;
      }

      if (event.originalEvent.metaKey) {
        return;
      }

      if (event.originalEvent.altKey) {
        return;
      }

      event.preventDefault();
    });
  });
  return null;
};

export default MapScrollHandler;
