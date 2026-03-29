const DEFAULT_SITE_URL = "http://mitlp.vstu.ru:8090";

export function getSiteUrlString(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}

export function getMetadataBaseUrl(): URL {
  return new URL(`${getSiteUrlString()}/`);
}

/** Короткое plain-text описание из HTML/текста тела новости для meta description. */
export function excerptFromNewsBody(body: string | undefined, maxLen = 155): string {
  if (!body?.trim()) return "";
  const plain = body
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= maxLen) return plain;
  const cut = plain.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

export const SITE_DEFAULT_TITLE =
  "Кафедра «Машины и технология литейного производства» | ВолгГТУ";

export const SITE_DEFAULT_DESCRIPTION =
  "Официальный сайт кафедры МиТЛП ВолгГТУ: подготовка инженеров для литейного производства, научные направления, материалы для абитуриентов, новости и контакты.";

export const SITE_OG_IMAGE_PATH = "/images/Logo_vstu.webp";
