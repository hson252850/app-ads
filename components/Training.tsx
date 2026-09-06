import type { Contact, SiteContent } from "@/types/content";

interface TrainingProps {
  training: SiteContent["training"];
  contact: Contact;
}

export default function Training({ training, contact }: TrainingProps) {
  return (
    <section
      id="daotao"
      className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 py-24 nav:grid-cols-[1.1fr_0.9fr]"
    >
      <div>
        <p className="mb-3 font-heading text-[13px] uppercase tracking-[3px] text-purple-500">
          {training.eyebrow}
        </p>
        <h2 className="mb-5 font-heading text-[clamp(28px,4vw,38px)] font-semibold text-purple-900">
          {training.title}
        </h2>
        <p className="mb-7 text-[16px] leading-[1.8] text-ink-2">
          {training.description}
        </p>

        <div className="flex flex-col gap-4">
          {training.courses.map((course) => (
            <div key={course.name} className="flex items-baseline gap-4">
              <span className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-purple-500" />
              <div>
                <p className="m-0 text-[15.5px] font-semibold text-purple-900">
                  {course.name}
                </p>
                <p className="mt-1 text-[14.5px] leading-[1.6] text-ink-3">
                  {course.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href={contact.tel}
          className="mt-7 inline-block rounded-full bg-purple-800 px-7 py-[13px] text-[14.5px] font-medium text-white transition-colors hover:bg-purple-900"
        >
          {training.cta}
        </a>
      </div>

      {/* Ảnh lớp học — placeholder, chờ ảnh thật từ khách hàng (tỉ lệ 4:5) */}
      <div className="aspect-[4/5] overflow-hidden rounded-[24px] shadow-[var(--shadow-img-2)]">
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#efe6fa,#e1d0f2)] p-4 text-center text-[13px] tracking-[0.3px] text-ink-4">
          Ảnh lớp học / thực hành
        </div>
      </div>
    </section>
  );
}
