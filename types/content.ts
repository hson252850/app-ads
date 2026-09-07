export interface NavLink {
  href: string;
  label: string;
}

export interface PriceItem {
  name: string;
  price: string;
}

export interface Service {
  tag: string;
  title: string;
  desc: string;
  items: PriceItem[];
}

export interface Course {
  name: string;
  detail: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  label: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Brand {
  name: string;
  suffix: string;
}

export interface Contact {
  phoneDisplay: string;
  phoneIntl: string;
  tel: string;
  zalo: string;
  addressLines: string[];
  addressShort: string;
  hours: string;
  /** Link Google Maps rút gọn (mở app / chỉ đường). */
  mapUrl: string;
  /** URL nhúng iframe Google Maps (Share → Embed a map). */
  mapEmbedUrl: string;
}

export interface SiteContent {
  brand: Brand;
  contact: Contact;
  nav: NavLink[];
  hero: {
    eyebrow: string;
    title: string;
    /** Dòng từ khoá đi kèm trong <h1> (SEO). */
    subtitle: string;
    description: string;
    marquee: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    image: string;
    paragraphs: string[];
    stats: Stat[];
  };
  services: Service[];
  training: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    image: string;
    courses: Course[];
  };
  gallery: GalleryItem[];
  faq: FaqItem[];
}
