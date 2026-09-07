# SEO Off-page — Kế hoạch & nội dung dán sẵn

> Mục tiêu: leo top Google cho **nối mi Tân Phú · làm móng Tân Phú · nail design ·
> gội đầu thư giãn Tân Phú · mi thiết kế**.
> Phần on-page (code) đã xong — xem `README.md` mục SEO. File này là phần
> **off-page** bạn tự thao tác, kèm sẵn mọi đoạn text để copy.

## Chiến lược tên

- **Google Business Profile giữ tên "Nối Mi Tân Phú"** (đã verify, không đổi).
- **"Gạo Beauty"** là thương hiệu — đẩy SEO qua: website (logo, nội dung),
  mạng xã hội, phần mô tả GBP, bài đăng GBP, và schema `alternateName`.
- Schema trên web: `name` = "Nối Mi Tân Phú" (khớp GBP), `alternateName` = "Gạo Beauty".

## Thông tin chuẩn (NAP) — dùng GIỐNG HỆT ở mọi nơi

| Trường | Giá trị |
|---|---|
| Tên (GBP + citation) | **Nối Mi Tân Phú** |
| Tên thương hiệu (web + MXH) | **Gạo Beauty** |
| Địa chỉ | 012D, Chung cư Nhiêu Lộc, Phường Tân Quý, Quận Tân Phú, TP.HCM (76000) |
| Mô tả vị trí | Đối diện cổng trường tiểu học Tân Hương |
| Điện thoại | 0908 767 818 |
| Giờ mở cửa | 7:30 – 20:00, tất cả các ngày trong tuần |
| Website | https://www.noimitanphu.com |
| Zalo | https://zalo.me/0908767818 |
| Kinh nghiệm | 16+ năm |
| Khu vực phục vụ | Quận Tân Phú và lân cận: Tân Quý, Tân Thành, Hoà Thạnh, Phú Thọ Hoà, Sơn Kỳ, Tân Sơn Nhì |

⚠️ Sai lệch NAP (viết tắt khác nhau, số nhà khác, tên khác) làm tụt hạng local. Copy y nguyên bảng trên.

---

## Ai làm gì

| Việc | Ai |
|---|---|
| Sửa `lib/seo.ts`, thêm thẻ xác minh, icon MXH footer, build + deploy | **Claude** — chỉ cần bạn nói "OK deploy" |
| Soạn nội dung dán (đã có sẵn trong file này) | **Claude** |
| Đăng nhập Google/Meta/TikTok, **tạo tài khoản**, xác minh GBP, bấm Verify, giải CAPTCHA | **Bạn** (Claude không được phép) |
| Thêm bản ghi DNS ở nhà cung cấp tên miền | **Bạn** |

**Claude cần bạn gửi lại:**
1. Chuỗi `content="..."` khi xác minh Search Console (HTML tag).
2. 3 URL trang mạng xã hội sau khi tạo.
3. Nhà cung cấp DNS của `noimitanphu.com` (Cloudflare / Tenten / Mắt Bão / PA Vietnam / GoDaddy …).
4. Báo khi: GBP đã verify · số đánh giá Google đạt ≥ 5 (kèm số sao + số lượt) · đã thêm DNS.

---

# PHẦN 1 — Google Business Profile (quan trọng nhất)

✅ **Đã claim + verify xong** (07/09/2026) — profile "Nối Mi Tân Phú", store code
`00639726320983444316`, địa chỉ 012D Chung Cư Nhiêu Lộc, P.Tân Quý, Q.Tân Phú.
Giữ nguyên tên "Nối Mi Tân Phú". Rating: 5.0★ / 1 lượt.

Việc còn lại: điền hồ sơ cho đầy (mục 1.3 → 1.8).

### 1.3 Category

- **Category chính:** `Tiệm làm móng`
- **Category phụ:** `Dịch vụ nối mi lông mi` · `Thẩm mỹ viện`
- *(tuỳ chọn, nếu muốn đẩy mảng dạy nghề)* `Trường dạy nghề` hoặc `Trung tâm đào tạo`

### 1.4 Thông tin cơ bản — dán từng ô

**Mô tả doanh nghiệp** (paste vào ô "Mô tả", ~600 ký tự):

```
Nối Mi Tân Phú – Gạo Beauty là salon làm đẹp tại Quận Tân Phú, TP.HCM — chuyên nối mi thiết kế, nail design – làm móng và gội đầu thư giãn. Salon nằm tại 012D Chung cư Nhiêu Lộc, Phường Tân Quý, ngay đối diện cổng trường tiểu học Tân Hương, thuận tiện cho khách khu Tân Quý, Hoà Thạnh, Phú Thọ Hoà, Sơn Kỳ.

Đội ngũ kỹ thuật viên hơn 16 năm kinh nghiệm, tư vấn riêng theo dáng mắt và đôi tay của từng khách, dụng cụ vệ sinh riêng cho mỗi người. Dịch vụ: nối mi Classic – Volume – Mega Volume; sơn gel, sơn thạch, sơn mắt mèo, úp – phá móng, vẽ và đính đá; gội thảo dược, tẩy tế bào chết, massage đầu – vai – gáy. Có nhận đào tạo học viên nối mi và nail.

Mở cửa 7:30–20:00 tất cả các ngày. Đặt lịch: 0908 767 818.
```

**Các ô khác:**
- Điện thoại: `0908 767 818`
- Website: `https://www.noimitanphu.com`
- Giờ: Thứ 2–Chủ nhật `07:30 – 20:00`
- Khu vực phục vụ: thêm lần lượt `Tân Quý`, `Tân Thành`, `Hoà Thạnh`, `Phú Thọ Hoà`, `Sơn Kỳ`, `Tân Sơn Nhì`, `Quận Tân Phú`
- Thuộc tính: bật "Có chỗ ngồi chờ", "Wi-Fi", "Vệ sinh dụng cụ", "Nhận đặt lịch", "Thanh toán chuyển khoản" (tuỳ cái nào đúng)

### 1.5 Mục "Dịch vụ" — thêm kèm giá

**Nối mi**
- Nối mi Classic – Volume – Mega Volume — 200.000₫–380.000₫

**Nail / Làm móng**
- Sơn thường — 30.000₫
- Sơn gel — 80.000₫
- Sơn thạch — 90.000₫
- Sơn mắt mèo / Flash — 100.000₫–130.000₫
- Vẽ / đính đá / tráng gương — 10.000₫–30.000₫/ngón
- Phủ cứng móng — 30.000₫–50.000₫
- Úp móng — 80.000₫–110.000₫
- Phá móng (úp / gel) — 20.000₫–40.000₫
- Cắt da tay / chân — 30.000₫
- Tẩy tế bào chết + ngâm thảo dược + chà gót + massage chân — 110.000₫

**Gội đầu thư giãn**
- Gội thường — 50.000₫
- Gội thảo dược — 60.000₫
- Gội + tẩy tế bào chết + mặt nạ thư giãn — 70.000₫
- Combo gội + tẩy TBC + massage + đắp mặt nạ — 100.000₫
- Trang điểm, làm tóc — 150.000₫–200.000₫
- Kẹp thẳng, bấm phồng, uốn giả — 50.000₫–60.000₫

**Đào tạo**
- Khoá nối mi cơ bản – nâng cao
- Khoá nail chuyên sâu

### 1.6 Ảnh — shot-list (chụp ngang, sáng, không filter nặng)

| # | Ảnh | Ghi chú |
|---|---|---|
| 1 | Mặt tiền có bảng hiệu + số nhà | Ảnh bìa |
| 2 | Lối vào / cửa tiệm | |
| 3 | Không gian tổng khu làm việc | |
| 4 | Quầy lễ tân | |
| 5–7 | Khu nối mi (giường, đèn, KTV đang làm) | |
| 8–10 | Khu nail (bàn, kệ sơn, mẫu móng đẹp) | |
| 11–12 | Khu gội đầu | |
| 13 | Tủ / khay dụng cụ đã tiệt trùng | tạo niềm tin vệ sinh |
| 14–16 | Before / after: nối mi, bộ nail, gót chân | |
| 17–18 | Kỹ thuật viên / đội ngũ | |
| 19–20 | Khách đang được phục vụ (xin phép trước) | |

Đặt tên file: `noimitanphu-01.jpg`, `-02.jpg`… (có từ khoá, dễ index).

### 1.7 Google Posts — đăng 1 bài/tuần (8 bài đầu soạn sẵn)

**Bài 1 — Nối mi thiết kế**
```
NỐI MI THIẾT KẾ THEO DÁNG MẮT — TỪ 200K
Classic tự nhiên đi làm, Volume bồng bềnh, Mega Volume dày sang. Kỹ thuật viên 16+ năm kinh nghiệm tư vấn độ cong – độ dày hợp gương mặt, giữ dáng 3–4 tuần.
📍 Gạo Beauty – 012D Chung cư Nhiêu Lộc, Q.Tân Phú (đối diện trường tiểu học Tân Hương)
📞 Đặt lịch: 0908 767 818
```

**Bài 2 — Bảng giá nail**
```
LÀM MÓNG Ở TÂN PHÚ — BẢNG GIÁ RÕ RÀNG
Sơn thường 30k · sơn gel 80k · sơn thạch 90k · mắt mèo/Flash 100–130k · úp móng 80–110k. Vẽ, đính đá, tráng gương từ 10k/ngón. Mẫu cập nhật theo mùa.
📞 0908 767 818 — Gạo Beauty, Q.Tân Phú
```

**Bài 3 — Combo gội đầu thư giãn**
```
GỘI ĐẦU THƯ GIÃN — XẢ CĂNG THẲNG SAU NGÀY DÀI
Combo gội + tẩy tế bào chết + massage đầu–vai–gáy + đắp mặt nạ chỉ 100k. Gội thảo dược 60k. Không gian yên tĩnh, khăn & dụng cụ riêng từng khách.
📍 012D Chung cư Nhiêu Lộc, Q.Tân Phú · 📞 0908 767 818
```

**Bài 4 — Úp móng**
```
ÚP MÓNG DÁNG ĐẸP — 80K ĐẾN 110K
Chọn dáng almond, vuông, oval… úp gọn tay, bền 2–3 tuần. Có fill và phá móng nhẹ nhàng không hại móng thật.
Gạo Beauty – Q.Tân Phú · 0908 767 818
```

**Bài 5 — Sơn mắt mèo / Flash**
```
SƠN MẮT MÈO & FLASH LUNG LINH — 100–130K
Hiệu ứng ánh sáng chạy theo tay, hợp đi tiệc và chụp hình. Đặt lịch trước để chọn màu ưng ý.
📞 0908 767 818 — Nối Mi Tân Phú / Gạo Beauty
```

**Bài 6 — Chăm sóc chân**
```
CHÂN MỀM MỊN ĐÓN CUỐI TUẦN
Tẩy tế bào chết + ngâm thảo dược + chà gót + massage chân — 110k. Thư giãn 45 phút, bước ra êm chân.
Gạo Beauty, 012D Chung cư Nhiêu Lộc, Q.Tân Phú
```

**Bài 7 — Đào tạo**
```
HỌC NGHỀ NỐI MI & NAIL — CẦM TAY CHỈ VIỆC
Lớp nhỏ, thực hành trên khách thật, cấp chứng chỉ, hỗ trợ định hướng mở tiệm. Nhận cả người mới bắt đầu.
Tư vấn khoá học: 0908 767 818
```

**Bài 8 — Vị trí & giờ**
```
GHÉ GẠO BEAUTY Ở TÂN PHÚ
📍 012D Chung cư Nhiêu Lộc, Q.Tân Phú — đối diện cổng trường tiểu học Tân Hương
🕗 Mở cửa 7:30–20:00 mỗi ngày
📞 0908 767 818 · Zalo: zalo.me/0908767818
```

### 1.8 Q&A trên GBP

Tự đăng câu hỏi rồi tự trả lời (được phép). Dùng luôn 6 câu FAQ trên website
(`data/content.json` → `faq`), hoặc mở https://www.noimitanphu.com/#hoidap để copy.

---

# PHẦN 2 — Kéo đánh giá (làm liên tục)

Đang có 1 đánh giá. **Mốc cần: ≥ 5** để website bật hiển thị sao (schema `aggregateRating`).

### 2.1 Link đánh giá + mã QR

- **Link đánh giá:** https://g.page/r/CZdYa7l01F5nEBM/review
- **Mã QR để in:** `docs/assets/qr-danh-gia-google.png` (540×540) hoặc
  `docs/assets/qr-danh-gia-google.svg` (vector — gửi file này cho tiệm in để nét ở mọi kích cỡ).
- Cách dùng: in cỡ ~5–8 cm, ép plastic hoặc làm standee mini để ở quầy thu ngân /
  bàn nail; kèm dòng chữ *"Quét đánh giá 5⭐ cho tụi mình nhé 🥰"*.
- Rút gọn cho tin nhắn nếu muốn: dùng link `g.page/r/CZdYa7l01F5nEBM/review` luôn (đã ngắn).

### 2.2 Mẫu tin nhắn xin đánh giá (Zalo / SMS)

**Mẫu A — ngắn:**
```
Gạo Beauty cảm ơn chị đã ghé tiệm hôm nay ạ 🌷 Nếu chị hài lòng, chị dành 1 phút đánh giá 5⭐ giúp tiệm với nhé: [LINK]. Cảm ơn chị nhiều!
```

**Mẫu B — có nhắc dịch vụ:**
```
Chị ơi, bộ mi/nail hôm nay chị thấy ổn không ạ? Tiệm nhỏ mới mở nên rất cần chị ủng hộ 1 đánh giá trên Google giúp ạ: [LINK] 🙏
```

**Mẫu C — sau vài ngày:**
```
Gạo Beauty đây ạ. Mi/nail giữ dáng tốt không chị? Chị đánh giá giúp tiệm 1 dòng trên Google nha, tụi em biết ơn lắm: [LINK]
```

### 2.3 Nguyên tắc
- Chỉ xin khi khách **thật sự hài lòng**, hỏi trực tiếp trước khi gửi link.
- **Không** mua đánh giá, không nhờ người không dùng dịch vụ, không đánh giá bằng wifi tiệm hàng loạt → Google lọc/khoá.
- Trả lời **mọi** đánh giá (kể cả 5 sao): cảm ơn ngắn gọn, nhắc tên dịch vụ.
- Nhịp thực tế: 1–3 đánh giá thật/tuần là tốt.

### 2.4 Khi đạt ≥ 5 đánh giá
Gửi Claude: **số sao trung bình + số lượt**. Claude điền `lib/seo.ts`
(`rating.value`, `rating.count`) → deploy → schema có `aggregateRating`.

---

# PHẦN 3 — Google Search Console + Bing (~15 phút)

1. https://search.google.com/search-console → **Add property** → chọn **URL prefix** → nhập `https://www.noimitanphu.com`
2. Cách xác minh: chọn **HTML tag** → copy đoạn `<meta name="google-site-verification" content="XXXXXXXX" />` → **gửi Claude chuỗi `content`**.
   → Claude thêm vào `app/layout.tsx` (`metadata.verification.google`) → deploy.
3. Đợi deploy xong (~2 phút) → quay lại GSC bấm **Verify**.
4. Menu **Sitemaps** → nhập `sitemap.xml` → **Submit**.
5. **URL Inspection** → dán `https://www.noimitanphu.com/` → **Request indexing**.
6. https://www.bing.com/webmasters → **Import from Google Search Console** (1 click).
7. *(khuyến khích)* Thêm thêm property loại **Domain** (`noimitanphu.com`) → cần bản ghi **DNS TXT** → Claude đưa bản ghi, bạn dán vào trang quản trị tên miền.

---

# PHẦN 4 — Mạng xã hội (~30 phút)

### 4.1 Tạo tài khoản (bạn tự tạo)

| Nền tảng | Loại | Tên hiển thị | Username gợi ý |
|---|---|---|---|
| Facebook | Trang → "Doanh nghiệp địa phương" | Gạo Beauty - Nối Mi Tân Phú | @gaobeauty.tanphu |
| Instagram | Chuyển sang Business/Professional | Gạo Beauty · Tân Phú | @gaobeauty.tanphu |
| TikTok | Chuyển sang tài khoản Doanh nghiệp | Gạo Beauty Tân Phú | @gaobeauty.tanphu |

**Bio dùng chung (paste):**
```
Nối mi thiết kế · Nail design · Gội đầu thư giãn
📍 012D Chung cư Nhiêu Lộc, Q.Tân Phú, TP.HCM
📞 0908 767 818
🌐 noimitanphu.com
```
- Ảnh đại diện: logo "Gạo Beauty" nền tím (Claude có thể xuất từ `app/opengraph-image.tsx`).
- Facebook: điền đúng **Địa chỉ + Giờ + SĐT** (khớp NAP), thêm nút "Gọi ngay" + link website.

### 4.2 5 caption bài đăng đầu (kèm hashtag địa phương)

**1.**
```
Nối mi thiết kế theo dáng mắt — tự nhiên hay quyến rũ đều chiều 💜
Đặt lịch: 0908 767 818 · Gạo Beauty, Q.Tân Phú
#noimitanphu #noimi #mithietke #nailtanphu #tanphu #lammongtanphu #saigon
```
**2.**
```
Bảng giá nail rõ ràng, mẫu cập nhật liên tục. Sơn gel 80k, mắt mèo từ 100k, úp móng 80–110k.
Gạo Beauty – đối diện trường tiểu học Tân Hương, Q.Tân Phú
#nailtanphu #lammongtanphu #naildesign #sonmatmeo #tanphu #nailsaigon
```
**3.**
```
Gội đầu thư giãn thảo dược + massage đầu vai gáy — 100k combo. Nghỉ ngơi giữa lòng Tân Phú.
📞 0908 767 818
#goidauthugian #goidautanphu #tanphu #spatanphu #massage
```
**4.**
```
Before – After bộ nail hôm nay 💅 Bạn thích mẫu nào?
Gạo Beauty, 012D Chung cư Nhiêu Lộc, Q.Tân Phú
#naildesign #nailtanphu #lammongtanphu #beforeafter #tanphu
```
**5.**
```
Nhận đào tạo nối mi & nail — học trên khách thật, cấp chứng chỉ, hỗ trợ mở tiệm.
Tư vấn: 0908 767 818
#hocnoimi #hocnail #daotaonoimi #tanphu #nghelamdep
```

### 4.3 Gửi Claude 3 URL trang
Claude thêm vào `lib/seo.ts` (`social`) → hiện icon ở footer + vào schema `sameAs` → deploy.

---

# PHẦN 5 — Tên miền Mắt Bão + GitHub Pages (1 lần)

Tên miền `noimitanphu.com` mua ở **Mắt Bão**, site chạy trên **GitHub Pages**
(repo deploy `hson252850/app-ads`, đã có file `CNAME` = `www.noimitanphu.com`).

### 5.1 Cấu hình DNS ở Mắt Bão

Đăng nhập id.matbao.net → **Quản lý tên miền** → `noimitanphu.com` → **DNS / Quản lý bản ghi**
(nếu tên miền đang trỏ nameserver Mắt Bão; nếu bạn đã đưa sang Cloudflare thì làm bên Cloudflare).

Tạo các bản ghi sau (xoá bản ghi A/CNAME/Redirect cũ nào trỏ "parking" của Mắt Bão):

| Loại | Host / Tên | Giá trị | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | 3600 |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |
| CNAME | `www` | `hson252850.github.io` | 3600 |

*(Tuỳ chọn, thêm IPv6 nếu panel cho phép AAAA):*
`2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` — Host `@`.

- **Không** dùng chức năng "Chuyển hướng URL / URL Frame" của Mắt Bão cho `@` — sẽ hỏng HTTPS. Dùng 4 bản ghi A ở trên.
- Nếu panel bắt buộc có 1 bản ghi CNAME `@` thì tên miền này không hỗ trợ apex chuẩn — báo Claude để chuyển hướng bằng cách khác.

### 5.2 Kiểm tra ở GitHub

Repo `hson252850/app-ads` → **Settings → Pages**:
- **Custom domain** = `www.noimitanphu.com` (đã set qua file `CNAME`) — chờ tới khi hiện dấu ✓ xanh "DNS check successful".
- Tick **Enforce HTTPS** (cấp SSL có thể mất tới 24h sau khi DNS đúng).

### 5.3 Nghiệm thu (sau 15 phút – vài giờ DNS lan)

- `https://www.noimitanphu.com` → mở bình thường, có khoá HTTPS.
- `http://noimitanphu.com` (KHÔNG www) → **tự 301 sang** `https://www.noimitanphu.com`
  (GitHub Pages tự làm khi 4 bản ghi A apex đã trỏ đúng).
- Check nhanh: `dig noimitanphu.com +short` → phải ra 4 IP `185.199.108–111.153`.

### 5.4 Xác minh Domain-property trong Search Console (tuỳ chọn, nên làm)

GSC → Add property → **Domain** → `noimitanphu.com` → Google cho 1 bản ghi **TXT**:

| Loại | Host | Giá trị |
|---|---|---|
| TXT | `@` | `google-site-verification=...` (Google cấp) |

Dán vào Mắt Bão DNS → quay lại GSC bấm Verify. Domain-property gom cả `www` +
non-www + http/https về 1 chỗ báo cáo.

---

# Bảng theo dõi tiến độ

- [x] 1. GBP: claim + verify xong (07/09/2026)
- [ ] 2. GBP: điền category + mô tả + dịch vụ + giờ + khu vực
- [ ] 3. GBP: up ≥ 20 ảnh
- [ ] 4. GBP: đăng bài 1 (rồi 1 bài/tuần)
- [ ] 5. GBP: thêm Q&A
- [ ] 6. Reviews: lấy link đánh giá → gửi Claude làm QR
- [ ] 7. Reviews: đạt ≥ 5 → gửi Claude số sao + số lượt
- [x] 8. Mắt Bão: 4 bản ghi A (apex) + CNAME www → hson252850.github.io (DNS đã trỏ đúng)
- [x] 9. GitHub Pages: HTTPS hoạt động (HTTP/2 200, server GitHub)
- [x] 10. Nghiệm thu: `noimitanphu.com` → 301 → `https://www.noimitanphu.com/` ✓
- [x] 11. GSC: verify bằng HTML tag (token trong app/layout.tsx) ✓
- [x] 12. GSC: submit `sitemap.xml` + Request indexing trang chủ
- [ ] 13. GSC: thêm Domain-property (TXT ở Mắt Bão) — tuỳ chọn
- [x] 14. Bing Webmaster: import from GSC
- [x] 15. Facebook Page: tạo xong (đã gắn vào site + footer + schema). Còn: đặt username @gaobeauty.tanphu khi đủ điều kiện + đăng bài (5 caption ở Phần 4.2)
- [ ] 16. Instagram: tạo + 3 bài → gửi Claude URL
- [ ] 17. TikTok: tạo + 3 video → gửi Claude URL
- [x] 18. Facebook đã vào `lib/seo.ts` + icon footer + `sameAs` (IG/TikTok chờ URL)
