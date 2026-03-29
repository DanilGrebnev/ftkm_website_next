import {
  excerptFromNewsBody,
  getMetadataBaseUrl,
  getSiteUrlString,
  SITE_DEFAULT_TITLE,
} from "@/shared/lib/site";

export function OrganizationJsonLd() {
  const url = getSiteUrlString();
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Кафедра «Машины и технология литейного производства» (МиТЛП)",
    alternateName: "МиТЛП ВолгГТУ",
    url,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Волгоградский государственный технический университет",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const base = getMetadataBaseUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_DEFAULT_TITLE,
    url: base.origin,
    inLanguage: "ru-RU",
    publisher: {
      "@type": "EducationalOrganization",
      name: "Кафедра МиТЛП ВолгГТУ",
      url: base.origin,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function NewsArticleJsonLd({
  newsId,
  title,
  body,
}: {
  newsId: string;
  title: string;
  body: string;
}) {
  const base = getMetadataBaseUrl().origin;
  const url = `${base}/news/${newsId}`;
  const description = excerptFromNewsBody(body) || title;

  const article = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    inLanguage: "ru-RU",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Новости",
        item: `${base}/news`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
