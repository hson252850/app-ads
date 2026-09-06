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
  Services.tsx      # 3 card dịch vụ + bảng giá
  Training.tsx      # 3 khóa học + ảnh placeholder 4:5
  Gallery.tsx       # lưới 8 ảnh (2 cột mobile / 4 desktop)
  Contact.tsx       # địa chỉ / SĐT / giờ + placeholder bản đồ
  Footer.tsx
  SectionHead.tsx   # cụm tiêu đề canh giữa (Dịch vụ, Gallery)
data/
  content.json      # toàn bộ nội dung — sửa ở đây, không cần đụng code
lib/content.ts      # import content.json, ép kiểu SiteContent
types/content.ts    # kiểu dữ liệu
public/
  assets/IMG_1924.JPG
  gallery/gal-1..gal-8.webp
```

## Nội dung

Text, bảng giá, khóa học, ảnh gallery, menu nav đều nằm trong `data/content.json`
(import trực tiếp lúc build). Có thể thay bằng fetch từ CMS/headless về sau, miễn
giữ đúng shape `SiteContent` trong `types/content.ts`.

## Ảnh

- `public/assets/IMG_1924.JPG` — ảnh thật chủ salon, section **Giới thiệu**.
- `public/gallery/gal-1..gal-8.webp` — 8 ảnh thật của salon, lưới **Gallery**
  (thứ tự gal-1 → gal-8, trái sang phải, trên xuống dưới).
- **Placeholder** (chờ ảnh khách hàng): ảnh nền hero (đang là hoạ tiết mờ CSS) và
  ảnh khối Đào tạo (ô lavender có nhãn).
- Bản đồ ở section Liên hệ: khối placeholder — nhúng Google Maps khi triển khai.

## Chưa có (theo README thiết kế)

Không có form nhập liệu. Đặt lịch qua gọi điện / Zalo trực tiếp. Nếu cần thêm form
đặt lịch — làm ở bước sau.

## Đưa lên GitHub

Repo đã `git init` sẵn (nhánh `main`). Sau khi tạo repo rỗng trên GitHub:

```bash
git remote add origin git@github.com:<user>/<repo>.git
git push -u origin main
```
