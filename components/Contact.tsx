import type { Contact as ContactInfo } from "@/types/content";

interface ContactProps {
  contact: ContactInfo;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section
      id="lienhe"
      className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-24 nav:grid-cols-2"
    >
      <div>
        <p className="mb-3 font-heading text-[13px] uppercase tracking-[3px] text-purple-500">
          Liên hệ &amp; đặt lịch
        </p>
        <h2 className="mb-6 font-heading text-[clamp(28px,4vw,38px)] font-semibold text-purple-900">
          Ghé Gạo Beauty hôm nay
        </h2>

        <div className="flex flex-col gap-5">
          <div className="flex gap-[14px]">
            <span className="text-[20px] leading-[1.4]" aria-hidden>
              📍
            </span>
            <div>
              <p className="m-0 text-[15px] font-semibold text-purple-900">
                Địa chỉ
              </p>
              <p className="mt-1 text-[14.5px] leading-[1.6] text-ink-3">
                {contact.addressLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < contact.addressLines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="flex gap-[14px]">
            <span className="text-[20px] leading-[1.4]" aria-hidden>
              📞
            </span>
            <div>
              <p className="m-0 text-[15px] font-semibold text-purple-900">
                Điện thoại / Zalo
              </p>
              <p className="mt-1 text-[14.5px] leading-[1.6] text-ink-3">
                <a
                  href={contact.tel}
                  className="text-ink-3 transition-colors hover:text-purple-600"
                >
                  {contact.phoneIntl}
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-[14px]">
            <span className="text-[20px] leading-[1.4]" aria-hidden>
              🕐
            </span>
            <div>
              <p className="m-0 text-[15px] font-semibold text-purple-900">
                Giờ mở cửa
              </p>
              <p className="mt-1 text-[14.5px] leading-[1.6] text-ink-3">
                {contact.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-[14px]">
          <a
            href={contact.tel}
            className="rounded-full bg-purple-800 px-[26px] py-[13px] text-[14.5px] font-medium text-white transition-colors hover:bg-purple-900"
          >
            Gọi ngay
          </a>
          <a
            href={contact.zalo}
            className="rounded-full border-[1.5px] border-purple-500 px-[26px] py-[13px] text-[14.5px] font-medium text-purple-800 transition-colors hover:bg-line-2"
          >
            Nhắn Zalo
          </a>
        </div>
      </div>

      {/* Bản đồ — placeholder, nhúng Google Maps khi triển khai chính thức */}
      <div className="flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[20px] border border-line bg-lav-100 p-8 text-center">
        <span className="text-[32px]" aria-hidden>
          🗺️
        </span>
        <p className="mt-[14px] font-semibold text-purple-900">
          Bản đồ đường đến Gạo Beauty
        </p>
        <p className="mt-1.5 text-[13.5px] text-ink-4">
          Nhúng Google Maps tại đây khi triển khai website chính thức
        </p>
      </div>
    </section>
  );
}
