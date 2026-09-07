import { ImageResponse } from "next/og";
import { SITE } from "@/lib/seo";

export const alt =
  "Gạo Beauty — Nối mi, Nail design, Gội đầu thư giãn tại Quận Tân Phú";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Bắt buộc khi output: "export" — sinh ảnh 1 lần lúc build.
export const dynamic = "force-static";

// Ảnh OG sinh lúc build (next/og) — dùng khi share link ra Facebook / Zalo.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #3F2465 0%, #6B3FA0 50%, #9B72C4 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 46,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#E7D9F7",
          }}
        >
          {SITE.alternateName}
        </div>
        <div style={{ fontSize: 132, fontWeight: 700, margin: "16px 0 8px" }}>
          {SITE.name}
        </div>
        <div style={{ fontSize: 40, color: "#F1E9FA", maxWidth: 900 }}>
          Nối mi thiết kế · Nail design · Làm móng · Gội đầu thư giãn
        </div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#E7D9F7" }}>
          Quận Tân Phú, TP.HCM · 0908 767 818
        </div>
      </div>
    ),
    size,
  );
}
