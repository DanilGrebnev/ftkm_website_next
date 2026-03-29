import type { Metadata } from "next";
import { cache } from "react";

import { getNewsMetaById } from "@/entities/article/model/server_actions/news";
import {
  excerptFromNewsBody,
  getMetadataBaseUrl,
  SITE_DEFAULT_TITLE,
  SITE_OG_IMAGE_PATH,
} from "@/shared/lib/site";
import { NewsArticleJsonLd } from "@/shared/seo/JsonLd";

import { NewsArticleRouteClient } from "./NewsArticleRouteClient";

const getNewsMeta = cache(getNewsMetaById);

type Props = { params: Promise<{ _id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { _id } = await params;
  const news = await getNewsMeta(_id);

  if (!news) {
    return {
      title: "Новость не найдена",
      robots: { index: false, follow: true },
    };
  }

  const base = getMetadataBaseUrl();
  const description = excerptFromNewsBody(news.body) || news.title;
  const pageUrl = `${base.origin}/news/${_id}`;

  return {
    title: { absolute: news.title },
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: news.title,
      description,
      type: "article",
      locale: "ru_RU",
      url: pageUrl,
      siteName: SITE_DEFAULT_TITLE,
      images: [{ url: SITE_OG_IMAGE_PATH }],
    },
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description,
    },
  };
}

export default async function OneNewsPage({ params }: Props) {
  const { _id } = await params;
  const news = await getNewsMeta(_id);

  return (
    <>
      {news ? (
        <NewsArticleJsonLd newsId={_id} title={news.title} body={news.body} />
      ) : null}
      <NewsArticleRouteClient />
    </>
  );
}
