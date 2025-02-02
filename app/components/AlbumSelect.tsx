"use client";

import { useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { Album } from "../lib/gallery";

export default async function AlbumSelect({ albums }: { albums: Album[] }) {
  const router = useRouter();

  const albumKey = useParams().album;

  const updateAlbumKey = useCallback(
    (albumKey: string) => {
      router.push(`/gallery/${albumKey}`);
    },
    [router]
  );

  return (
    <select
      name="album"
      id="album"
      value={albumKey}
      onChange={(e) => updateAlbumKey(e.target.value)}
      className="bg-zinc-800 text-white p-2 rounded-md w-64"
    >
      {albums.map((album) => (
        <option key={album.key} value={album.key}>
          {album.name}
        </option>
      ))}
    </select>
  );
}
