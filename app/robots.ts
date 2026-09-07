import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

// Next.js xuất tĩnh -> tạo sẵn /robots.txt trong ./out lúc build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
