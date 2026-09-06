import type { Service } from "@/types/content";
import SectionHead from "./SectionHead";

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="dichvu" className="bg-lav-100 px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHead eyebrow="Dịch vụ chủ đạo" title="Bảng giá dịch vụ" />

        <div className="grid grid-cols-1 gap-7 nav:grid-cols-3">
          {services.map((svc) => (
            <article
              key={svc.title}
              className="flex flex-col rounded-[20px] bg-white px-[30px] py-9 shadow-[var(--shadow-card)]"
            >
              <p className="mb-2 font-heading text-[12px] uppercase tracking-[2px] text-purple-500">
                {svc.tag}
              </p>
              <h3 className="mb-3 font-heading text-[24px] font-semibold text-purple-900">
                {svc.title}
              </h3>
              <p className="mb-[22px] text-[14.5px] leading-[1.7] text-ink-3">
                {svc.desc}
              </p>
              <div className="mt-auto flex flex-col gap-3 border-t border-line-2 pt-[18px]">
                {svc.items.map((it) => (
                  <div
                    key={it.name}
                    className="flex justify-between gap-3 text-[14.5px]"
                  >
                    <span className="text-purple-900">{it.name}</span>
                    <span className="whitespace-nowrap font-semibold text-purple-500">
                      {it.price}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[13.5px] text-ink-4">
          Giá tham khảo, có thể thay đổi theo tình trạng thực tế. Liên hệ trực
          tiếp để được tư vấn chính xác.
        </p>
      </div>
    </section>
  );
}
