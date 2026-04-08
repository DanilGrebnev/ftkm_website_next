import type { MetadataRoute } from "next";

import { getAllArticleIdsServerAction } from "@/shared/api/requests/articles";
import { getMetadataBaseUrl } from "@/shared/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = getMetadataBaseUrl().origin;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: origin, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${origin}/news`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${origin}/contacts`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${origin}/moreinfo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  let newsEntries: MetadataRoute.Sitemap = [];
  try {
    const ids = await getAllArticleIdsServerAction();
    newsEntries = ids.map((n) => ({
      url: `${origin}/news/${n.id}`,
      lastModified: n.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    // сборка / окружение без БД — остаются только статические URL
  }

  return [...staticRoutes, ...newsEntries];
}
