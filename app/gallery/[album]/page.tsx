import Album from "@/app/components/Album";
import AlbumSelect from "@/app/components/AlbumSelect";
import { getAlbums } from "@/app/lib/gallery";
import "react-photo-album/rows.css";

export async function generateStaticParams() {
  const albums = await getAlbums();

  return albums.map((album) => ({
    album: album.key,
  }));
}

export default async function Gallery({
  params,
}: {
  params: { album: string };
}) {
  const albums = await getAlbums();

  const album = albums.find((album) => album.key === params.album)!;

  return (
    <div>
      <div className="mb-5">
        <AlbumSelect albums={albums} />
      </div>
      <Album photos={album.photos} />
    </div>
  );
}
