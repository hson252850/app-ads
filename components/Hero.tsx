import { Fragment } from "react";
import type { Contact, SiteContent } from "@/types/content";

interface HeroProps {
  hero: SiteContent["hero"];
  contact: Contact;
}

function MarqueeGroup({ items }: { items: string[] }) {
  return (
    <span className="flex items-center gap-7 pr-7 font-heading text-[14px] uppercase tracking-[3px] text-[#F1E9FA]">
      {items.map((text, i) => (
        <Fragment key={i}>
          <span>{text}</span>
          <span className="opacity-50">✦</span>
        </Fragment>
      ))}
    </span>
  );
}

export default function Hero({ hero, contact }: HeroProps) {
  return (
    <section
      id="trangchu"
      className="hero-gradient relative flex min-h-[640px] flex-col justify-center overflow-hidden animate-gb-gradient motion-reduce:animate-none"
    >
      <div
        aria-hidden
        className="hero-bg-pattern absolute inset-0 opacity-[0.14]"
      />
      <div
        aria-hidden
        className="hero-orb-1 absolute left-[-10%] top-[14%] h-[260px] w-[260px] rounded-full animate-gb-float1 motion-reduce:animate-none"
      />
      <div
        aria-hidden
        className="hero-orb-2 absolute bottom-[8%] right-[-6%] h-[340px] w-[340px] rounded-full animate-gb-float2 motion-reduce:animate-none"
      />

      <div className="relative overflow-hidden border-y border-white/[0.16] bg-black/[0.08] py-[14px]">
        <div className="flex w-max whitespace-nowrap animate-gb-marquee motion-reduce:animate-none">
          <MarqueeGroup items={hero.marquee} />
          <MarqueeGroup items={hero.marquee} />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-[90px] pt-16 text-center">
        <p className="mb-[18px] font-heading text-[13px] uppercase tracking-[4px] text-[#E7D9F7] opacity-0 animate-hero-eyebrow motion-reduce:animate-none motion-reduce:opacity-100">
          {hero.eyebrow}
        </p>
        <h1 className="opacity-0 animate-hero-title motion-reduce:animate-none motion-reduce:opacity-100">
          <span className="block font-script text-[clamp(56px,10vw,110px)] leading-none text-white">
            {hero.title}
          </span>
          <span className="mx-auto mt-4 block max-w-[720px] font-heading text-[clamp(16px,2.4vw,22px)] font-medium leading-[1.5] text-[#E7D9F7]">
            {hero.subtitle}
          </span>
        </h1>
        <p className="mx-auto mb-9 mt-[22px] max-w-[640px] text-[clamp(16px,2.2vw,20px)] leading-[1.6] text-[#F1E9FA]">
          {hero.description}
        </p>
        <div className="flex flex-wrap justify-center gap-[14px]">
          <a
            href="#dichvu"
            className="rounded-full bg-white px-[30px] py-[14px] text-[15px] font-semibold text-purple-800 transition-colors hover:bg-[#F1E9FA]"
          >
            Xem dịch vụ
          </a>
          <a
            href={contact.tel}
            className="rounded-full border-[1.5px] border-white/70 px-[30px] py-[14px] text-[15px] font-medium text-white transition-colors hover:bg-white/[0.12]"
          >
            Gọi đặt lịch: {contact.phoneIntl}
          </a>
        </div>
      </div>
    </section>
  );
}
