import "leaflet";

declare module "leaflet" {
  function markerClusterGroup(
    options?: L.MarkerClusterGroupOptions,
  ): L.MarkerClusterGroup;
}
