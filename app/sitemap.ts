import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

// Next.js xuất tĩnh -> tạo sẵn /sitemap.xml trong ./out lúc build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
