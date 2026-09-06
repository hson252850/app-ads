import Image from "next/image";
import type { SiteContent } from "@/types/content";

interface AboutProps {
  about: SiteContent["about"];
}

export default function About({ about }: AboutProps) {
  return (
    <section
      id="gioithieu"
      className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-24 nav:grid-cols-[0.9fr_1.1fr]"
    >
      <figure className="m-0 overflow-hidden rounded-[24px] shadow-[var(--shadow-img)]">
        <Image
          src={about.image}
          alt="Chủ salon Gạo Beauty"
          width={868}
          height={538}
          priority
          className="block h-auto w-full object-cover"
        />
      </figure>

      <div>
        <p className="mb-3 font-heading text-[13px] uppercase tracking-[3px] text-purple-500">
          {about.eyebrow}
        </p>
        <h2 className="mb-5 font-heading text-[clamp(28px,4vw,38px)] font-semibold text-purple-900">
          {about.title}
        </h2>
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="mb-4 text-[16px] leading-[1.8] text-ink-2 last:mb-7"
          >
            {p}
          </p>
        ))}
        <div className="grid grid-cols-3 gap-4 text-center">
          {about.stats.map((s) => (
            <div key={s.label}>
              <p className="m-0 font-heading text-[30px] font-semibold text-purple-800">
                {s.value}
              </p>
              <p className="mt-1 text-[13px] text-ink-3">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
