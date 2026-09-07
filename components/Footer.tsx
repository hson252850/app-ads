import type { Brand, Contact } from "@/types/content";
import { SITE } from "@/lib/seo";

interface FooterProps {
  brand: Brand;
  contact: Contact;
}

const SOCIAL: { key: keyof typeof SITE.social; label: string; path: string }[] = [
  {
    key: "facebook",
    label: "Facebook",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  },
  {
    key: "instagram",
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5-3.3a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z",
  },
  {
    key: "tiktok",
    label: "TikTok",
    path: "M16.5 2c.3 2 1.4 3.6 3.5 3.9v2.6c-1.3.1-2.5-.3-3.6-1v6.4c0 3.7-2.7 6.1-6 6.1a5.9 5.9 0 0 1-6-6c0-3.5 2.9-6 6.6-5.9v2.7c-.4-.1-.9-.2-1.3-.2a3.2 3.2 0 0 0-.2 6.4c1.9 0 3.4-1.5 3.4-3.6V2h3.6Z",
  },
];

export default function Footer({ brand, contact }: FooterProps) {
  const year = new Date().getFullYear();
  const socials = SOCIAL.filter((s) => SITE.social[s.key]);

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
        <p className="m-0 max-w-[520px] text-[13.5px] leading-[1.7] text-footer-1">
          Salon nối mi thiết kế, nail design, làm móng &amp; gội đầu thư giãn tại
          Quận Tân Phú, TP.HCM. Nhận đào tạo học viên nối mi và nail.
        </p>

        {socials.length > 0 && (
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.key}
                href={SITE.social[s.key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${brand.name} ${brand.suffix} trên ${s.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-footer-1 transition-colors hover:border-white/50 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        )}

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
