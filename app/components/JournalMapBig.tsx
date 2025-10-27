"use client";

import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

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
          mapboxAccessToken="pk.eyJ1IjoibWVybGluZnVjaHMiLCJhIjoiY20wbXl3N3B0MDlqNzJtcXY0YWwydThidCJ9.X5NpPI1PEiOmNCGm7NQzrA"
          initialViewState={{
            longitude,
            latitude,
            zoom,
          }}
          style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </div>
  );
}
