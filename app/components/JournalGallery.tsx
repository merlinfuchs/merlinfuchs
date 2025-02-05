import { getAlbums } from "../lib/gallery";
import GalleryPhotos from "./GalleryPhotos";

export default async function JournalGallery(props: {
  album: string;
  map?: { longitude: number; latitude: number; zoom: number };
}) {
  const albums = await getAlbums();

  const album = albums.find((album) => album.key === props.album)!;

  return (
    <div>
      <GalleryPhotos photos={album.photos} map={props.map} />
    </div>
  );
}
