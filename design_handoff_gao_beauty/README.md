# Handoff: Gạo Beauty — Salon Website (giao diện)

## Overview
Website giới thiệu & đặt lịch cho salon Gạo Beauty (chuyên Mi thiết kế, Nail Design, Gội đầu thư giãn, có nhận đào tạo học viên). Mục tiêu backend: dựng lại bằng NestJS.

## About the Design Files
File `Gao Beauty Website.dc.html` trong thư mục này là **prototype thiết kế dạng HTML** (dùng công cụ nội bộ "Design Component" — cần chạy đúng runtime để xem, không phải mã nguồn production). Mở nó chỉ để xem tham khảo trực quan; **không copy nguyên file vào codebase**. Hãy đọc mô tả chi tiết dưới đây (màu, font, layout, nội dung, animation) và **dựng lại bằng stack thật của bạn** — gợi ý: NestJS (backend + serve views bằng template engine, hoặc NestJS làm API riêng cho một frontend React/Next/Vue).

## Fidelity
**High-fidelity**: màu sắc, font, spacing, nội dung, animation dưới đây là bản final, cần tái tạo chính xác.

## Design Tokens
- Màu chính (tím đậm): `#3F2465`
- Màu tím trung: `#4A2C6D` (nút, hover: `#3F2465`)
- Màu tím sáng accent: `#6B3FA0`, `#8659B5`, `#9B72C4`
- Màu lavender nền phụ: `#F4EEFB`, nền tổng thể: `#FBF8FD`
- Border tím nhạt: `#E7DAF3`, `#EEE5F8`
- Chữ chính: `#2B2233`, chữ phụ: `#4a4054` / `#6b5f78` / `#8b7f96`
- Footer: nền `#3F2465`, chữ phụ `#C9A9E9` / `#A788C9`
- Font logo/script: **Sacramento** (Google Fonts) — dùng riêng cho chữ "Gạo"
- Font tiêu đề/heading: **Playfair Display** (500/600, có italic)
- Font phần thân: **Jost** (300/400/500/600)
- Bo góc: card 20px, ảnh lớn 24px, gallery 16px, nút pill (999px)
- Shadow card: `0 16px 40px -24px rgba(74,44,109,0.28)`

## Screens / Sections (một trang, scroll với nav anchor)

1. **Header (sticky)** — logo "Gạo" (Sacramento, 34px, `#4A2C6D`) + "BEAUTY" (Playfair, letter-spacing 3px, `#8659B5`); nav: Trang chủ / Giới thiệu / Dịch vụ / Đào tạo / Gallery / Liên hệ; nút CTA "Đặt lịch: 0908 767 818"; ≥860px hiện nav ngang, <860px hiện icon hamburger mở menu dọc (toggle bằng state `menuOpen`).

2. **Hero (#trangchu)** — nền gradient tím động (`#3F2465→#6B3FA0→#9B72C4`, background-size 300%, animate 16s dịch chuyển vị trí, tạo cảm giác sóng màu); 2 quầng sáng tròn mờ bay lượn nhẹ (float animation ~12-14s); dải chữ chạy marquee liên tục (loop 22s, linear) nội dung "Mi Thiết Kế ✦ Nail Design ✦ Gội Đầu Thư Giãn ✦ Nhận Đào Tạo Học Viên"; tiêu đề script "Gạo Beauty" (Sacramento, 56–110px responsive) fade-up khi vào; câu mô tả; 2 nút CTA (nút trắng "Xem dịch vụ" outline scroll tới #dichvu, nút viền trắng "Gọi đặt lịch" tel link).

3. **Giới thiệu (#gioithieu)** — ảnh bên trái (ảnh thật `assets/IMG_1924.JPG` chủ salon), bên phải: tiêu đề "Gạo Beauty — nơi vẻ đẹp bắt đầu từ sự tinh tế", 2 đoạn mô tả, 3 số liệu (3+ năm kinh nghiệm / 1000+ khách hàng / 3 dịch vụ chuyên sâu).

4. **Dịch vụ & bảng giá (#dichvu)** — nền `#F4EEFB`, 3 card dịch vụ (Mi Thiết Kế / Nail Design / Gội Đầu Thư Giãn), mỗi card: tag nhỏ, tiêu đề, mô tả, danh sách 3 dòng giá (tên — giá), border-top phân cách. Giá cụ thể xem trong file JS của component (mảng `services`).

5. **Đào tạo học viên (#daotao)** — text bên trái: giới thiệu lớp đào tạo + list 3 khóa học (Mi cơ bản–nâng cao, Nail chuyên sâu, Gội đầu dưỡng sinh) + nút "Đăng ký tư vấn khóa học"; ảnh bên phải (placeholder, tỉ lệ 4:5).

6. **Gallery (#gallery)** — nền `#F4EEFB`, lưới 8 ảnh placeholder vuông (2 cột mobile / 4 cột desktop), bo góc 16px.

7. **Liên hệ (#lienhe)** — bên trái: địa chỉ (012 lô D, Chung cư Nhiêu Lộc C, P. Phú Thọ Hòa, Tp.HCM — đối diện cổng trường tiểu học Tân Hương), SĐT/Zalo +84 908 767 818, giờ mở cửa 8:30–20:00; 2 nút "Gọi ngay" / "Nhắn Zalo". Bên phải: khối placeholder bản đồ (thay bằng Google Maps embed thật khi triển khai).

8. **Footer** — nền `#3F2465`, logo, mô tả ngắn, copyright + địa chỉ.

## Interactions & Behavior
- Mobile menu: click hamburger → toggle danh sách nav dọc dưới header; click 1 link → đóng menu.
- Hero: gradient animation (`gbGradient` 16s), marquee loop (`gbMarquee` 22s linear, nội dung lặp 2 lần để loop liền mạch), 2 float animation cho quầng sáng, fade-up cho dòng tagline + tiêu đề.
- Tất cả nút có hover đổi màu nền/chữ (xem style trong file).
- Không có form nhập liệu hiện tại — đặt lịch qua gọi điện / Zalo trực tiếp (theo yêu cầu khách hàng).

## Suggested NestJS structure
Vì hiện tại trang chủ yếu tĩnh (không có form submit), gợi ý kiến trúc tối giản:
- NestJS module `content`: API trả về dữ liệu dịch vụ/bảng giá, khóa học đào tạo, ảnh gallery (để dễ chỉnh sửa nội dung sau này mà không sửa code — có thể lưu trong DB hoặc file JSON ban đầu).
- Serve frontend: có thể dùng NestJS + template engine (Handlebars/EJS) để render trực tiếp các section trên, hoặc NestJS chỉ làm API và dựng frontend riêng (React/Next) gọi API này.
- Nếu sau này thêm form đặt lịch: thêm module `booking` (POST /bookings) lưu DB + gửi thông báo (email/Zalo OA).
- Static assets (ảnh gallery, ảnh giới thiệu) serve qua NestJS static hoặc CDN.

## Assets
- `assets/IMG_1924.JPG` — ảnh thật chủ salon (dùng ở section Giới thiệu).
- `assets/gallery/gal-1..gal-8.webp` — 8 ảnh thật của salon (mi, nail, gội đầu, không gian, đội ngũ) dùng cho lưới Gallery, đúng theo thứ tự gal-1 → gal-8 trái sang phải, trên xuống dưới.
- Ảnh trong hero background và ảnh khóa đào tạo vẫn là placeholder — cần ảnh thật bổ sung.

## Files
- `Gao Beauty Website.dc.html` — file thiết kế tham khảo (xem trong preview môi trường thiết kế; không dùng làm mã nguồn production).
