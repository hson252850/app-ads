import data from "@/data/content.json";
import type { SiteContent } from "@/types/content";

/**
 * Nội dung site — sửa trong `data/content.json`, không cần đụng vào component.
 * Import trực tiếp lúc build (site tĩnh); có thể thay bằng fetch từ CMS sau này
 * miễn là trả đúng shape `SiteContent`.
 */
export const content = data as SiteContent;
