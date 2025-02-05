import { promises as fs } from "fs";
import path from "path";
import { imageSize } from "image-size";

export type Album = {
  key: string;
  name: string;
  photos: Photo[];
};

export type Photo = {
  key: string;
  src: string;
  width: number;
  height: number;
};

const albumsDir = path.resolve("public/albums");

export const getAlbums = async () => {
  const albums = await fs.readdir(albumsDir);

  const res = [] as Album[];
  for (const album of albums) {
    if (album === ".DS_Store") continue;

    const photos = await fs.readdir(path.resolve(albumsDir, album));

    const photosWithSize = await Promise.all(
      photos.map(async (photo) => {
        const path = `${albumsDir}/${album}/${photo}`;
        const size = await imageSize(path);

        return {
          key: photo,
          src: `/albums/${album}/${photo}`,
          width: size.width!,
          height: size.height!,
        };
      })
    );

    const name = album
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    res.push({
      key: album,
      name,
      photos: photosWithSize,
    });
  }

  return res;
};
