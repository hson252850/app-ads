/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Xuất site tĩnh vào ./out để deploy lên GitHub Pages (không cần Node server).
  output: "export",

  // GitHub Pages phục vụ file tĩnh -> không có Image Optimization API của Next.
  images: { unoptimized: true },

  // Mỗi route thành <route>/index.html -> GitHub Pages serve được mà không cần rewrite.
  trailingSlash: true,
};

export default nextConfig;
