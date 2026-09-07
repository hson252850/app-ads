import { content } from "@/lib/content";
import { SITE, sameAs } from "@/lib/seo";

/** "200.000đ – 380.000đ" -> { min: 200000, max: 380000 } ; "30.000đ" -> { min: 30000 } */
function parsePrice(raw: string): { min: number; max?: number } | null {
  const nums = (raw.match(/\d[\d.]*/g) ?? [])
    .map((s) => Number(s.replace(/\./g, "")))
    .filter((n) => Number.isFinite(n) && n > 0);
  if (!nums.length) return null;
  return nums.length > 1 ? { min: nums[0], max: nums[nums.length - 1] } : { min: nums[0] };
}

export default function JsonLd() {
  const { brand, contact, services, faq } = content;
  const businessId = `${SITE.url}/#business`;

  const offers = services.flatMap((svc) =>
    svc.items.map((it) => {
      const p = parsePrice(it.price);
      return {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: it.name, serviceType: svc.title },
        ...(p
          ? {
              priceCurrency: "VND",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "VND",
                ...(p.max ? { minPrice: p.min, maxPrice: p.max } : { price: p.min }),
              },
            }
          : {}),
      };
    }),
  );

  const business: Record<string, unknown> = {
    "@type": ["HealthAndBeautyBusiness", "NailSalon"],
    "@id": businessId,
    name: SITE.name,
    alternateName: SITE.alternateName,
    description:
      "Salon nối mi thiết kế, nail design, làm móng và gội đầu thư giãn tại Quận Tân Phú, TP.HCM. Nhận đào tạo học viên.",
    url: `${SITE.url}/`,
    telephone: contact.phoneIntl.replace(/\s/g, ""),
    image: [
      `${SITE.url}/assets/IMG_1924.JPG`,
      `${SITE.url}/gallery/gal-1.webp`,
      `${SITE.url}/gallery/gal-2.webp`,
      `${SITE.url}/gallery/gal-4.webp`,
    ],
    logo: `${SITE.url}/icon.png`,
    priceRange: SITE.priceRange,
    currenciesAccepted: "VND",
    paymentAccepted: "Tiền mặt, Chuyển khoản",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chung cư Nhiêu Lộc, 012D",
      addressLocality: "Quận Tân Phú",
      addressRegion: "TP. Hồ Chí Minh",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: contact.mapUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.opening.days,
        opens: SITE.opening.opens,
        closes: SITE.opening.closes,
      },
    ],
    areaServed: SITE.areaServed.map((name) => ({ "@type": "Place", name })),
    sameAs: sameAs(contact.zalo),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bảng giá dịch vụ Gạo Beauty",
      itemListElement: offers,
    },
  };

  if (SITE.rating.value && SITE.rating.count) {
    business.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.value,
      reviewCount: SITE.rating.count,
      bestRating: 5,
      worstRating: 1,
    };
  }

  const graph: unknown[] = [
    business,
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: `${brand.name} ${brand.suffix}`,
      inLanguage: "vi-VN",
      publisher: { "@id": businessId },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const data = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      // JSON tự sinh từ nội dung site, không có input người dùng.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
