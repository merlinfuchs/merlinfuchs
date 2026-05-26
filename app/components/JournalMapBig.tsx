"use client";

import Map, { AttributionControl } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function JournalMapBig({
  longitude,
  latitude,
  zoom = 8,
}: {
  longitude: number;
  latitude: number;
  zoom: number;
}) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full bg-zinc-200 rounded-xl aspect-video">
        <Map
          initialViewState={{
            longitude,
            latitude,
            zoom,
          }}
          style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
          mapStyle="https://tiles.stadiamaps.com/styles/alidade_bright.json"
          attributionControl={false}
        >
          <AttributionControl compact />
        </Map>
      </div>
    </div>
  );
}
