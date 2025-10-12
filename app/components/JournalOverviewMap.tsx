"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import JOURNALS from "../lib/journals";
import Link from "next/link";

export default function JournalOverviewMap() {
  return (
    <div className="w-full aspect-video bg-zinc-200 rounded-xl">
      <Map
        mapboxAccessToken="pk.eyJ1IjoibWVybGluZnVjaHMiLCJhIjoiY20wbXl3N3B0MDlqNzJtcXY0YWwydThidCJ9.X5NpPI1PEiOmNCGm7NQzrA"
        initialViewState={{
          longitude: 0,
          latitude: 20,
          zoom: 1,
        }}
        style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
        interactive={true}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {JOURNALS.map((journal) => (
          <Marker
            key={journal.key}
            longitude={journal.longitude}
            latitude={journal.latitude}
          >
            <Link href={journal.url} className="bg-white rounded-full">
              <img
                src={journal.thumbnail}
                alt=""
                className="rounded-full size-14 border-2 border-[#fdba74] cursor-pointer"
              />
            </Link>
          </Marker>
        ))}
      </Map>
    </div>
  );
}
