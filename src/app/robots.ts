import type { MetadataRoute } from "next";

import { getMetadataBaseUrl } from "@/shared/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = getMetadataBaseUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/CMS"],
    },
    sitemap: `${base.origin}/sitemap.xml`,
    host: base.origin,
  };
}
