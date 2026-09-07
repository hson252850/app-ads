/**
 * Hằng số SEO dùng chung cho metadata, sitemap, robots và JSON-LD.
 * Sửa ở đây — không rải rác trong component.
 */

export const SITE = {
  /** Domain chính (khớp CNAME = www.noimitanphu.com). Không có dấu "/" ở cuối. */
  url: "https://www.noimitanphu.com",
  /** Tên thương hiệu chính — phải trùng Google Business Profile. */
  name: "Gạo Beauty",
  /** Tên phụ salon đang dùng trên Google Maps. */
  alternateName: "Nối Mi Tân Phú",
  locale: "vi_VN",
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
