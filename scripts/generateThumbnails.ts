import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";

const albumsDir = path.resolve("public/albums");

// Thumbnail configuration
const THUMBNAIL_SIZE = 500; // Max width/height in pixels
const THUMBNAIL_QUALITY = 50; // JPEG quality (1-100)

async function ensureDirectoryExists(dirPath: string) {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

async function generateThumbnail(
  inputPath: string,
  outputPath: string
): Promise<void> {
  try {
    const inputExt = path.extname(inputPath).toLowerCase();
    const outputExt = path.extname(outputPath).toLowerCase();

    let sharpInstance = sharp(inputPath).resize(
      THUMBNAIL_SIZE,
      THUMBNAIL_SIZE,
      {
        fit: "inside",
        withoutEnlargement: true,
      }
    );

    // Use the same format as the original file
    if (outputExt === ".jpg" || outputExt === ".jpeg") {
      sharpInstance = sharpInstance.jpeg({ quality: THUMBNAIL_QUALITY });
    } else if (outputExt === ".png") {
      sharpInstance = sharpInstance.png({ quality: THUMBNAIL_QUALITY });
    } else if (outputExt === ".webp") {
      sharpInstance = sharpInstance.webp({ quality: THUMBNAIL_QUALITY });
    } else {
      // Default to webp for unknown formats
      sharpInstance = sharpInstance.webp({ quality: THUMBNAIL_QUALITY });
    }

    await sharpInstance.toFile(outputPath);

    console.log(`✓ Generated thumbnail: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to generate thumbnail for ${inputPath}:`, error);
  }
}

async function processAlbum(albumName: string): Promise<void> {
  const albumPath = path.join(albumsDir, albumName);
  const thumbnailAlbumPath = path.join(albumPath, "thumbnails");

  // Create thumbnail directory for this album
  await ensureDirectoryExists(thumbnailAlbumPath);

  const files = await fs.readdir(albumPath);
  const imageFiles = files.filter(
    (file) =>
      file !== ".DS_Store" &&
      /\.(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/i.test(file)
  );

  console.log(`\nProcessing album: ${albumName} (${imageFiles.length} images)`);

  for (const file of imageFiles) {
    const inputPath = path.join(albumPath, file);
    const outputPath = path.join(thumbnailAlbumPath, file);

    // Check if thumbnail already exists and is newer than source
    /* try {
      const inputStats = await fs.stat(inputPath);
      const outputStats = await fs.stat(outputPath);

      if (outputStats.mtime > inputStats.mtime) {
        console.log(`⏭️  Skipping ${file} (thumbnail is up to date)`);
        continue;
      }
    } catch {
      // Output file doesn't exist, proceed with generation
    } */

    await generateThumbnail(inputPath, outputPath);
  }
}

async function main() {
  console.log("🖼️  Starting thumbnail generation...");

  // Get all albums
  const albums = await fs.readdir(albumsDir);
  const validAlbums = albums.filter((album) => album !== ".DS_Store");

  console.log(`Found ${validAlbums.length} albums to process`);

  // Process each album
  for (const album of validAlbums) {
    await processAlbum(album);
  }

  console.log("\n✅ Thumbnail generation completed!");
}

// Run the script
main().catch(console.error);
