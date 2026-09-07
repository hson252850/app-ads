import Image from "next/image";
import type { GalleryItem } from "@/types/content";
import SectionHead from "./SectionHead";

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <section id="gallery" className="bg-lav-100 px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead
          eyebrow="Hình ảnh thực tế"
          title="Gallery"
          className="mb-12"
        />

        <div className="grid grid-cols-2 gap-4 nav:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-[16px] bg-line-2"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(min-width: 860px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
