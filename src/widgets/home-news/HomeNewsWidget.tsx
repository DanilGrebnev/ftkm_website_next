import { Suspense } from "react";

import { getLastNewsForPublicHome } from "@/entities/article/api/actions/news";
import type { INewsItem } from "@/entities/article/api/types/News";
import { NewsBlockClient } from "@/views/Main/components/NewsBlock/NewsBlockClient";

import { NewsHomeDegraded } from "./NewsHomeDegraded";

const MAIN_NEWS_PREVIEW_LIMIT = 8;

async function NewsHomeStream() {
  const result = await getLastNewsForPublicHome(MAIN_NEWS_PREVIEW_LIMIT);

  if (!result.ok) {
    return <NewsHomeDegraded />;
  }

  const items = result.data as INewsItem[];
  if (!items.length) {
    return <NewsHomeDegraded />;
  }

  return <NewsBlockClient lastNews={items} />;
}

export function HomeNewsWidget() {
  return (
    <Suspense fallback={<NewsBlockClient lastNews={[]} />}>
      <NewsHomeStream />
    </Suspense>
  );
}
