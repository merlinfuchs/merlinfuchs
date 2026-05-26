"use client";

import Map, { AttributionControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function JournalMap({
  longitude,
  latitude,
  zoom = 8,
}: {
  longitude: number;
  latitude: number;
  zoom: number;
}) {
  return (
    <div className="h-full w-full bg-zinc-200">
      <Map
        initialViewState={{
          longitude,
          latitude,
          zoom,
        }}
        style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
        interactive={false}
        mapStyle="https://tiles.stadiamaps.com/styles/alidade_bright.json"
        attributionControl={false}
        onLoad={(e) => e.target.getContainer().querySelector(".maplibregl-ctrl-attrib")?.classList.remove("maplibregl-compact-show")}
      >
        <AttributionControl compact />
      </Map>
    </div>
  );
}
