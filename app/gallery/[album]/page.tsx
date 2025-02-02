import AlbumSelect from "@/app/components/AlbumSelect";
import { getAlbums } from "@/app/lib/gallery";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    width: 1920,
    height: 1080,
    href: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
  },
  {
    src: "https://images.unsplash.com/photo-1682687221038-404670f367f0",
    width: 1920,
    height: 1280,
    href: "https://images.unsplash.com/photo-1682687221038-404670f367f0",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    width: 1920,
    height: 1440,
    href: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220189-c9e6b5920e95",
    width: 1920,
    height: 1280,
    href: "https://images.unsplash.com/photo-1682687220189-c9e6b5920e95",
  },
  {
    src: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb",
    width: 1920,
    height: 1080,
    href: "https://images.unsplash.com/photo-1682687221080-5cb261c645cb",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220067-dced0a59f6b7",
    width: 1920,
    height: 1440,
    href: "https://images.unsplash.com/photo-1682687220067-dced0a59f6b7",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220123-abc123def456",
    width: 1920,
    height: 1280,
    href: "https://images.unsplash.com/photo-1682687220123-abc123def456",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220234-xyz987abc123",
    width: 1920,
    height: 1080,
    href: "https://images.unsplash.com/photo-1682687220234-xyz987abc123",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220345-def456xyz789",
    width: 1920,
    height: 1440,
    href: "https://images.unsplash.com/photo-1682687220345-def456xyz789",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220456-ghi789jkl012",
    width: 1920,
    height: 1280,
    href: "https://images.unsplash.com/photo-1682687220456-ghi789jkl012",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220567-mno345pqr789",
    width: 1920,
    height: 1080,
    href: "https://images.unsplash.com/photo-1682687220567-mno345pqr789",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220678-stu901vwx234",
    width: 1920,
    height: 1440,
    href: "https://images.unsplash.com/photo-1682687220678-stu901vwx234",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220789-bcd123efg456",
    width: 1920,
    height: 1280,
    href: "https://images.unsplash.com/photo-1682687220789-bcd123efg456",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220890-hij456klm789",
    width: 1920,
    height: 1080,
    href: "https://images.unsplash.com/photo-1682687220890-hij456klm789",
  },
  {
    src: "https://images.unsplash.com/photo-1682687220901-nop789qrs012",
    width: 1920,
    height: 1440,
    href: "https://images.unsplash.com/photo-1682687220901-nop789qrs012",
  },
  {
    src: "https://images.unsplash.com/photo-1682687221012-tuv345wxy678",
    width: 1920,
    height: 1280,
    href: "https://images.unsplash.com/photo-1682687221012-tuv345wxy678",
  },
];

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
      <RowsPhotoAlbum photos={album.photos} />
    </div>
  );
}
