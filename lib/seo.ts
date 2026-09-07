/**
 * Hằng số SEO dùng chung cho metadata, sitemap, robots và JSON-LD.
 * Sửa ở đây — không rải rác trong component.
 */

export const SITE = {
  /** Domain chính (khớp CNAME = www.noimitanphu.com). Không có dấu "/" ở cuối. */
  url: "https://www.noimitanphu.com",
  /** Thương hiệu website / marketing — hiển thị trên site, OG, mạng xã hội. */
  brand: "Gạo Beauty",
  /**
   * Tên CHÍNH XÁC trên Google Business Profile — dùng cho schema `name` để khớp
   * NAP. GBP giữ tên "Nối Mi Tân Phú"; "Gạo Beauty" là alternateName / thương hiệu.
   */
  gmbName: "Nối Mi Tân Phú",
  locale: "vi_VN",
  /** Địa chỉ khớp Google Business Profile (dùng cho schema PostalAddress). */
  address: {
    streetAddress: "012D, Chung cư Nhiêu Lộc, Phường Tân Quý",
    addressLocality: "Quận Tân Phú",
    addressRegion: "Thành phố Hồ Chí Minh",
    postalCode: "76000",
    addressCountry: "VN",
  },
  /** Khu vực phục vụ chính + phường lân cận (dùng cho nội dung + schema areaServed). */
  areaServed: [
    "Quận Tân Phú",
    "Tân Quý",
    "Tân Thành",
    "Hoà Thạnh",
    "Phú Thọ Hoà",
    "Sơn Kỳ",
    "Tân Sơn Nhì",
  ],
  geo: { latitude: 10.793139, longitude: 106.6216683 },
  /** Giờ mở cửa cho OpeningHoursSpecification. */
  opening: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "07:30", closes: "20:00" },
  priceRange: "20.000đ – 380.000đ",
  /**
   * Đánh giá Google Maps — ĐIỀN SỐ THẬT rồi mới bật.
   * Bỏ trống (null) thì schema tự bỏ khối aggregateRating (tránh Google phạt vì khai khống).
   * Hiện trạng 07/09/2026: 5.0 sao / 1 lượt → chưa bật (đợi ≥ 5 lượt).
   */
  rating: {
    value: null as number | null, // ví dụ: 4.9
    count: null as number | null, // ví dụ: 87
  },
  /**
   * Hồ sơ mạng xã hội — thêm URL khi đã tạo (Facebook / Instagram / TikTok).
   * Chỉ những URL có thật mới được đưa vào schema `sameAs`.
   */
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
} as const;

/** Danh sách URL mạng xã hội có thật, cho JSON-LD `sameAs`. */
export function sameAs(zalo: string): string[] {
  return [zalo, SITE.social.facebook, SITE.social.instagram, SITE.social.tiktok].filter(Boolean);
}
