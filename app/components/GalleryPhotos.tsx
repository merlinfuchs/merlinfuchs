"use client";

import { useMemo, useState } from "react";
import { Photo } from "../lib/gallery";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { RowsPhotoAlbum } from "react-photo-album";
import JournalMap from "./JournalMap";
import "react-photo-album/rows.css";

export default function GalleryPhotos(props: {
  photos: Photo[];
  map?: { longitude: number; latitude: number; zoom: number };
}) {
  const [index, setIndex] = useState(-1);

  const photos = useMemo(() => {
    if (props.map) {
      return [
        {
          key: "map",
          src: "map",
          width: 16,
          height: 9,
        },
        ...props.photos,
      ];
    } else {
      return props.photos;
    }
  }, [props.map, props.photos]);

  return (
    <div>
      <RowsPhotoAlbum
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        render={{
          /* extras: (_, { photo }) => {
            if (photo.key === "map") {
              return (
                <div
                  className="absolute inset-0 rounded-md z-50 cursor-default overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <JournalMap
                    longitude={props.map!.longitude}
                    latitude={props.map!.latitude}
                    zoom={props.map!.zoom}
                  />
                </div>
              );
            }
          }, */
          image: (img) => {
            if (img.src === "map") {
              return (
                <div
                  className="rounded-md aspect-video overflow-hidden cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <JournalMap
                    longitude={props.map!.longitude}
                    latitude={props.map!.latitude}
                    zoom={props.map!.zoom}
                  />
                </div>
              );
            }

            return <img {...img} className="rounded-md" />;
          },
        }}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Zoom]}
      />
    </div>
  );
}
