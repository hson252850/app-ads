import type { Metadata, Viewport } from "next";
import {
  Dancing_Script,
  Playfair_Display,
  Be_Vietnam_Pro,
} from "next/font/google";
import "./globals.css";

// Cả 3 font đều có subset "vietnamese" đầy đủ → tiếng Việt hiển thị 100%
// đúng font, không phải mượn glyph từ font hệ thống.

// Chữ script cho logo "Gạo" (thay Sacramento — Sacramento không có tiếng Việt).
const dancingScript = Dancing_Script({
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-dancing",
  display: "swap",
  fallback: ["Segoe Script", "Snell Roundhand", "cursive"],
});

// Heading.
const playfair = Playfair_Display({
  weight: ["500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

// Phần thân (thay Jost — Jost không có subset tiếng Việt trên Google Fonts).
const beVietnam = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-be-vietnam",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Gạo Beauty — Mi thiết kế · Nail Design · Gội đầu thư giãn",
  description:
    "Salon Gạo Beauty — chuyên mi thiết kế, nail design, gội đầu thư giãn tại Tp.HCM. Nhận đào tạo học viên. Đặt lịch: 0908 767 818.",
};

export const viewport: Viewport = {
  themeColor: "#3F2465",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`${dancingScript.variable} ${playfair.variable} ${beVietnam.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
