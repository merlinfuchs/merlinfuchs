import { getAlbums } from "../app/lib/gallery";
import { promises as fs } from "fs";
import path from "path";

const outputFile = path.resolve("app/gallery/albums.gen.ts");

async function run() {
  const albums = await getAlbums();

  const albumsCode = `export const ALBUMS = ${JSON.stringify(albums)}`;

  await fs.writeFile(outputFile, albumsCode);
}

run();
