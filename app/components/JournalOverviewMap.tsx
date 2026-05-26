"use client";

import { useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import Map, { Marker, AttributionControl } from "react-map-gl/maplibre";
import JOURNALS from "../lib/journals";
import Link from "next/link";

export default function JournalOverviewMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full aspect-video bg-zinc-200 rounded-xl">
      <Map
        initialViewState={{
          longitude: 0,
          latitude: 20,
          zoom: 1,
        }}
        style={{ width: "100%", height: "100%", borderRadius: "inherit" }}
        interactive={true}
        mapStyle="https://tiles.stadiamaps.com/styles/alidade_bright.json"
        attributionControl={false}
        onLoad={(e) => {
          setLoaded(true);
        }}
      >
        <AttributionControl compact />
        {loaded &&
          JOURNALS.map((journal) => (
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
