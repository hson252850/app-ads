import type { Metadata, Viewport } from "next";
import {
  Dancing_Script,
  Playfair_Display,
  Be_Vietnam_Pro,
} from "next/font/google";
import { SITE } from "@/lib/seo";
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
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Nối Mi Tân Phú · Nail Design · Gội Đầu Thư Giãn | Gạo Beauty",
    template: "%s | Gạo Beauty Tân Phú",
  },
  description:
    "Gạo Beauty — salon nối mi thiết kế, nail design, làm móng và gội đầu thư giãn tại Quận Tân Phú, TP.HCM (đối diện cổng trường tiểu học Tân Hương). Kỹ thuật viên 16+ năm kinh nghiệm. Đặt lịch: 0908 767 818.",
  keywords: [
    "nối mi Tân Phú",
    "nail design Tân Phú",
    "làm móng Tân Phú",
    "gội đầu thư giãn Tân Phú",
    "mi thiết kế",
    "tiệm nail Tân Phú",
    "nối mi quận Tân Phú",
    "làm nail Tân Phú",
    "Gạo Beauty",
    "Nối Mi Tân Phú",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: `${SITE.url}/`,
    siteName: SITE.name,
    title: "Nối Mi · Nail Design · Làm Móng · Gội Đầu Thư Giãn tại Tân Phú",
    description:
      "Salon Gạo Beauty tại Quận Tân Phú, TP.HCM — nối mi thiết kế, nail design, làm móng, gội đầu thư giãn. Đặt lịch: 0908 767 818.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nối Mi Tân Phú · Nail Design · Gội Đầu Thư Giãn | Gạo Beauty",
    description:
      "Salon nối mi, nail design, làm móng & gội đầu thư giãn tại Quận Tân Phú, TP.HCM.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
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
