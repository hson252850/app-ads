import type { FaqItem } from "@/types/content";
import SectionHead from "./SectionHead";

interface FaqProps {
  items: FaqItem[];
}

export default function Faq({ items }: FaqProps) {
  return (
    <section id="hoidap" className="px-6 py-24">
      <div className="mx-auto max-w-[820px]">
        <SectionHead
          eyebrow="Hỏi đáp"
          title="Câu hỏi thường gặp về Gạo Beauty Tân Phú"
          className="mb-12"
        />

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group rounded-[16px] border border-line bg-white px-[22px] py-[18px] shadow-[var(--shadow-card)] [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-heading text-[16.5px] font-semibold text-purple-900 marker:content-none">
                {item.q}
                <span
                  aria-hidden
                  className="shrink-0 text-[20px] leading-none text-purple-500 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-ink-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
