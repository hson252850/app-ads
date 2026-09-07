# Gạo Beauty — Salon Website

Website giới thiệu salon **Gạo Beauty** (chuyên mi thiết kế, nail design, gội đầu
thư giãn — có nhận đào tạo học viên). Giao diện tông tím, một trang, scroll theo
nav anchor.

Dựng theo bản thiết kế trong [`design_handoff_gao_beauty/README.md`](design_handoff_gao_beauty/README.md)
(màu sắc, font, layout, nội dung, animation). File `Gao Beauty Website.dc.html`
trong thư mục đó chỉ để xem tham khảo trực quan — **không** phải mã nguồn.

## Stack

- **Next.js 15** (App Router, TypeScript, React 19)
- **Tailwind CSS 4** — design token khai báo trong `app/globals.css` (`@theme`)
- **next/font** — Dancing Script (logo "Gạo"), Playfair Display (heading),
  Be Vietnam Pro (body). Cả 3 đều có subset `vietnamese` đầy đủ (README thiết kế
  ghi Sacramento / Jost nhưng 2 font này thiếu tiếng Việt trên Google Fonts nên
  đã thay bằng font tương đương có đủ dấu).
- **next/image** cho ảnh Giới thiệu + Gallery

## Chạy dự án

```bash
npm install
npm run dev        # http://localhost:3000
```

Build production:

```bash
npm run build
npm run start
```

## Cấu trúc

```
app/
  layout.tsx        # <html>, next/font, metadata, import globals.css
  page.tsx          # ghép các section (server component, đọc lib/content)
  globals.css       # @theme design tokens + keyframes + class nền hero
components/
  Header.tsx        # 'use client' — state menuOpen, hamburger < 860px
  Hero.tsx          # gradient động, marquee, quầng sáng float, fade-up
  About.tsx         # ảnh thật IMG_1924 + 3 số liệu
  Services.tsx      # 3 card dịch vụ + bảng giá (đồng bộ Google Business)
  Training.tsx      # 3 khóa học + ảnh gal-8.webp (tỉ lệ 4:5)
  Gallery.tsx       # lưới 8 ảnh (2 cột mobile / 4 desktop)
  Faq.tsx           # accordion <details> câu hỏi thường gặp (SEO long-tail)
  Contact.tsx       # địa chỉ / SĐT / giờ + nhúng Google Maps + nút Zalo
  Footer.tsx
  SectionHead.tsx   # cụm tiêu đề canh giữa (Dịch vụ, Gallery)
  JsonLd.tsx        # structured data: LocalBusiness + WebSite + FAQPage
app/
  sitemap.ts        # sinh /sitemap.xml lúc build
  robots.ts         # sinh /robots.txt lúc build
  opengraph-image.tsx  # sinh ảnh OG 1200×630 (next/og) lúc build
data/
  content.json      # toàn bộ nội dung — sửa ở đây, không cần đụng code
lib/content.ts      # import content.json, ép kiểu SiteContent
lib/seo.ts          # hằng số SEO: domain, toạ độ, giờ, rating, social
types/content.ts    # kiểu dữ liệu
public/
  assets/IMG_1924.JPG
  gallery/gal-1..gal-8.webp
```

## Nội dung

Text, bảng giá, khóa học, ảnh gallery, menu nav đều nằm trong `data/content.json`
(import trực tiếp lúc build). Có thể thay bằng fetch từ CMS/headless về sau, miễn
giữ đúng shape `SiteContent` trong `types/content.ts`.

## Ảnh & tích hợp

- `public/assets/IMG_1924.JPG` — ảnh thật chủ salon, section **Giới thiệu**.
- `public/gallery/gal-1..gal-8.webp` — 8 ảnh thật của salon cho lưới **Gallery**;
  `gal-8.webp` đồng thời dùng cho ảnh khối **Đào tạo**.
- **Placeholder** còn lại: ảnh nền hero (đang là hoạ tiết mờ CSS).
- **Google Maps**: section Liên hệ nhúng iframe địa điểm "Nối Mi Tân Phú"
  (`contact.mapEmbedUrl`) + link chỉ đường `contact.mapUrl`. Muốn đổi vị trí:
  Google Maps → Share → *Embed a map* → copy `src` vào `mapEmbedUrl`.
- **Nút "Nhắn Zalo"** trỏ tới `https://zalo.me/0908767818` (mở tab mới).
- **Bảng giá / dịch vụ** trong `data/content.json` lấy theo bài đăng "Bảng giá
  dịch vụ" trên Google Business của salon (cập nhật 07/04/2026).

## Chưa có

Không có form nhập liệu. Đặt lịch qua gọi điện / Zalo trực tiếp. Nếu cần thêm form
đặt lịch — làm ở bước sau.

## SEO

Từ khoá chủ đạo: *nối mi Tân Phú, làm móng Tân Phú, nail design, gội đầu thư giãn
Tân Phú, mi thiết kế*.

**On-page (đã làm trong code):**

- `app/layout.tsx` — title/description có "Tân Phú", canonical, Open Graph,
  Twitter card, `metadataBase`, robots.
- `app/sitemap.ts` + `app/robots.ts` → `/sitemap.xml`, `/robots.txt`.
- `app/opengraph-image.tsx` → ảnh share 1200×630 (đổi thiết kế tại đây).
- `components/JsonLd.tsx` — structured data `HealthAndBeautyBusiness` + `NailSalon`
  (địa chỉ, toạ độ, giờ mở cửa, bảng giá `OfferCatalog`, `areaServed`) +
  `WebSite` + `FAQPage`. Số liệu chỉnh trong `lib/seo.ts`.
- H1 (Hero) có cụm từ khoá; địa danh "Tân Phú" rải trong hero/about/dịch vụ/
  footer; alt ảnh mô tả; section FAQ (`data/content.json` → `faq`).

**`lib/seo.ts` cần cập nhật khi có dữ liệu thật:**

- `rating.value` / `rating.count` — điền số sao + số lượt đánh giá Google Maps
  (đang `null` nên schema bỏ `aggregateRating`; **không** bịa số).
- `social.facebook` / `instagram` / `tiktok` — dán URL khi đã tạo trang.

**Off-page (chưa làm — quyết định phần lớn thứ hạng local):**
Kế hoạch từng bước + nội dung dán sẵn (mô tả GBP, bài đăng, caption MXH, mẫu
tin xin đánh giá, shot-list ảnh, checklist video xác minh): **`docs/seo-offpage.md`**.

1. **Google Business Profile** — claim + xác minh; category chính "Tiệm làm
   móng", phụ "Dịch vụ nối mi lông mi" + "Thẩm mỹ viện"; giờ 7:30–20:00; up
   20–30 ảnh thật; xin 10+ đánh giá; trả lời Q&A; đăng bài đều.
2. **NAP nhất quán** — cùng 1 tên/địa chỉ/SĐT trên website, GBP, Facebook, Zalo,
   Foody… Tên chuẩn: **Gạo Beauty** (mô tả kèm "Nối Mi Tân Phú").
3. **Google Search Console + Bing Webmaster** — xác minh `www.noimitanphu.com`,
   nộp `sitemap.xml`, request indexing.
4. **Apex redirect** — đảm bảo `noimitanphu.com` → `www.noimitanphu.com` (301).
5. **Mạng xã hội** — tạo Facebook/Instagram/TikTok, gắn link vào `lib/seo.ts`
   (`social`) để đưa vào footer + schema `sameAs`.
6. **Citation/backlink địa phương** — khai báo trên directory VN, nhóm Facebook
   khu Tân Phú.

## Deploy — GitHub Pages

Site xuất tĩnh (`output: "export"` trong `next.config.mjs`) nên chạy được trên
GitHub Pages, không cần Node server.

- Build tay: `npm run build` → thư mục `out/` (đã `.gitignore`).
- Repo deploy: **`hson252850/app-ads`** (đã có `CNAME` = `www.noimitanphu.com`
  và `app-ads.txt` cho quảng cáo — 2 file này giữ nguyên ở gốc repo).
- Workflow `.github/workflows/deploy.yml` tự build + copy `CNAME` / `app-ads.txt`
  vào bản build + deploy. Chỉ chạy ở repo `app-ads` (guard `github.repository`).

**Bước thủ công 1 lần:** trong repo `app-ads` → *Settings → Pages →
Build and deployment → Source* → chọn **GitHub Actions**. Từ đó mỗi lần push
`main` sẽ tự deploy lên `https://www.noimitanphu.com`.

## Đưa lên GitHub (repo nguồn)

```bash
git remote add origin git@github.com:<user>/<repo>.git
git push -u origin main
```
