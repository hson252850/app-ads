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
}

export interface SiteContent {
  brand: Brand;
  contact: Contact;
  nav: NavLink[];
  hero: {
    eyebrow: string;
    title: string;
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
    courses: Course[];
  };
  gallery: GalleryItem[];
}
