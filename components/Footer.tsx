import type { Brand, Contact } from "@/types/content";

interface FooterProps {
  brand: Brand;
  contact: Contact;
}

export default function Footer({ brand, contact }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 px-6 pb-7 pt-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
        <div className="flex items-baseline gap-2">
          <span className="font-script text-[30px] text-white">
            {brand.name}
          </span>
          <span className="font-heading text-[12px] uppercase tracking-[3px] text-footer-1">
            {brand.suffix}
          </span>
        </div>
        <p className="m-0 max-w-[480px] text-[13.5px] leading-[1.7] text-footer-1">
          Chuyên mi thiết kế, nail design, gội đầu thư giãn. Nhận đào tạo học
          viên.
        </p>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.12] pt-5">
          <p className="m-0 text-[12.5px] text-footer-2">
            © {year} Gạo Beauty. All rights reserved.
          </p>
          <p className="m-0 text-[12.5px] text-footer-2">
            {contact.addressShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
